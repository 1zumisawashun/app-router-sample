import { Nl2br } from "@/components/elements/Nl2br";
import { prisma } from "@/functions/libs/prisma";
import styles from "./styles.module.scss";

// 常に再生成
export const revalidate = 0;

export default async function Page() {
  const data = await prisma.metadata.findUniqueOrThrow({
    where: { key: "tos" },
  });
  return (
    <main>
      <h1 className={styles["tos-title"]}>Terms of Service</h1>
      <p className={styles["tos-text"]}>The following text is a sample.</p>
      <Nl2br>{data.value}</Nl2br>
    </main>
  );
}
