import { useEffect, useState } from 'react';

import { Post } from '@/types/models/posts';

interface ReturnValue {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
}

const useGetPost = (postId: number): ReturnValue => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        const response: Response = await fetch(
          `https://client-blog-server-omega.vercel.app/posts?id=${postId}`,
        );
        const result: Post[] = await response.json();
        setPost(result[0]);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
        console.error(e);
      }
    };
    fetchPostData();
  }, [postId]);

  return { post, isLoading, error };
};

export default useGetPost;
