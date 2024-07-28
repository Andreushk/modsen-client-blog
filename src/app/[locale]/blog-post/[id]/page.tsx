import { Blog } from '@/components';

interface ComponentProps {
  params: {
    id: string;
  };
}

const BlogPost: React.FC<ComponentProps> = ({ params }) => <Blog id={params.id} />;

export default BlogPost;
