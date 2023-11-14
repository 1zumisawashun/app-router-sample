import styles from "./styles.module.scss";

export const ButtonWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["button-wrapper"]}>{children}</div>;
};
