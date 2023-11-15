"use client";
import { UnstyledButtonAnchor } from "@/components";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

/**
 * @description `/help/faq`と`/help/tos`で共通するレイアウト
 * @see https://beta.nextjs.org/docs/routing/pages-and-layouts#nesting-layouts
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  // パスを取得してUIを変更する
  const pathname = usePathname();
  return (
    <main>
      <div className="container-sp _mb-2">
        <section>
          <nav className={styles["nav"]}>
            <UnstyledButtonAnchor
              href="/help/faq"
              aria-selected={pathname === "/help/faq"}
              className={styles["nav-item"]}
            >
              FAQ
            </UnstyledButtonAnchor>
            <UnstyledButtonAnchor
              href="/help/tos"
              aria-selected={pathname === "/help/tos"}
              className={styles["nav-item"]}
            >
              Terms
            </UnstyledButtonAnchor>
          </nav>
          {children}
        </section>
      </div>
    </main>
  );
}
