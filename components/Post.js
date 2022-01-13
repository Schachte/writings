import styles from "../styles/Post.module.scss";
import { getMDXComponent } from "mdx-bundler/client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import MDXComponents from "@/mdx/MDXComponents";

function scrollToTargetAdjusted(element) {
  if (element !== undefined) {
    var headerOffset = 5;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    element.scrollIntoView(true);
  }
}

export default function Post({ content, metadata, toc }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      const tocElements = document.getElementsByClassName("toc");
      for (let i = 0; i < tocElements.length; i++) {
        tocElements[i].addEventListener("click", function (e) {
          if (e !== undefined) {
            e.preventDefault();
            const elementName = e.target.textContent;
            const tmpElement = document.getElementById(elementName);
            scrollToTargetAdjusted(tmpElement);
          }
        });
      }
    }
  }, []);

  const Component = React.useMemo(() => getMDXComponent(content), [content]);
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ryan Schachte" />
        <meta
          name="description"
          content={metadata.description}
        />
      </Head>
      <div className={styles["post__wrapper"]}>
        <div className={styles["post__wrappertitle"]}>
          <span className={styles["post__wrappertitle_header"]}>
            {metadata.title}
          </span>
          <span className={styles["post__wrappertitle_description"]}>
            {metadata.description}
          </span>
        </div>
        <div className={styles["post__wrapperauthor"]}>
          <div className={styles["post__wrapperauthor_name"]}>
            <Link href="/posts/welcome-to-my-blog">
              <Image
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                src="/images/head.jpg"
                height="100px"
                width="100px"
                object="contain"
                layout="fill"
              />
            </Link>
          </div>
          <div className={styles["post__wrapperauthor_description"]}>
            <span
              className={styles["post__wrapperauthor_description_preamble"]}
            >
              Written By
            </span>
            <span className={styles["post__wrapperauthor_description_name"]}>
              {metadata.author}
            </span>
            <span className={styles["post__wrapperauthor_description_date"]}>
              {metadata.date}
            </span>
          </div>
        </div>

        {!metadata.hideToc && (
          <div className={styles["post__wrappertableofcontents"]}>
            <span className={styles["post__wrappertableofcontents_heading"]}>
              Table of Contents
            </span>
            <div
              className={styles["post__wrappertableofcontents_content"]}
              dangerouslySetInnerHTML={{ __html: toc }}
            ></div>
          </div>
        )}
        <div className={styles["post__wrappercontent"]}>
          <Component components={MDXComponents} />
        </div>
      </div>
    </>
  );
}
