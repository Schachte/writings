import Head from "next/head";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AllPosts from "@/components/AllPosts";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getSortedPostsData() {
  const fileNames = fs.readdirSync("articles");
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join("articles", fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      fileName: fullPath,
      ...matterResult.data,
    };
  });
}

export async function getStaticProps() {
  const postFrontMatter = getSortedPostsData() || {};
  return {
    props: {
      postFrontMatter,
    },
  };
}

export default function HomePage({ postFrontMatter }) {
  return (
    <>
      <Head>
        <title>Schachte&apos;s Playground</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ryan Schachte" />
        <meta
          name="description"
          content="A blog covering engineering, finance, algorithms, computer science and technology. Ryan Schachte is an avid learner, teacher and engineer. Articles covering interview prep, leetcode, programming and design."
        />
      </Head>
      <div className="wrapper">
        <div className="content-wrapper">
          <Navigation />
          <Hero postMetadata={postFrontMatter} />
          {/* <AllPosts postMetadata={postFrontMatter} /> */}
          <Footer>
            Site Built &amp; Maintained By: Ryan Schachte // Logo Design By:
            Alyssa Sopanarat
          </Footer>
        </div>
      </div>
    </>
  );
}
