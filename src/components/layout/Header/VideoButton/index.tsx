'use client';

import { useTranslations } from 'next-intl';
import React, { useCallback, useState } from 'react';

import { Button, ModalWithVideo, Overlay, PortalToBody } from '@/components';

import styles from './styles.module.scss';

const VideoButton: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const t = useTranslations('Header');

  const handleVideoButtonClick = useCallback(() => {
    setIsVideoModalOpen((prevIsVideoModalOpen) => !prevIsVideoModalOpen);
  }, []);

  return (
    <>
      <div className={styles.header_video}>
        <Button styleType="white" onClick={handleVideoButtonClick}>
          {t('video-button')}
        </Button>
      </div>

      {isVideoModalOpen && (
        <PortalToBody>
          <Overlay onClick={handleVideoButtonClick}>
            <ModalWithVideo />
          </Overlay>
        </PortalToBody>
      )}
    </>
  );
};

export default React.memo(VideoButton);
