import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AllPosts from "@/components/AllPosts";
import Footer from "@/components/Footer";
import fs from "fs"
import path from "path"
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
    <div className="wrapper">
      <div className="content-wrapper">
        <Navigation />
        <Hero />
        <AllPosts postMetadata={postFrontMatter} />
        <Footer>
          Site Built &amp; Maintained By: Ryan Schachte // Logo Design By:
          Alyssa Sopanarat
        </Footer>
      </div>
    </div>
  );
}
