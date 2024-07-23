import Image from 'next/image';
import { useTranslations } from 'next-intl';

import LanguageSelect from '@/components/LanguageSelect';
import { Link } from '@/navigation';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <main>
      <Link href="/about">About</Link>
      <LanguageSelect />
      <h1 className={styles.title}>App content will be here! Soon...</h1>
      <p>{t('title')}</p>
      <div>
        <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
    </main>
  );
};

export default Home;
