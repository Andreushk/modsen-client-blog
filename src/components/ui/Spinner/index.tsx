import styles from './styles.module.scss';

const Spinner: React.FC = () => (
  <div className={styles.loader_container}>
    <div className={styles.loader} />
  </div>
);

export default Spinner;
