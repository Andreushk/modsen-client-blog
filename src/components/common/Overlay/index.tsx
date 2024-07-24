'use client';

import { useEffect, useState } from 'react';

import styles from './style.module.scss';

interface ComponentProps {
  children: React.ReactNode;
  isGoingToClose?: boolean;
  onClick: () => void;
}

const Overlay: React.FC<ComponentProps> = ({ children, onClick, isGoingToClose = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`${styles.overlay} ${isVisible && !isGoingToClose ? styles.visible : null}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Overlay;
