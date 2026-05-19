export type ContactKind = 'inquiry' | 'newsletter'

export type ContactFormState = Readonly<{
  ok: boolean
  fieldErrors: Readonly<Record<string, string>>
  formError: string | null
  values: Readonly<{
    firstName: string
    lastName: string
    email: string
    company: string
    message: string
  }>
}>

export const initialContactState: ContactFormState = {
  ok: false,
  fieldErrors: {},
  formError: null,
  values: {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  },
} as const

export type NewsletterFormState = Readonly<{
  ok: boolean
  formError: string | null
  fieldError: string | null
  email: string
}>

export const initialNewsletterState: NewsletterFormState = {
  ok: false,
  formError: null,
  fieldError: null,
  email: '',
} as const
