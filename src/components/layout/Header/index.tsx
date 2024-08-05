'use client';

import { useCallback, useState } from 'react';

import { LanguageSelect, Logo, Navigation } from '@/components';
import useScreenWidth from '@/hooks/useScreenWidth';

import BurgerMenuButton from './BurgerMenuButton';
import MobileMenu from './MobileMenu';
import styles from './styles.module.scss';
import VideoButton from './VideoButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMObileMenuOpen] = useState<boolean>(false);
  const isWideScreen: boolean = useScreenWidth(1200);

  const handleBurgerMenuButtonClick = useCallback(() => {
    setIsMObileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <Logo />
        {isWideScreen && !isMobileMenuOpen && (
          <>
            <div className={styles.header_nav} data-testid="header-navigation">
              <Navigation />
            </div>
            <VideoButton />
            <LanguageSelect />
          </>
        )}
        {(!isWideScreen || isMobileMenuOpen) && (
          <BurgerMenuButton onClick={handleBurgerMenuButtonClick} />
        )}
        {isMobileMenuOpen && <MobileMenu onClose={handleBurgerMenuButtonClick} />}
      </div>
    </header>
  );
};

export default Header;
