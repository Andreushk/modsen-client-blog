'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

const LanguageSelect: React.FC = () => {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label htmlFor="lang-select">
      <p>Change language</p>
      <select defaultValue={localActive} id="lang-select" onChange={handleSelectChange}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </label>
  );
};

export default LanguageSelect;
