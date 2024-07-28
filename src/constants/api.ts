import getRandomPostId from '@/utils/getRandomPostId';

export const POSTS_PATH = 'posts/';
export const AUTHORS_PATH = 'authors/';
export const TESTIMONIALS_PATH = 'testimonials/';

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const FEATURED_POST_ID = 20;
export const FEATURED_POST_REQUEST_URL = `${SERVER_URL}${POSTS_PATH}?id=${FEATURED_POST_ID}`;

const ALL_POSTS_LIMIT = 4;
export const ALL_POSTS_REQUEST_URL = `${SERVER_URL}${POSTS_PATH}`;
export const ALL_POSTS_REQUEST_URL_WITH_LIMIT = `${SERVER_URL}${POSTS_PATH}?_limit=${ALL_POSTS_LIMIT}`;

const HERO_POST_ID = getRandomPostId();
export const HERO_POST_REQUEST_URL = `${SERVER_URL}${POSTS_PATH}?id=${HERO_POST_ID}`;

export const TESTIMONIALS_REQUEST_URL = `${SERVER_URL}${TESTIMONIALS_PATH}`;
