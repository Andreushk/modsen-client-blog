'use client';

import { AuthorHeader } from '@/components';

interface ComponentProps {
  params: {
    id: string;
  };
}

const Page: React.FC<ComponentProps> = ({ params }) => {
  const { id } = params;

  return <AuthorHeader id={id} />;
};

export default Page;
