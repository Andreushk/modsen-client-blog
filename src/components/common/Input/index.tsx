import { UseFormRegister } from 'react-hook-form';

import { FormElementsMessage } from '@/components';
import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

interface ComponentProps extends InputAttributes {
  name: string;
  error: string | null;
  register: UseFormRegister<any>;
}

const Input: React.FC<ComponentProps> = ({ name, error, register, ...props }) => (
  <div className={styles.wrapper}>
    <input
      {...props}
      {...register(name)}
      className={`${inter.className} ${styles.wrapper_input} ${error ? styles.error : ''}`}
    />
    {error && <FormElementsMessage>{error}</FormElementsMessage>}
  </div>
);

export default Input;
