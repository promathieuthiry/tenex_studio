/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_INBOX?: string;
  readonly PUBLIC_BOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
