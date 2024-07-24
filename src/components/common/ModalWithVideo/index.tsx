'use client';

import { useRef, useState } from 'react';

import styles from './styles.module.scss';

const NOT_SUPPORTED_MESSAGE = "Sorry, your browser doesn't support videos";
const PATH_TO_VIDEO = '/video/video.mp4';
const VIDEO_FORMAT = 'video/mp4';

const ModalWithVideo: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = (e: React.MouseEvent): void => {
    e.stopPropagation();

    if (!videoRef.current) {
      return;
    }

    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className={styles.video} onClick={handleClick}>
      <video ref={videoRef} autoPlay>
        {NOT_SUPPORTED_MESSAGE}
        <track kind="captions" />
        <source src={PATH_TO_VIDEO} type={VIDEO_FORMAT} />
      </video>
    </div>
  );
};

export default ModalWithVideo;
