'use client';

import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components';
import { EmailSubscribeForm } from '@/types/forms/emailSubscribe';
import emailSubscribeSchema from '@/utils/schemas/emailSubscribe';

import styles from './styles.module.scss';

const INPUT_BORDERS_ANIMATION_DURATION = 2000;

const SubscribePart: React.FC = () => {
  const [isErrorInSubscription, setErrorInSubscription] = useState<boolean>(false);
  const [isSendingSubscription, setIsSendingSubscription] = useState<boolean>(false);
  const [isSuccessSubscription, setIsSuccessSubscription] = useState<boolean>(false);

  const t = useTranslations('Footer');

  const { formState, register, handleSubmit } = useForm<EmailSubscribeForm>({
    resolver: yupResolver(emailSubscribeSchema),
    mode: 'onSubmit',
  });

  const handleFormSubmit = async (data: EmailSubscribeForm): Promise<void> => {
    setIsSendingSubscription(true);

    const templateParams = { from_sender_email: data.email, message: data.email };

    try {
      const serviceId: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey: string | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('No EmailJS keys provided!');
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSendingSubscription(false);
      setIsSuccessSubscription(true);
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        setIsSuccessSubscription(false);
      }, INPUT_BORDERS_ANIMATION_DURATION);
    } catch (error) {
      console.error(error);
      setIsSendingSubscription(false);
      setErrorInSubscription(true);
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        setErrorInSubscription(false);
      }, INPUT_BORDERS_ANIMATION_DURATION);
    }
  };

  const isFormValidationError = !formState.isValid && formState.isSubmitted;

  return (
    <div className={styles.footer_subscribe} data-testid="subscribe-form">
      <h2>{t('title')}</h2>
      <div className={styles.footer_subscribe_form}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register('email')}
            placeholder={t('placeholder')}
            className={`${isFormValidationError || isErrorInSubscription ? styles.invalid : ''} ${isSuccessSubscription ? styles.success : ''} `}
          />
          <div>
            <Button disabled={isSendingSubscription} type="submit" styleType="yellow">
              {t('button')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribePart;
