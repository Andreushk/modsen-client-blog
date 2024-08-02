'use client';

import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';

import { inter } from '@/styles/fonts';

import FormElementsMessage from '../../ui/FormElementsMessage';
import styles from './styles.module.scss';

const LINE_HEIGHT = '28px';
const MAX_TEXTAREA_HEIGHT_PX = 200;

type TextareaAttributes = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface ComponentProps extends TextareaAttributes {
  name: string;
  error: string | null;
  placeholder: string;
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
}

const Textarea: React.FC<ComponentProps> = ({
  name,
  error,
  placeholder,
  watch,
  register,
  ...props
}) => {
  const textareaValue: any = watch(name);
  const textareaElement: MutableRefObject<HTMLTextAreaElement | null> = useRef(null);
  const { ref, ...rest } = register(name);

  useLayoutEffect((): void => {
    const textarea: HTMLTextAreaElement | null = textareaElement.current;

    if (textarea) {
      textarea.style.height = LINE_HEIGHT;
      textarea.style.height = `${textarea.scrollHeight}px`;

      if (textarea.scrollHeight > MAX_TEXTAREA_HEIGHT_PX) {
        textarea.style.height = `${MAX_TEXTAREA_HEIGHT_PX}px`;
        textarea.style.overflowY = 'auto';
      } else {
        textarea.style.overflowY = 'hidden';
      }
    }
  }, [textareaValue]);

  const refCallback = (e: HTMLTextAreaElement): void => {
    ref(e);
    textareaElement.current = e;
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        {...props}
        ref={refCallback}
        {...rest}
        placeholder={placeholder}
        className={`${inter.className} ${styles.wrapper_textarea} ${error ? styles.error : ''}`}
      />
      {error && <FormElementsMessage>{error}</FormElementsMessage>}
    </div>
  );
};

export default Textarea;
