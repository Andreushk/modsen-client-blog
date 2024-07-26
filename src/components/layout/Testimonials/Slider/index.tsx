'use client';

import React, { useCallback, useState } from 'react';

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

  const handlePrevButtonClick = useCallback((): void => {
    setIsAnimationGoing(true);

    const timerId = setTimeout((): void => {
      clearTimeout(timerId);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimationGoing(false);
    }, DURATION_OF_ANIMATION);
  }, [testimonials]);

  const handleNextButtonClick = useCallback((): void => {
    setIsAnimationGoing(true);

    const timerId = setTimeout((): void => {
      clearTimeout(timerId);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimationGoing(false);
    }, DURATION_OF_ANIMATION);
  }, [testimonials]);

  return (
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
  );
};

export default Slider;
