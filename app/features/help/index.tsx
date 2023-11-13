"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

/**
 * @description `/help/faq`と`/help/tos`で共通するレイアウト
 * @see https://beta.nextjs.org/docs/routing/pages-and-layouts#nesting-layouts
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  // パスを取得してUIを変更する
  const pathname = usePathname();
  return (
    <section className={styles["nav-wrapper"]}>
      <nav className={styles["nav"]}>
        <Link
          href="/help/faq"
          aria-selected={pathname === "/help/faq"}
          className={styles["nav-item"]}
        >
          FAQ
        </Link>
        <Link
          href="/help/tos"
          aria-selected={pathname === "/help/tos"}
          className={styles["nav-item"]}
        >
          Terms
        </Link>
      </nav>
      {children}
    </section>
  );
}
