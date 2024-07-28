'use client';

import { Paragraph } from '@/components';
import { TESTIMONIALS_REQUEST_URL } from '@/constants/api';
import useQueryDataArray from '@/hooks/useQueryDataArray';
import { Testimonial } from '@/types/models/testimonials';

import LoadingSlider from './LoadingSlider';
import Slider from './Slider';
import styles from './styles.module.scss';
import Title from './Title';

const Testimonials: React.FC = () => {
  const { data, isLoading, error } = useQueryDataArray<Testimonial>(TESTIMONIALS_REQUEST_URL);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_content}>
        <Title />
        <div className={styles.testimonials_divider} />
        {isLoading && <LoadingSlider />}
        {data && <Slider testimonials={data} />}
        {error && <Paragraph style="dark">{error}</Paragraph>}
      </div>
    </section>
  );
};

export default Testimonials;
