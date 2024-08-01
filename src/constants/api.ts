export enum ServerPaths {
  POSTS = 'posts/',
  AUTHORS = 'authors/',
  TESTIMONIALS = 'testimonials/',
  TAGS = 'tags/',
}

export const SERVER_URL: string | undefined = process.env.NEXT_PUBLIC_SERVER_URL;

export const MIN_POST_ID = 1;
export const MAX_POST_ID = 20;
