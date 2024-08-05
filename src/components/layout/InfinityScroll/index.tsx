'use client';

import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

interface ComponentProps {
  children: React.ReactNode[];
}

const InfinityScroll: React.FC<ComponentProps> = ({ children }) => {
  const elementsRefs = useRef<HTMLElement[] | null>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (elementsRefs.current) {
      elementsRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    }

    const currentRefs = elementsRefs.current;

    return () => {
      if (currentRefs) {
        currentRefs.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, [children]);

  const handleRefsToTheElements = (index: number) => (element: HTMLDivElement) => {
    if (elementsRefs.current) {
      elementsRefs.current[index] = element;
    }
  };

  return children.map((child, index) => (
    <div key={index} ref={handleRefsToTheElements(index)} className={styles.fade_in}>
      {child}
    </div>
  ));
};

export default InfinityScroll;
