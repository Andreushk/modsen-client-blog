import fetchDataArray from '@/api/fetchDataArray';
import { SERVER_URL, ServerPaths } from '@/constants/api';
import { Testimonial } from '@/types/models/testimonials';

import Slider from './Slider';
import styles from './styles.module.scss';
import Title from './Title';

const Testimonials: React.FC = async () => {
  const testimonials = await fetchDataArray<Testimonial[]>(
    `${SERVER_URL}${ServerPaths.TESTIMONIALS}`,
  );

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_content}>
        <Title />
        <div className={styles.testimonials_divider} />
        <Slider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
