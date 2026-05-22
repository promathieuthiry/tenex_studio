import { useActionState } from 'react'
import { actions } from 'astro:actions'

import type { Locale } from '@/lib/i18n'
import { FOOTER } from '@/data/footer'
import { CONTACT } from '@/data/legal'
import {
  initialNewsletterState,
  type NewsletterFormState,
} from '@/actions/contact-types'
import { Button } from '@/components/ui/button'

export function NewsletterForm({ locale }: { locale: Locale }) {
  const copy = FOOTER.newsletter
  const [state, action, pending] = useActionState(
    async (
      _prev: NewsletterFormState,
      formData: FormData,
    ): Promise<NewsletterFormState> => {
      const { data, error } = await actions.submitNewsletter(formData)
      if (error || !data) {
        return {
          ...initialNewsletterState,
          formError: CONTACT.formError[locale],
        }
      }
      return data
    },
    initialNewsletterState,
  )

  if (state.ok) {
    return (
      <p
        role="status"
        aria-live="polite"
        className="mt-2 font-sans text-sm text-ink"
      >
        {copy.successLabel[locale]}
      </p>
    )
  }

  return (
    <form
      action={action}
      noValidate
      className="mt-2 flex flex-col gap-2"
      aria-label={copy.heading[locale]}
    >
      <input type="hidden" name="locale" value={locale} />
      <label htmlFor="newsletter-email" className="sr-only">
        {copy.placeholder[locale]}
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder={copy.placeholder[locale]}
          autoComplete="email"
          defaultValue={state.email}
          aria-invalid={state.fieldError ? 'true' : undefined}
          aria-describedby={state.fieldError ? 'newsletter-error' : undefined}
          required
          className="flex-1 rounded-full border border-ink/15 bg-paper px-4 py-2 font-sans text-sm text-ink placeholder:text-ink/40 focus-visible:border-ink focus-visible:outline-none"
        />
        <Button type="submit" disabled={pending} variant="primary" surface="light" size="sm">
          {copy.submitLabel[locale]}
        </Button>
      </div>
      {state.fieldError ? (
        <p
          id="newsletter-error"
          role="alert"
          className="font-sans text-xs text-ink"
        >
          {state.fieldError}
        </p>
      ) : null}
      {state.formError ? (
        <p role="alert" className="font-sans text-xs text-ink">
          {state.formError}
        </p>
      ) : null}
      <p className="font-sans text-xs text-ink/50">
        {copy.consentLabel[locale]}
      </p>
    </form>
  )
}
