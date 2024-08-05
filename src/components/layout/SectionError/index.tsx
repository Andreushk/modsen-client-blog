import { Paragraph } from '@/components';

import styles from './styles.module.scss';

const DEFAULT_TITLE = 'Unable to display this section :/';
const DEFAULT_DESCRIPTION =
  'It seems that an error occurred while displaying this section of our site. You can try to refresh the page or contacting our support team if the problem persists.';

interface ComponentProps {
  title?: string;
  description?: string;
  reason?: string;
}

const SectionError: React.FC<ComponentProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  reason,
}) => (
  <section className={styles.error_section}>
    <div>
      <h2>{title}</h2>
      <Paragraph style="dark">{description}</Paragraph>
      {reason && <Paragraph style="dark">Reason: {reason}</Paragraph>}
    </div>
  </section>
);

export default SectionError;
