import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      Loading...
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
