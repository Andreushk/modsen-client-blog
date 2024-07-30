'use client';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Input, Select, Textarea } from '@/components';
import Button from '@/components/common/Button';
import { ContactForm } from '@/types/forms/contact';
import { LocaleTypes } from '@/types/locale';
import contactSchema from '@/utils/schemas/contact';

import FormStatusMessageContainer, {
  ANIMATION_DURATION,
  VISIBILITY_DURATION,
} from './FormStatusMessageContainer';
import { FORM_INPUTS_OPTIONS, SELECT_CATEGORIES_EN, SELECT_CATEGORIES_RU } from './options';
import styles from './styles.module.scss';

const Form: React.FC = () => {
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
  const [isSuccessSendingMessage, setIsSuccessSendingMessage] = useState<true | null>(null);
  const [isErrorSendingMessage, setIsErrorSendingMessage] = useState<boolean>(false);

  const t = useTranslations('ContactUsPage');
  const locale = useLocale() as LocaleTypes;
  const { formState, handleSubmit, register, watch, reset } = useForm<ContactForm>({
    resolver: yupResolver(contactSchema),
    mode: 'onSubmit',
  });

  const handleFormSubmit = async (formData: ContactForm): Promise<void> => {
    setIsSendingMessage(true);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
      category: formData.queryRelated,
    };

    try {
      const serviceId: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
      const publicKey: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('No EmailJS keys provided!');
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSendingMessage(false);
      setIsSuccessSendingMessage(true);
      reset();

      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        setIsSuccessSendingMessage(null);
      }, VISIBILITY_DURATION + ANIMATION_DURATION);
    } catch (error) {
      console.error(error);
      setIsSendingMessage(false);
      setIsErrorSendingMessage(true);

      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        setIsErrorSendingMessage(false);
      }, VISIBILITY_DURATION + ANIMATION_DURATION);
    }
  };

  const categorySelectOptions =
    locale === 'en'
      ? [t('contact-us.form.question-category'), ...SELECT_CATEGORIES_EN]
      : [t('contact-us.form.question-category'), ...SELECT_CATEGORIES_RU];

  return (
    <section className={styles.form_section}>
      <form className={styles.form_section_content} onSubmit={handleSubmit(handleFormSubmit)}>
        {FORM_INPUTS_OPTIONS.map(({ name, placeholderTranslationsPath }) => (
          <Input
            key={name}
            name={name}
            disabled={isSendingMessage}
            placeholder={t(placeholderTranslationsPath)}
            register={register}
            error={formState.errors[name]?.message ?? null}
          />
        ))}
        <Select
          name="queryRelated"
          options={categorySelectOptions}
          disabled={isSendingMessage}
          register={register}
          error={formState.errors.queryRelated?.message ?? null}
        />
        <Textarea
          name="message"
          placeholder={t('contact-us.form.message')}
          disabled={isSendingMessage}
          watch={watch}
          register={register}
          error={formState.errors.message?.message ?? null}
        />
        {isSuccessSendingMessage && <FormStatusMessageContainer isSuccess />}
        {isErrorSendingMessage && <FormStatusMessageContainer isSuccess={false} />}
        <div>
          <Button disabled={isSendingMessage} type="submit" styleType="yellow">
            {t('contact-us.form.send-button')}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
