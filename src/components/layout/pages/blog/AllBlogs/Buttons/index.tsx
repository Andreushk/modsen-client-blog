import { useTranslations } from 'next-intl';

import { sen } from '@/styles/fonts';

import styles from './styles.module.scss';

interface ComponentProps {
  prevDisabled: boolean;
  nextDisabled: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const Buttons: React.FC<ComponentProps> = ({ prevDisabled, nextDisabled, onPrev, onNext }) => {
  const t = useTranslations('BlogPage');

  return (
    <div className={styles.buttons} data-testid="pagination-buttons">
      <button type="button" disabled={prevDisabled} className={`${sen.className}`} onClick={onPrev}>
        {t('all-posts.prev')}
      </button>
      <button type="button" disabled={nextDisabled} className={`${sen.className}`} onClick={onNext}>
        {t('all-posts.next')}
      </button>
    </div>
  );
};

export default Buttons;
