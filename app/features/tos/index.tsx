import { Nl2br } from "@/app/components";
import { prisma } from "@/app/functions/libs/prisma";
import styles from "./styles.module.css";

// 常に再生成
export const revalidate = 0;

export default async function Page() {
  const data = await prisma.metadata.findUniqueOrThrow({
    where: { key: "tos" },
  });
  return (
    <main>
      <h1 className={styles["tos-title"]}>Terms of Service</h1>
      <p className={styles["tos-subtitle"]}>The following text is a sample.</p>
      <Nl2br>{data.value}</Nl2br>
    </main>
  );
}
