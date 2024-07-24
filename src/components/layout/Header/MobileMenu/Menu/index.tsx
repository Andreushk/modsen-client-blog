import React from 'react';

import { LanguageSelect, Navigation } from '@/components';

import VideoButton from '../../VideoButton';

const Menu: React.FC = () => (
  <>
    <Navigation direction="column" />
    <VideoButton />
    <LanguageSelect />
  </>
);

export default React.memo(Menu);
