import fetchData from '@/api/fetchData';
import { POSTS_PATH, SERVER_URL } from '@/constants/api';
import { Post } from '@/types/models/posts';

import Blog from './Blog';
import OtherPosts from './OtherPosts';

interface ComponentProps {
  postId: string;
}

const PostAndOtherPosts: React.FC<ComponentProps> = async ({ postId }) => {
  const post = await fetchData<Post>(`${SERVER_URL}${POSTS_PATH}?id=${postId}`);

  return (
    <>
      <Blog postData={post} />
      <OtherPosts excludePostId={post.id} category={post.category} />
    </>
  );
};

export default PostAndOtherPosts;
