import React from 'react';

import { Author } from '@/components';

import styles from './styles.module.scss';

interface ComponentProps {
  name: string;
  location: string;
  isAnimationGoing: boolean;
}

const TestimonialAuthor: React.FC<ComponentProps> = ({ name, location, isAnimationGoing }) => (
  <div className={`${styles.slider_author} ${isAnimationGoing ? '' : styles.active}`}>
    <Author name={name} subtitle={location} />
  </div>
);

export default React.memo(TestimonialAuthor);
