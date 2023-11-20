import styles from "./styles.module.scss";

export const Loading: React.FC = () => {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles["loading-1"]}></div>
      <div className={styles["loading-2"]}></div>
      <div className={styles["loading-1"]}></div>
    </div>
  );
};

export const LoadingWithOverlay: React.FC = () => {
  return (
    <div className={styles["loading-with-overlay"]}>
      <div className={styles["loading-with-overlay-wrapper"]}>
        <span className={styles["loading"]} />
      </div>
    </div>
  );
};
