'use client';

import { AuthorHeader, MyBlog } from '@/components';

interface ComponentProps {
  params: {
    id: string;
  };
}

const Page: React.FC<ComponentProps> = ({ params }) => {
  const { id } = params;

  return (
    <>
      <AuthorHeader id={id} />
      <MyBlog postsAuthorId={id} />
    </>
  );
};

export default Page;
