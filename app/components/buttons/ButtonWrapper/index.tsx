import styles from "./styles.module.scss";

type ButtonWrapperProps = {
  children: React.ReactNode;
  position?: string;
};

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  position,
}) => {
  return (
    <div className={styles["button-wrapper"]} data-position={position}>
      {children}
    </div>
  );
};
