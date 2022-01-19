import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContextConsumer } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Nav.module.scss";

export default function HomePage({ postFrontMatter }) {
  return (
    <>
      <Head>
        <title>Schachte&apos;s Playground</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ryan Schachte" />
        <meta
          name="description"
          content="A blog covering engineering, finance, algorithms, computer science and technology. Ryan Schachte is an avid learner, teacher and engineer. Articles covering interview prep, leetcode, programming and design."
        />
      </Head>
      <div className="wrapper">
        <div className="content-wrapper">
          <Navigation showLogo={true} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4rem",
              fontSize: "2rem",
            }}
          >
            <div className={styles["social__container"]}>
              <div className={styles["social__btn"]}>
                <Link href="https://github.com/schachte">
                  <span className={styles["fa"]}>
                    Github
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </span>
                </Link>
              </div>
              <div className={styles["social__btn"]}>
                <Link href="https://twitter.com/thesimpengineer">
                  <span className={styles["fa"]}>
                    <a target="_blank">Twitter</a>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </span>
                </Link>
              </div>
              <div className={styles["social__btn"]}>
                <Link href="https://youtube.com/thesimpleengineer">
                  <span className={styles["fa"]}>
                    Youtube
                    <FontAwesomeIcon icon={["fab", "youtube"]} />
                  </span>
                </Link>
              </div>
              <div className={styles["social__btn"]}>
                <Link href="https://linkedin.com/in/schachte">
                  <span className={styles["fa"]}>
                    LinkedIn
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <Footer>
            Site Built &amp; Maintained By: Ryan Schachte // Logo Design By:
            Alyssa Sopanarat
          </Footer>
        </div>
      </div>
    </>
  );
}
