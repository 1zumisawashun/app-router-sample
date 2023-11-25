import styles from "./styles.module.scss";

type FlexWrapperProps = {
  children: React.ReactNode;
  position?: string;
};

export const FlexWrapper: React.FC<FlexWrapperProps> = ({
  children,
  position,
}) => {
  return (
    <div className={styles["flex-wrapper"]} data-position={position}>
      {children}
    </div>
  );
};
