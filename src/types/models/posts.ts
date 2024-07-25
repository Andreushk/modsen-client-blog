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
  category: string;
  content: PostContent[];
}
