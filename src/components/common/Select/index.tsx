import { UseFormRegister } from 'react-hook-form';

import ArrowDown from '@/assets/icons/down-arrow.svg';
import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

interface ComponentProps {
  name: string;
  options: string[];
  error?: string | null;
  disabled: boolean;
  register?: UseFormRegister<any>;
}

const Select: React.FC<ComponentProps> = ({ name, options, error, disabled, register }) => {
  const selectOptions = options.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return register ? (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_arrow}>
        <ArrowDown />
      </div>
      <select
        {...register(name)}
        disabled={disabled}
        className={`${inter.className} ${styles.select} ${error ? styles.error : ''}`}
      >
        {selectOptions}
      </select>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_arrow}>
        <ArrowDown />
      </div>
      <select disabled={disabled} className={`${inter.className} ${styles.select}`}>
        {selectOptions}
      </select>
    </div>
  );
};

export default Select;
