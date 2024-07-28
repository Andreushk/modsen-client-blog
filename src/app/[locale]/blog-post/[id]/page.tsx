import { Blog, JoinOurTeam, OtherPosts } from '@/components';

interface ComponentProps {
  params: {
    id: string;
  };
}

const BlogPost: React.FC<ComponentProps> = ({ params }) => (
  <>
    <Blog id={params.id} />
    <OtherPosts excludePostId={params.id} />
    <JoinOurTeam />
  </>
);

export default BlogPost;
