import React, { useCallback, useEffect, useState } from 'react';

import { Overlay, PortalToBody } from '@/components';

import CloseButton from './CloseButton';
import Menu from './Menu';
import styles from './styles.module.scss';

const ANIMATION_DURATIONS = 150;

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

  const handleClose = useCallback(() => {
    setISGoingToClose(true);
    setIsVisible(false);

    const timerId: NodeJS.Timeout = setTimeout(() => {
      onClose();
      clearTimeout(timerId);
    }, ANIMATION_DURATIONS);
  }, [onClose]);

  return (
    <PortalToBody>
      <Overlay isGoingToClose={isGoingToClose} onClick={handleClose}>
        <div
          className={`${styles.mobile_menu} ${isVisible && !isGoingToClose ? styles.active : ''}`}
          data-testid="mobile-menu"
          onClick={handleMobileMenuClick}
        >
          <Menu onClose={handleClose} />
        </div>
        <CloseButton isGoingToClose={isGoingToClose} />
      </Overlay>
    </PortalToBody>
  );
};

export default React.memo(MobileMenu);
