import { useEffect, useState } from 'react';

import { Button } from '@/components';

import styles from './styles.module.scss';

interface ComponentProps {
  isGoingToClose: boolean;
}

const CloseButton: React.FC<ComponentProps> = ({ isGoingToClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.close_button} ${isVisible && !isGoingToClose ? styles.visible : ''}`}>
      <Button styleType="yellow">X</Button>
    </div>
  );
};

export default CloseButton;
