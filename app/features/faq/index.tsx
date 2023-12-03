import { Nl2br } from "@/components/elements/Nl2br";
import { prisma } from "@/functions/libs/prisma";
import styles from "./styles.module.scss";

// 30秒ごとに再生成
export const revalidate = 30;

export default async function Page() {
  const data = await prisma.metadata.findUniqueOrThrow({
    where: { key: "faq" },
  });
  return (
    <main>
      <h1 className={styles["faq-title"]}>Frequently Asked Questions</h1>
      <p className={styles["faq-text"]}>The following text is a sample.</p>
      <Nl2br>{data.value}</Nl2br>
    </main>
  );
}
