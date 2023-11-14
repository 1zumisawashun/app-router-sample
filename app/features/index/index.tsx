import { AnchorButton, ButtonWrapper } from "@/app/components";
import coverPic from "@/public/cover.jpg";
import Image from "next/image";
import styles from "./styles.module.scss";

// NOTE:use client宣言しなくてもいいの？
export default function Page() {
  return (
    <main>
      <div className="container-sp _mb-2">
        <section className={styles["index-container"]}>
          <div className={styles["index-wrapper"]}>
            <p className="text-large -bold -pink">
              Introducing the App Directory
            </p>

            <h1 className="title-medium -bold">
              Revolutionary way to build the web
            </h1>

            <div className={styles["index-text-wrapper"]}>
              <p className="text-medium -grey">
                Learn about the new features of Next.js 13 through building a
                note application.
              </p>
              <p className="text-medium -grey">
                Front-end development will be more fun.
              </p>
            </div>

            <ButtonWrapper>
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
      </div>
    </main>
  );
}
