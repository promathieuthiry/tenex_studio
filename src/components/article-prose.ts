import ProseA from '@/components/prose/prose-a.astro';
import ProseH2 from '@/components/prose/prose-h2.astro';
import ProseP from '@/components/prose/prose-p.astro';
import ProseUl from '@/components/prose/prose-ul.astro';
import ProseLi from '@/components/prose/prose-li.astro';
import ProseBlockquote from '@/components/prose/prose-blockquote.astro';
import ProseImg from '@/components/prose/prose-img.astro';

export const proseComponents = {
  a: ProseA,
  h2: ProseH2,
  p: ProseP,
  ul: ProseUl,
  li: ProseLi,
  blockquote: ProseBlockquote,
  img: ProseImg,
};
