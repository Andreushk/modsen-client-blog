export interface ContactForm {
  fullName: string;
  email: string;
  queryRelated: string;
  message: string;
}

export type ContactFormKeys = keyof ContactForm;
