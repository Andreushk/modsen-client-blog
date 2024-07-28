import { CategoriesType } from '../categories';

export interface PostContent {
  h3: string;
  paragraph: string;
}

export interface Post {
  id: number;
  title: string;
  author: string;
  authorId: number;
  createdAt: number;
  shortDescription: string;
  category: CategoriesType;
  content: PostContent[];
}
