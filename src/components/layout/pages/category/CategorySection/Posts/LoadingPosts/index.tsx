import Item from './Item';
import styles from './styles.module.scss';

const LOADING_POSTS_ITEMS = [1, 2, 3];

const LoadingPosts: React.FC = () => (
  <div className={styles.loading_posts}>
    {LOADING_POSTS_ITEMS.map((value) => (
      <Item key={value} />
    ))}
  </div>
);

export default LoadingPosts;
