import { Metadata } from 'next';

import fetchData from '@/api/fetchData';
import { JoinOurTeam, PostAndOtherPosts } from '@/components';
import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import { Post } from '@/types/models/posts';

export async function generateMetadata(pageParams: ComponentProps): Promise<Metadata> {
  const { id } = pageParams.params;
  const post = await fetchData<Post>(`${SERVER_URL}${POSTS_PATH}?id=${id}`);

  return {
    title: post.title,
    description: post.shortDescription,
    keywords: post.tags + post.category,
  };
}

interface ComponentProps {
  params: { id: string };
}

const BlogPost: React.FC<ComponentProps> = async ({ params }) => (
  <>
    <PostAndOtherPosts postId={params.id} />
    <JoinOurTeam />
  </>
);

export default BlogPost;
