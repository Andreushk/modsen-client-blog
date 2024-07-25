import Image from 'next/image';

import styles from './styles.module.scss';

const IMAGE_PATH = '/images/man-in-suit.jpg';

const BackgroundImage: React.FC = () => (
  <div className={styles.image_wrapper}>
    <Image src={IMAGE_PATH} width={1440} height={720} priority alt="Background Image" />
  </div>
);

export default BackgroundImage;
