import { ThemeType } from "@/functions/types/Common";
import styles from "./styles.module.scss";

type PanelProps = {
  children: React.ReactNode;
  theme?: ThemeType;
};

export const Panel: React.FC<PanelProps> = ({
  children,
  theme = "primary",
}) => {
  return (
    <div className={styles["panel-wrapper"]}>
      <div className={styles["panel-inner"]} data-theme={theme}>
        {children}
      </div>
    </div>
  );
};
