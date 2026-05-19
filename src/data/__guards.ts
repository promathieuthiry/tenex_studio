import type { Bilingual } from './_types'

export function assertArrayParity<T>(
  label: string,
  b: Bilingual<ReadonlyArray<T>>,
): void {
  if (b.fr.length !== b.en.length) {
    throw new Error(
      `[bilingual-parity] ${label}: fr has ${b.fr.length} item(s), en has ${b.en.length}. ` +
        `Both locales must declare the same number of array entries.`,
    )
  }
}
