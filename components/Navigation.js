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
          <li className={styles["nav__listitem"]}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles["nav__listitem"]}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          <li className={styles["nav__listitem"]}>
            <Link href="/social">Social</Link>
            <ul className={styles["nav__listitemdrop"]}>
              <li>
                <span className={styles["fa"]}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </span>
                <Link href="https://github.com/schachte">
                  <a target="_blank">Github</a>
                </Link>
              </li>
              <li>
                <span className={styles["fa"]}>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </span>
                <Link href="https://twitter.com/thesimpengineer">
                  <a target="_blank">Twitter</a>
                </Link>
              </li>
              <li>
                <span className={styles["fa"]}>
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </span>
                <Link href="https://youtube.com/thesimpleengineer">
                  <a target="_blank">Youtube</a>
                </Link>
              </li>
              <li>
                <span className={styles["fa"]}>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </span>
                <Link href="https://linkedin.com/in/schachte">
                  <a target="_blank">LinkedIn</a>
                </Link>
              </li>
            </ul>
          </li>
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
