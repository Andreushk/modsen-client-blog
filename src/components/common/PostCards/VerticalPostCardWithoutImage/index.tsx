'use client';

import { Label } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link, useRouter } from '@/navigation';

import styled from './styles.module.scss';

interface ComponentProps {
  id: number;
  title: string;
  author: string;
  authorId: number;
  createdAt: number;
}

const VerticalPostCardWithoutImage: React.FC<ComponentProps> = ({
  id,
  title,
  author,
  authorId,
  createdAt,
}) => {
  const navigation = useRouter();

  const handleClick = (): void => {
    navigation.push(`${AppRoutes.BLOG_POST}/${id}`);
  };

  return (
    <article className={styled.post} onClick={handleClick}>
      <Label>
        By <Link href={`${AppRoutes.AUTHOR}/${authorId}`}>{author}</Link> l {createdAt}
      </Label>
      <h4>{title}</h4>
    </article>
  );
};

export default VerticalPostCardWithoutImage;
