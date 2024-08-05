import getRandomNumber from '../getRandomNumber';

describe('getRandomNumber function', () => {
  it('Return random numbers on each call', () => {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 50;

    const resultOfFirstCall: number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const resultOfSecondCall: number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

    expect(resultOfFirstCall).not.toBe(resultOfSecondCall);
  });
});
