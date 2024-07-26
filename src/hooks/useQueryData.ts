import { useEffect, useState } from 'react';

const useQueryData = <T>(requestURL: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        const response: Response = await fetch(requestURL);
        const result: T[] = await response.json();
        setData(result[0]);
        setIsLoading(false);
      } catch (e) {
        const errorObject = e as Error;
        setIsLoading(false);
        setError(errorObject.message);
        console.error(e);
      }
    };
    fetchPostData();
  }, [requestURL]);

  return { data, isLoading, error };
};

export default useQueryData;
