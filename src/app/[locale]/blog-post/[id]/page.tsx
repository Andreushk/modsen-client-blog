'use client';

import { Blog, JoinOurTeam, OtherPosts } from '@/components';
import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import useQueryData from '@/hooks/useQueryData';
import { Post } from '@/types/models/posts';

interface ComponentProps {
  params: {
    id: string;
  };
}

const BlogPost: React.FC<ComponentProps> = ({ params }) => {
  const { data, isLoading, error } = useQueryData<Post>(
    `${SERVER_URL}${POSTS_PATH}?id=${params.id}`,
  );

  return (
    <>
      <Blog post={data} isLoading={isLoading} error={error} />
      <OtherPosts excludePostId={params.id} category={data?.category} isLoading={isLoading} />
      <JoinOurTeam />
    </>
  );
};

export default BlogPost;
