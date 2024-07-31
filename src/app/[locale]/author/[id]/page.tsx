import { Metadata } from 'next';

import fetchData from '@/api/fetchData';
import { AuthorHeader, MyBlog } from '@/components';
import { AUTHORS_PATH, SERVER_URL } from '@/constants/api';
import { Author } from '@/types/models/authors';

export async function generateMetadata(pageParams: ComponentProps): Promise<Metadata> {
  const authorId: string = pageParams.params.id;
  const authorData = await fetchData<Author>(`${SERVER_URL}${AUTHORS_PATH}?id=${authorId}`);

  return {
    title: `Modsen Client Blog | ${authorData.name}`,
    description: authorData.description,
    keywords: 'creative person, author of posts, posts, blog',
    openGraph: {
      title: `Modsen Client Blog | ${authorData.name}`,
      description: `Get to know one of our authors - ${authorData.name}: ${authorData.description}`,
      siteName: 'Modsen Client Blog Site',
    },
  };
}

interface ComponentProps {
  params: { id: string };
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
