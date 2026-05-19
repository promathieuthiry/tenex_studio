import { defineAction } from 'astro:actions';
import { Resend } from 'resend';

import { isLocale, type Locale } from '@/lib/i18n';
import { CONTACT } from '@/data/legal';
import {
  initialContactState,
  type ContactFormState,
  type NewsletterFormState,
} from '@/actions/contact-types';

const FIELD_LABELS = {
  fr: {
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Courriel',
    company: 'Entreprise',
    message: 'Message',
  },
  en: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    company: 'Company',
    message: 'Message',
  },
} as const satisfies Record<Locale, Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resendApiKey = import.meta.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

function readLocale(formData: FormData): Locale {
  const raw = formData.get('locale');
  if (typeof raw === 'string' && isLocale(raw)) return raw;
  return 'fr';
}

function readString(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === 'string' ? v.trim() : '';
}

function logEvent(event: string, fields: Record<string, unknown>): void {
  console.log(JSON.stringify({ event, ...fields }));
}

function logWarn(event: string, fields: Record<string, unknown>): void {
  console.warn(JSON.stringify({ event, ...fields }));
}

async function sendViaResend(args: {
  subject: string;
  text: string;
}): Promise<{ ok: true } | { ok: false; status: number | string }> {
  const inbox = import.meta.env.CONTACT_INBOX;
  if (!resendClient || !inbox) {
    return { ok: false, status: 'missing-env' };
  }
  try {
    const { error } = await resendClient.emails.send({
      from: 'Tenex Studio <hello@tenex.studio>',
      to: inbox,
      subject: args.subject,
      text: args.text,
    });
    if (error) {
      return { ok: false, status: error.name ?? 'send-error' };
    }
    return { ok: true };
  } catch (err) {
    const status = err instanceof Error ? err.name : 'unknown';
    return { ok: false, status };
  }
}

async function handleContact(formData: FormData): Promise<ContactFormState> {
  const locale = readLocale(formData);
  const v = CONTACT.validation;

  const firstName = readString(formData, 'firstName');
  const lastName = readString(formData, 'lastName');
  const email = readString(formData, 'email');
  const company = readString(formData, 'company');
  const message = readString(formData, 'message');

  const values = { firstName, lastName, email, company, message };
  const fieldErrors: Record<string, string> = {};

  if (!firstName) fieldErrors.firstName = v.firstNameRequired[locale];
  if (!lastName) fieldErrors.lastName = v.lastNameRequired[locale];
  if (!email) fieldErrors.email = v.emailRequired[locale];
  else if (!EMAIL_RE.test(email)) fieldErrors.email = v.emailInvalid[locale];
  if (!message) fieldErrors.message = v.messageRequired[locale];
  else if (message.length < 20)
    fieldErrors.message = v.messageTooShort[locale];

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, formError: null, values };
  }

  const labels = FIELD_LABELS[locale];
  const fullName = `${firstName} ${lastName}`.trim();
  const subject = `Tenex • [${locale}] New project inquiry — ${fullName}`;
  const text = [
    `${labels.firstName}: ${firstName}`,
    `${labels.lastName}: ${lastName}`,
    `${labels.email}: ${email}`,
    company ? `${labels.company}: ${company}` : null,
    '',
    `${labels.message}:`,
    message,
  ]
    .filter((line): line is string => line !== null)
    .join('\n');

  const result = await sendViaResend({ subject, text });
  if (!result.ok) {
    logWarn('contact.send_failed', {
      locale,
      vendor_status: result.status,
    });
    return {
      ok: false,
      fieldErrors: {},
      formError: CONTACT.formError[locale],
      values,
    };
  }

  logEvent('contact.submitted', { locale, size: message.length });

  return {
    ok: true,
    fieldErrors: {},
    formError: null,
    values: initialContactState.values,
  };
}

async function handleNewsletter(
  formData: FormData,
): Promise<NewsletterFormState> {
  const locale = readLocale(formData);
  const v = CONTACT.validation;
  const email = readString(formData, 'email');

  if (!email) {
    return {
      ok: false,
      formError: null,
      fieldError: v.emailRequired[locale],
      email,
    };
  }
  if (!EMAIL_RE.test(email)) {
    return {
      ok: false,
      formError: null,
      fieldError: v.emailInvalid[locale],
      email,
    };
  }

  const subject = `Tenex • [${locale}] Newsletter signup`;
  const text = `New subscriber: ${email}`;

  const result = await sendViaResend({ subject, text });
  if (!result.ok) {
    logWarn('newsletter.send_failed', {
      locale,
      vendor_status: result.status,
    });
    return {
      ok: false,
      formError: CONTACT.formError[locale],
      fieldError: null,
      email,
    };
  }

  logEvent('newsletter.subscribed', { locale });

  return { ok: true, formError: null, fieldError: null, email: '' };
}

export const server = {
  submitContact: defineAction({
    accept: 'form',
    handler: (formData: FormData) => handleContact(formData),
  }),
  submitNewsletter: defineAction({
    accept: 'form',
    handler: (formData: FormData) => handleNewsletter(formData),
  }),
};
