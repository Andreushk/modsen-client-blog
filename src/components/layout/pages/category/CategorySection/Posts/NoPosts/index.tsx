import styles from './styles.module.scss';

const NO_POSTS_MESSAGE = 'Unfortunately, no results were found that match your selected filters :/';

const NoPosts: React.FC = () => (
  <div className={styles.no_posts}>
    <h4>{NO_POSTS_MESSAGE}</h4>
  </div>
);

export default NoPosts;
