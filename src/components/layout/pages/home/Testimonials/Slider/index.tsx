'use client';

import React, { useState } from 'react';

import ErrorBoundary from '@/components/layout/ErrorBoundary';
import SectionError from '@/components/layout/SectionError';
import { Testimonial } from '@/types/models/testimonials';

import Author from './Author';
import Buttons from './Buttons';
import styles from './styles.module.scss';

const DURATION_OF_ANIMATION = 450;

interface ComponentProps {
  testimonials: Testimonial[];
}

const Slider: React.FC<ComponentProps> = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimationGoing, setIsAnimationGoing] = useState<boolean>(false);

  const handlePrevButtonClick = (): void => {
    setIsAnimationGoing(true);

    const timerId = setTimeout((): void => {
      clearTimeout(timerId);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimationGoing(false);
    }, DURATION_OF_ANIMATION);
  };

  const handleNextButtonClick = (): void => {
    setIsAnimationGoing(true);

    const timerId = setTimeout((): void => {
      clearTimeout(timerId);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimationGoing(false);
    }, DURATION_OF_ANIMATION);
  };

  return (
    <ErrorBoundary fallback={<SectionError />}>
      <div className={styles.slider}>
        <div className={`${styles.slide} ${isAnimationGoing ? '' : styles.active}`}>
          <h4>{testimonials[currentTestimonial].text}</h4>
        </div>
        <div className={styles.author_and_buttons}>
          <Author
            name={testimonials[currentTestimonial].author}
            location={testimonials[currentTestimonial].authorLocation}
            isAnimationGoing={isAnimationGoing}
          />
          <Buttons
            disabled={isAnimationGoing}
            onPrev={handlePrevButtonClick}
            onNext={handleNextButtonClick}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Slider;
