const MIN_AMOUNT_OF_POSTS = 1;
const MAX_AMOUNT_OF_POSTS = 20;

const getRandomPostId = (): number =>
  Math.floor(Math.random() * (MAX_AMOUNT_OF_POSTS - MIN_AMOUNT_OF_POSTS + 1)) + MIN_AMOUNT_OF_POSTS;

export default getRandomPostId;
