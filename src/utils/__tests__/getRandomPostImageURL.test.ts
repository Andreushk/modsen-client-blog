import getRandomPostImageURL from '../getRandomPostImageURL';

interface UniqueURLsMap {
  [key: string]: number;
}

describe('getRandomPostImageURL function', () => {
  it('Return random post image urls', () => {
    const postsImageURLs: string[] = [];

    for (let i = 0; i < 10; i++) {
      postsImageURLs.push(getRandomPostImageURL());
    }

    const frequencyMap: UniqueURLsMap = postsImageURLs.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {} as UniqueURLsMap);

    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const hasUniqueValue = Object.values(frequencyMap).some((count) => count < maxFrequency);

    expect(hasUniqueValue).toBe(true);
  });
});
