import POST_IMAGES_PATHS from '@/constants/postImagesPaths';

import getRandomNumber from './getRandomNumber';

const getRandomPostImageURL = (): string => {
  const amountOfPostImages: number = POST_IMAGES_PATHS.length;
  const randomNumber: number = getRandomNumber(1, amountOfPostImages);
  return POST_IMAGES_PATHS[randomNumber - 1];
};

export default getRandomPostImageURL;
