import POST_IMAGES_PATHS from '@/constants/postImagesPaths';

import getRandomPostId from './getRandomPostId';

const getRandomPostImageURL = (): string => {
  const amountOfPostImages: number = POST_IMAGES_PATHS.length;
  const randomNumber: number = getRandomPostId(1, amountOfPostImages);
  return POST_IMAGES_PATHS[randomNumber - 1];
};

export default getRandomPostImageURL;
