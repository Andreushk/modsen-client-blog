import { useEffect, useState } from 'react';

const useQueryDataArray = <T>(requestURL: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response: Response = await fetch(requestURL);
        const result: T[] = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (e) {
        const errorObject = e as Error;
        setIsLoading(false);
        setError(errorObject.message);
      }
    };
    fetchPosts();
  }, [requestURL]);

  return { data, isLoading, error };
};

export default useQueryDataArray;
