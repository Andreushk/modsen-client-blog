import { useEffect, useRef, useState } from 'react';

const HEADER_NAME_WITH_LAST_PAGE_DATA = 'Link';
const HEADER_LAST_PAGE_IDENTIFICATION = 'rel="last"';
const HEADER_LAST_PAGE_KEY = '_page';

const useQueryDataArrayWithPagination = <T>(requestURL: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const totalPagesRef = useRef<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response: Response = await fetch(requestURL);

        const lastPageLink = response.headers
          .get(HEADER_NAME_WITH_LAST_PAGE_DATA)
          ?.split(', ')
          .find((link) => link.includes(HEADER_LAST_PAGE_IDENTIFICATION));

        if (lastPageLink) {
          const lastPageUrl = new URL(lastPageLink.split(';')[0].slice(1, -1));
          const lastPageNumber = parseInt(
            lastPageUrl.searchParams.get(HEADER_LAST_PAGE_KEY) || '1',
            10,
          );
          totalPagesRef.current = lastPageNumber;
        }

        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (e) {
        const errorObject = e as Error;
        setIsLoading(false);
        setError(errorObject.message);
      }
    };

    fetchData();
  }, [requestURL]);

  return { data, totalPages: totalPagesRef.current, isLoading, error };
};

export default useQueryDataArrayWithPagination;
