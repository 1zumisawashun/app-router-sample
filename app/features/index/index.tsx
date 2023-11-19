import coverPic from "@/assets/images/image-cover.jpg";
import { AnchorButton, ButtonWrapper } from "@/components";
import Image from "next/image";
import "server-only";
import styles from "./styles.module.scss";

export default function Page() {
  return (
    <section className={styles["index-container"]}>
      <div className={styles["index-wrapper"]}>
        <p className={styles["index-sub-title"]}>
          Introducing the App Directory
        </p>

        <h1 className={styles["index-title"]}>
          Revolutionary way to build the web
        </h1>

        <div className={styles["index-text-wrapper"]}>
          <p className={styles["index-text"]}>
            Learn about the new features of Next.js 13 through building a note
            application.
          </p>
          <p className={styles["index-text"]}>
            Front-end development will be more fun.
          </p>
        </div>

        <ButtonWrapper position="center">
          <AnchorButton href="/notes/new" size="large">
            Add new
          </AnchorButton>
          <AnchorButton href="/notes" variant="outlined" size="large">
            View list
          </AnchorButton>
        </ButtonWrapper>
      </div>

      <div className={styles["index-image-wrapper"]}>
        <Image
          src={coverPic}
          priority
          alt="Photo by Fakurian Design"
          className={styles["index-image"]}
        />
      </div>
    </section>
  );
}
