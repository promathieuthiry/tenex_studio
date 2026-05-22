import { useActionState } from 'react'
import { actions } from 'astro:actions'

import type { Locale } from '@/lib/i18n'
import {
  initialContactState,
  type ContactFormState,
} from '@/actions/contact-types'
import type { ContactCopy } from '@/data/legal'
import { Button } from '@/components/ui/button'

export function ContactForm({
  locale,
  copy,
}: {
  locale: Locale
  copy: ContactCopy
}) {
  const [state, action, pending] = useActionState(
    async (
      _prev: ContactFormState,
      formData: FormData,
    ): Promise<ContactFormState> => {
      const { data, error } = await actions.submitContact(formData)
      if (error || !data) {
        return {
          ...initialContactState,
          formError: copy.formError[locale],
        }
      }
      return data
    },
    initialContactState,
  )

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col gap-4 rounded-card border border-ink/10 bg-paper-warm p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
          {copy.eyebrow[locale]}
        </p>
        <h2 className="font-display text-3xl tracking-[-0.02em] text-ink md:text-4xl">
          {copy.confirmation.title[locale]}
        </h2>
        <p className="max-w-prose font-sans text-base leading-7 text-ink/80">
          {copy.confirmation.body[locale]}
        </p>
      </div>
    )
  }

  const { fields } = copy

  return (
    <form
      action={action}
      noValidate
      aria-label={copy.title[locale]}
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="locale" value={locale} />

      {state.formError ? (
        <p
          role="alert"
          className="rounded-card-sm border border-ink/15 bg-paper-warm px-4 py-3 font-sans text-sm text-ink"
        >
          {state.formError}
        </p>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="firstName"
          name="firstName"
          label={fields.firstName[locale]}
          type="text"
          autoComplete="given-name"
          defaultValue={state.values.firstName}
          error={state.fieldErrors.firstName}
          required
        />
        <Field
          id="lastName"
          name="lastName"
          label={fields.lastName[locale]}
          type="text"
          autoComplete="family-name"
          defaultValue={state.values.lastName}
          error={state.fieldErrors.lastName}
          required
        />
      </div>

      <Field
        id="email"
        name="email"
        label={fields.email[locale]}
        type="email"
        autoComplete="email"
        defaultValue={state.values.email}
        error={state.fieldErrors.email}
        required
      />

      <Field
        id="company"
        name="company"
        label={fields.company[locale]}
        type="text"
        autoComplete="organization"
        defaultValue={state.values.company}
      />

      <TextArea
        id="message"
        name="message"
        label={fields.message[locale]}
        placeholder={fields.messagePlaceholder[locale]}
        defaultValue={state.values.message}
        error={state.fieldErrors.message}
        required
      />

      <p className="font-sans text-xs text-ink/50">
        {copy.privacyNote[locale]}
      </p>

      <div>
        <Button type="submit" disabled={pending} variant="primary" surface="light" size="md">
          {pending ? copy.submittingLabel[locale] : copy.submitLabel[locale]}
        </Button>
      </div>

    </form>
  )
}

type FieldProps = {
  id: string
  name: string
  label: string
  type: 'text' | 'email'
  autoComplete?: string
  defaultValue?: string
  error?: string
  required?: boolean
}

function Field({
  id,
  name,
  label,
  type,
  autoComplete,
  defaultValue,
  error,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60"
      >
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="rounded-card-sm border border-ink/15 bg-paper px-4 py-3 font-sans text-base text-ink placeholder:text-ink/40 focus-visible:border-ink focus-visible:outline-none"
      />
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="font-sans text-xs text-ink"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}

type TextAreaProps = {
  id: string
  name: string
  label: string
  placeholder?: string
  defaultValue?: string
  error?: string
  required?: boolean
}

function TextArea({
  id,
  name,
  label,
  placeholder,
  defaultValue,
  error,
  required,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60"
      >
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <textarea
        id={id}
        name={name}
        rows={6}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="rounded-card-sm border border-ink/15 bg-paper px-4 py-3 font-sans text-base text-ink placeholder:text-ink/40 focus-visible:border-ink focus-visible:outline-none"
      />
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="font-sans text-xs text-ink"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}
