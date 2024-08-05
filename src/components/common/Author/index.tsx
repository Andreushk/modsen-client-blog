import Image from 'next/image';
import React from 'react';

import { Paragraph } from '@/components';
import { AppRoutes } from '@/constants/routes';
import { Link } from '@/navigation';

import styles from './styles.module.scss';

const AUTHOR_IMAGE_PATH = '/images/testimonials_author.png';

interface ComponentProps {
  name: string;
  subtitle: string;
  authorId?: number;
}

const Author: React.FC<ComponentProps> = ({ name, subtitle, authorId }) => (
  <div className={`${styles.author}`}>
    <div>
      <Image src={AUTHOR_IMAGE_PATH} width={48} height={48} alt="Author picture" />
    </div>
    <div>
      <h4>
        {authorId && <Link href={`${AppRoutes.AUTHOR}/${authorId}`}>{name}</Link>}
        {!authorId && name}
      </h4>
      <Paragraph style="dark" small>
        {subtitle}
      </Paragraph>
    </div>
  </div>
);

export default React.memo(Author);
