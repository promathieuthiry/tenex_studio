/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_BOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
