import {
  Loading,
  NextJsIcon,
  TextButtonAnchor,
  UnstyledButtonAnchor,
} from "@/components";
import { prisma } from "@/functions/libs/prisma";
import { zVersion } from "@/functions/models/Settings";
import { Suspense } from "react";
import "server-only";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className="bg-white lg:pb-6">
      <div className="max-w-screen-2xl px-2 md:px-4 mx-auto">
        <header className="flex justify-between items-center py-4">
          <UnstyledButtonAnchor
            href="/"
            className={styles["link-logo-wrapper"]}
            aria-label="logo"
          >
            <NextJsIcon />
            Awesome Note App
          </UnstyledButtonAnchor>

          <nav className="hidden md:flex gap-12">
            <TextButtonAnchor href="/notes" size="large">
              Memo
            </TextButtonAnchor>
            <TextButtonAnchor href="/help/faq" size="large">
              FAQ
            </TextButtonAnchor>
            <TextButtonAnchor href="/settings" size="large">
              Setting
            </TextButtonAnchor>
            <TextButtonAnchor href="/gallery" size="large">
              Gallery
            </TextButtonAnchor>
          </nav>

          <div>
            <span className={styles["version-item"]}>
              <Suspense fallback={<Loading />}>
                {/* 非同期のサーバーコンポーネント */}
                <Version />
              </Suspense>
            </span>
          </div>
        </header>
      </div>
    </div>
  );
};

const Version = async () => {
  // DBからデータ取得・versionをDBから取得
  const metadata = await prisma.metadata.findUniqueOrThrow({
    where: {
      key: "version",
    },
  });
  const version = zVersion.parse(metadata.value);
  return `v${version}`;
};
