import { l as createActionsProxy, t as pipelineSymbol, a as AstroError, A as ActionCalledFromServerError, m as defineAction } from './entrypoint_d2pVK-Ya.mjs';
import 'resend';

createActionsProxy({
  handleAction: async (param, path, context) => {
    const pipeline = context ? Reflect.get(context, pipelineSymbol) : void 0;
    if (!pipeline) {
      throw new AstroError(ActionCalledFromServerError);
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
});

const LOCALES = ["fr", "en"];
function isLocale(value) {
  return typeof value === "string" && LOCALES.includes(value);
}

const CONTACT = {
  validation: {
    firstNameRequired: {
      fr: "Indiquez votre prénom.",
      en: "Enter your first name."
    },
    lastNameRequired: {
      fr: "Indiquez votre nom.",
      en: "Enter your last name."
    },
    emailRequired: {
      fr: "Indiquez un courriel valide.",
      en: "Enter a valid email."
    },
    emailInvalid: {
      fr: "Le courriel ne semble pas valide.",
      en: "That email does not look valid."
    },
    messageRequired: {
      fr: "Décrivez le projet en quelques lignes.",
      en: "Describe the project in a few lines."
    },
    messageTooShort: {
      fr: "Au moins 20 caractères, merci.",
      en: "At least 20 characters, please."
    }
  },
  formError: {
    fr: "Le message n’a pas pu être envoyé. Réessayez ou écrivez directement à hello@tenex.studio.",
    en: "The message could not be sent. Try again or email hello@tenex.studio directly."
  }};

const initialContactState = {
  values: {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  }
};

const FIELD_LABELS = {
  fr: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Courriel",
    company: "Entreprise",
    message: "Message"
  },
  en: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    company: "Company",
    message: "Message"
  }
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function readLocale(formData) {
  const raw = formData.get("locale");
  if (typeof raw === "string" && isLocale(raw)) return raw;
  return "fr";
}
function readString(formData, key) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}
function logEvent(event, fields) {
  console.log(JSON.stringify({ event, ...fields }));
}
function logWarn(event, fields) {
  console.warn(JSON.stringify({ event, ...fields }));
}
async function sendViaResend(args) {
  {
    return { ok: false, status: "missing-env" };
  }
}
async function handleContact(formData) {
  const locale = readLocale(formData);
  const v = CONTACT.validation;
  const firstName = readString(formData, "firstName");
  const lastName = readString(formData, "lastName");
  const email = readString(formData, "email");
  const company = readString(formData, "company");
  const message = readString(formData, "message");
  const values = { firstName, lastName, email, company, message };
  const fieldErrors = {};
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
  [
    `${labels.firstName}: ${firstName}`,
    `${labels.lastName}: ${lastName}`,
    `${labels.email}: ${email}`,
    company ? `${labels.company}: ${company}` : null,
    "",
    `${labels.message}:`,
    message
  ].filter((line) => line !== null).join("\n");
  const result = await sendViaResend();
  if (!result.ok) {
    logWarn("contact.send_failed", {
      locale,
      vendor_status: result.status
    });
    return {
      ok: false,
      fieldErrors: {},
      formError: CONTACT.formError[locale],
      values
    };
  }
  logEvent("contact.submitted", { locale, size: message.length });
  return {
    ok: true,
    fieldErrors: {},
    formError: null,
    values: initialContactState.values
  };
}
async function handleNewsletter(formData) {
  const locale = readLocale(formData);
  const v = CONTACT.validation;
  const email = readString(formData, "email");
  if (!email) {
    return {
      ok: false,
      formError: null,
      fieldError: v.emailRequired[locale],
      email
    };
  }
  if (!EMAIL_RE.test(email)) {
    return {
      ok: false,
      formError: null,
      fieldError: v.emailInvalid[locale],
      email
    };
  }
  const result = await sendViaResend();
  if (!result.ok) {
    logWarn("newsletter.send_failed", {
      locale,
      vendor_status: result.status
    });
    return {
      ok: false,
      formError: CONTACT.formError[locale],
      fieldError: null,
      email
    };
  }
  logEvent("newsletter.subscribed", { locale });
  return { ok: true, formError: null, fieldError: null, email: "" };
}
const server = {
  submitContact: defineAction({
    accept: "form",
    handler: (formData) => handleContact(formData)
  }),
  submitNewsletter: defineAction({
    accept: "form",
    handler: (formData) => handleNewsletter(formData)
  })
};

export { server };
