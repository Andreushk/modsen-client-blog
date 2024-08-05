const fetchData = async <T>(requestURL: string): Promise<T> => {
  const res = await fetch(requestURL, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: T[] = await res.json();
  return data[0];
};

export default fetchData;
