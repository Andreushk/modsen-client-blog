import { useEffect, useState } from 'react';

import { POSTS_PATH } from '@/constants/api';
import { Post } from '@/types/models/posts';

interface ReturnValue {
  posts: Post[] | null;
  isLoading: boolean;
  error: string | null;
}

const useGetPosts = (limit: number): ReturnValue => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response: Response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}${POSTS_PATH}?_limit=${limit}`,
        );
        const data: Post[] = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (e) {
        const errorObject = e as Error;
        setIsLoading(false);
        setError(errorObject.message);
      }
    };
    fetchPosts();
  }, [limit]);

  return { posts, isLoading, error };
};

export default useGetPosts;
