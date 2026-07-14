import type { Bilingual } from "@/data/_types";

type DigitalCardContent = {
  name: string;
  role: string;
  studio: string;
  emailLabel: string;
  phoneLabel: string;
  websiteLabel: string;
  bookCta: string;
  contactCta: string;
  photoAlt: string;
};

export const DIGITAL_CARD: Bilingual<DigitalCardContent> = {
  fr: {
    name: "Mathieu Thiry",
    role: "Fondateur",
    studio: "Tenex Studio",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    websiteLabel: "Site web",
    bookCta: "Réserver un appel",
    contactCta: "Ajouter le contact",
    photoAlt: "Portrait de Mathieu Thiry",
  },
  en: {
    name: "Mathieu Thiry",
    role: "Founder",
    studio: "Tenex Studio",
    emailLabel: "Email",
    phoneLabel: "Phone",
    websiteLabel: "Website",
    bookCta: "Book a call",
    contactCta: "Add contact",
    photoAlt: "Portrait of Mathieu Thiry",
  },
} as const;

export const DIGITAL_CARD_EMAIL = "contact@tenex.studio";
export const DIGITAL_CARD_PHONE = "07 59 95 30 31";
export const DIGITAL_CARD_PHONE_HREF = "tel:+33759953031";
export const DIGITAL_CARD_PHOTO = "/portrait/mathieu-thiry-linkedin.webp";
export const DIGITAL_CARD_WEBSITE = "https://tenex.studio";
export const DIGITAL_CARD_VCF: Bilingual = {
  fr: "/contact/mathieu-thiry-fr.vcf",
  en: "/contact/mathieu-thiry-en.vcf",
};
