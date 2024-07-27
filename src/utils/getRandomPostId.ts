const MIN_AMOUNT_OF_POSTS = 1;
const MAX_AMOUNT_OF_POSTS = 20;

const getRandomPostId = (min?: number, max?: number): number =>
  Math.floor(Math.random() * ((max ?? MAX_AMOUNT_OF_POSTS) - (min ?? MIN_AMOUNT_OF_POSTS) + 1)) +
  (min ?? MIN_AMOUNT_OF_POSTS);

export default getRandomPostId;
