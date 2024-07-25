'use client';

interface ComponentProps {
  params: {
    id: string;
  };
}

const Page: React.FC<ComponentProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h1>Author page</h1>
      <p>Author id: {id}</p>
    </div>
  );
};

export default Page;
