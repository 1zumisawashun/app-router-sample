import { getVariants } from "@/functions/helpers";
import clsx from "clsx";
import styles from "./styles.module.scss";

type ButtonWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  className,
}) => {
  const variants = getVariants({ className, styles });
  return (
    <div className={clsx(styles["button-wrapper"], ...variants)}>
      {children}
    </div>
  );
};
