import styles from "../styles/Hero.module.scss";
import Link from "next/link";
import AllPosts from "@/components/AllPosts";

export default function Hero({ postMetadata }) {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__container"]}>
        <div className={styles["hero__welcome-text"]}>
          <div className={styles["hero__image"]}>
            <img
              src={"/images/tuff_transparent.png"}
              width={"200px"}
              height={"auto"}
            />
          </div>
          <div className={styles["hero__banner"]}>
            <span className={styles["hero__name"]}>
              👋 I&apos;m{" "}
              <span className={styles["marker"]}>
                <Link href="/posts/welcome-to-my-blog">Ryan Schachte</Link>
              </span>
            </span>
            <span className={styles["hero__links"]}>
              A
              <span
                className={`${styles["hero__link"]} ${styles["hero__linkorange"]}`}
              >
                <Link href="https://www.strava.com/athletes/3934827">
                  <a target="_blank">runner</a>
                </Link>
              </span>
              ,
              <span
                className={`${styles["hero__link"]} ${styles["hero__linkred"]}`}
              >
                <Link href="https://www.youtube.com/TheSimpleEngineer">
                  <a target="_blank">educator</a>
                </Link>
              </span>
              ,
              <span
                className={`${styles["hero__link"]} ${styles["hero__linkblue"]}`}
              >
                <Link href="https://www.linkedin.com/in/schachte">
                  <a target="_blank">engineer</a>
                </Link>
              </span>{" "}
              &amp;
              <span
                onClick={() => alert("Welcome to my blog!")}
                className={`${styles["hero__link"]} ${styles["hero__linktan"]}`}
              >
                occasional blogger
              </span>
              .
            </span>
            <span className={styles["hero__summary"]}>
              This is my blog, where I like to share things I&apos;ve{" "}
              <span
                className={`${styles["hero__link"]} ${styles["hero__linkyellow"]}`}
              >
                <Link href="https://www.github.com/schachte">
                  <a target="_blank">learned or developed</a>
                </Link>
              </span>
              with the broader internet community. Wanna chat? Drop me a message
              from my social above.
            </span>

            <div className={styles["hero__newsletter"]}>
              <input
                className={styles["hero__newsletter_input"]}
                type="text"
                placeholder="Sign up for my occasional newsletter"
              />
              <button
                onClick={() => alert("Not yet enabled")}
                className={styles["hero__newsletter_inputbutton"]}
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <AllPosts postMetadata={postMetadata} />
    </div>
  );
}
