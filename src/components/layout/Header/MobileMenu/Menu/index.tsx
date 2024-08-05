import React from 'react';

import { LanguageSelect, Navigation } from '@/components';

import VideoButton from '../../VideoButton';

interface ComponentProps {
  onClose: () => void;
}

const Menu: React.FC<ComponentProps> = ({ onClose }) => (
  <>
    <Navigation direction="column" onLinkClick={onClose} />
    <VideoButton />
    <LanguageSelect />
  </>
);

export default React.memo(Menu);
