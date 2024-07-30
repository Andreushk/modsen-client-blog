import { ContactFormKeys } from '@/types/forms/contact';

export const SELECT_CATEGORIES_EN = [
  'HR',
  'Marketing',
  'IT',
  'Sales',
  'Finance',
  'Legal',
  'Administration',
  'Training and Development',
  'Security',
  'Public Relations',
];

export const SELECT_CATEGORIES_RU = [
  'Отдел кадров',
  'Маркетинг',
  'ИТ',
  'Продажи',
  'Финансы',
  'Юридический отдел',
  'Администрация',
  'Обучение и развитие',
  'Безопасность',
  'Связи с общественностью',
];

interface FormInputOptions {
  name: ContactFormKeys;
  placeholderTranslationsPath: string;
}

export const FORM_INPUTS_OPTIONS: FormInputOptions[] = [
  {
    name: 'fullName',
    placeholderTranslationsPath: 'contact-us.form.full-name',
  },
  {
    name: 'email',
    placeholderTranslationsPath: 'contact-us.form.email',
  },
];
