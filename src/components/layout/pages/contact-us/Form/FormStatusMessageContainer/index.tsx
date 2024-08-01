import React, { useEffect, useState } from 'react';

import { Paragraph } from '@/components';

import styles from './styles.module.scss';

const SUCCESS_MESSAGE = 'Message sent successfully!';
const ERROR_MESSAGE = 'An error occurred while sending a message. Try again!';

export const VISIBILITY_DURATION = 5000;
export const ANIMATION_DURATION = 450;

interface ComponentProps {
  isSuccess: boolean;
}

const FormStatusMessageContainer: React.FC<ComponentProps> = ({ isSuccess }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);

    const timerId = setTimeout(() => {
      clearTimeout(timerId);
      setIsVisible(false);
    }, VISIBILITY_DURATION);
  }, []);

  return (
    <div
      data-testid="form-message"
      className={`${styles.form_message_container} ${isSuccess ? styles.success : styles.error} ${isVisible ? styles.visible : ''}`}
    >
      <Paragraph style="dark">{isSuccess ? SUCCESS_MESSAGE : ERROR_MESSAGE}</Paragraph>
    </div>
  );
};

export default React.memo(FormStatusMessageContainer);
