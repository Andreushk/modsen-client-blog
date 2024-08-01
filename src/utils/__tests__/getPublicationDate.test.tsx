import getPublicationDate from '../getPublicationDate';

const DATE_TIMESTAMP: number = 2532418478;

describe('getPublicationDate function', () => {
  it('Return correct publication date', () => {
    const result = getPublicationDate(DATE_TIMESTAMP, 'en', true, false, false);
    expect(result).toBe('Apr 1, 2050');
  });

  it('Return correct publication date with day at first position', () => {
    const result = getPublicationDate(DATE_TIMESTAMP, 'en', true, false, true);
    expect(result).toBe('1 Apr 2050');
  });

  it('Return correct publication date with day ending', () => {
    const result = getPublicationDate(DATE_TIMESTAMP, 'en', true, true, true);
    expect(result).toBe('1th Apr 2050');
  });

  it('Return correct publication date with full month name', () => {
    const result = getPublicationDate(DATE_TIMESTAMP, 'en', false, true, true);
    expect(result).toBe('1th April 2050');
  });

  it('Return correct publication date in other languages', () => {
    const result = getPublicationDate(DATE_TIMESTAMP, 'ru');
    expect(result).toBe('Апр 1, 2050');
  });
});
