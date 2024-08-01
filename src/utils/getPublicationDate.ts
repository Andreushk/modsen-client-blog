import { MONTH_EN, MONTH_RU } from '@/constants/months';
import { LocaleTypes } from '@/types/locale';

const getPublicationDate = (
  timestamp: number,
  locale: LocaleTypes,
  isShortMonth?: boolean,
  isWithDayEnding?: boolean,
  isDayFirst?: boolean,
): string => {
  const date: Date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = locale === 'en' ? MONTH_EN[date.getMonth()] : MONTH_RU[date.getMonth()];
  const year = date.getFullYear();

  return isDayFirst
    ? `${isWithDayEnding && locale === 'en' ? `${day}th` : day} ${isShortMonth || locale === 'ru' ? month.slice(0, 3) : month} ${year}`
    : `${isShortMonth || locale === 'ru' ? month.slice(0, 3) : month} ${isWithDayEnding && locale === 'en' ? `${day}th` : day}, ${year}`;
};

export default getPublicationDate;
