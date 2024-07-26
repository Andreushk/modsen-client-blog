import Image from 'next/image';
import React from 'react';

import Paragraph from '@/components/common/Paragraph';

import styles from './styles.module.scss';

const AUTHOR_IMAGE_PATH = '/images/testimonials_author.png';

interface ComponentProps {
  name: string;
  location: string;
  isAnimationGoing: boolean;
}

const Author: React.FC<ComponentProps> = ({ name, location, isAnimationGoing }) => (
  <div className={`${styles.slider_author} ${isAnimationGoing ? '' : styles.active}`}>
    <div>
      <Image src={AUTHOR_IMAGE_PATH} width={48} height={48} alt="Author picture" />
    </div>
    <div>
      <h4>{name}</h4>
      <Paragraph style="dark" small>
        {location}
      </Paragraph>
    </div>
  </div>
);

export default React.memo(Author);
