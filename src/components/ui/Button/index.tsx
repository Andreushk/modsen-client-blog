import { sen } from '@/styles/fonts';

import styles from './style.module.scss';

export type ButtonsAttributesType = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonStyleTypes = 'white' | 'yellow';

interface ComponentProps extends ButtonsAttributesType {
  children: React.ReactNode;
  styleType: ButtonStyleTypes;
}

const Button: React.FC<ComponentProps> = ({ children, styleType, ...props }) => (
  <button
    type="button"
    className={` ${sen.className} ${styles.button} ${styleType === 'white' ? styles.white : styles.yellow}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
