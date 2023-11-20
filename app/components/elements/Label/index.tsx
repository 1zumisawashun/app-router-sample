import { ThemeType } from "@/functions/types/Common";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type LabelProps = { children: ReactNode; theme?: ThemeType };

export const Label = ({ children, theme = "primary" }: LabelProps) => {
  return (
    <span className={styles["label"]} data-theme={theme}>
      {children}
    </span>
  );
};
