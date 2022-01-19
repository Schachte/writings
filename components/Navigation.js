import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContextConsumer } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation({ showLogo = false }) {
  const ctx = useContext(ThemeContextConsumer);
  const determineUserPreference = () => {
    if (localStorage.schachteTheme) {
      if (localStorage.schachteTheme == "dark") {
        return "light";
      }
      return "dark";
    }

    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "light";
      } else {
        return "dark";
      }
    }
    return "light";
  };

  const renderLogo = (showLogo) => {
    if (showLogo) {
      return (
        <li className={styles["nav__listlogo"]}>
          <Link href="/">
            <img
              className={styles["nav__listlogo_img"]}
              src={"/images/tuff_transparent.png"}
              height={"auto"}
            />
          </Link>
          <Link href="/">
            <span className={styles["nav__listlogo_txt"]}>./R.Schachte</span>
          </Link>
        </li>
      );
    }
  };

  const toggleTheme = () => {
    const userPref = determineUserPreference();
    localStorage.setItem("schachteTheme", userPref);
    let app = document.getElementsByTagName("BODY")[0];
    app.setAttribute("data-theme", userPref);
    ctx.toggleDarkMode();
  };

  return (
    <nav className={styles["nav"]}>
      <div className={styles["mini_nav"]}>
        <ul className={styles["nav__list"]}>
          {renderLogo(showLogo)}
          <Link href="/">
            <li className={styles["nav__listitem"]}>
              <a>Home</a>
            </li>
          </Link>
          <Link href="/blog">
            <li className={styles["nav__listitem"]}>
              <a>Blog</a>
            </li>
          </Link>
          <Link href="/social">
            <li className={styles["nav__listitem"]}>
              Social
              <ul className={styles["nav__listitemdrop"]}>
                <Link href="https://github.com/schachte">
                  <li>
                    <span className={styles["fa"]}>
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </span>
                    <a target="_blank">Github</a>
                  </li>
                </Link>
                <Link href="https://twitter.com/thesimpengineer">
                  <li>
                    <span className={styles["fa"]}>
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </span>
                    <a target="_blank">Twitter</a>
                  </li>
                </Link>
                <Link href="https://youtube.com/thesimpleengineer">
                  <li>
                    <span className={styles["fa"]}>
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </span>
                    <a target="_blank">Youtube</a>
                  </li>
                </Link>
                <Link href="https://linkedin.com/in/schachte">
                  <li>
                    <span className={styles["fa"]}>
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </span>
                    <a target="_blank">LinkedIn</a>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <li className={styles["nav__listitem"]}>
            <Link href="/files/resume.pdf">
              <a target="_blank">Resume</a>
            </Link>
          </li>
          <li className={styles["nav__listitem"]}>
            <Link href="/posts/welcome-to-my-blog">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <div onClick={toggleTheme} className={styles["toggle_theme"]}>
          <span className={styles["toggle_theme__moon"]}>🌙</span>
        </div>
      </div>
    </nav>
  );
}
