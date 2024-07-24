import React, { useCallback, useEffect, useState } from 'react';

import { Overlay, PortalToBody } from '@/components';

import Menu from './Menu';
import styles from './styles.module.scss';

interface ComponentProps {
  onClose: () => void;
}

const MobileMenu: React.FC<ComponentProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isGoingToClose, setISGoingToClose] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMobileMenuClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleOverlayClick = useCallback(() => {
    setISGoingToClose(true);
    setIsVisible(false);

    const timerId: NodeJS.Timeout = setTimeout(() => {
      onClose();
      clearTimeout(timerId);
    }, 250);
  }, [onClose]);

  return (
    <PortalToBody>
      <Overlay isGoingToClose={isGoingToClose} onClick={handleOverlayClick}>
        <div
          className={`${styles.mobile_menu} ${isVisible ? styles.active : null}`}
          onClick={handleMobileMenuClick}
        >
          <Menu />
        </div>
      </Overlay>
    </PortalToBody>
  );
};

export default React.memo(MobileMenu);
