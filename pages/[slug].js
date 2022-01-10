import Navigation from "../components/Navigation";
import Post from '../components/Post'
import Footer from "@/components/Footer";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import generateToc from "utils/TOCGenerator";

import fs from "fs";
import path from "path";

const generateSlugFromFile = (file) =>
  [file]
    .map((fn) => {
      return {
        original: fn,
      };
    })
    .map((fn) => {
      return { modified: fn["original"], ...fn };
    })
    .map((fn) => {
      return { modified: fn["modified"], ...fn };
    })[0];

export async function getStaticPaths() {
  const fileNames = fs.readdirSync("articles");
  const paths = fileNames.map(generateSlugFromFile).map((filename) => {
    return {
      params: {
        slug: filename["modified"].replace(".mdx", "")
      },
    };
  });
  
  return {paths, fallback: true}
}

export async function getStaticProps({ params }) {
  const fullPath = path.join("articles", `${params.slug}.mdx`);
  const parsedData = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(parsedData);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [
        // [imageSize, { dir: "public" }],
        // fixMetaPlugin,
        // rehypePrism,
      ],
    },
  });

  return {
    props: { source: mdxSource, frontMatter: data, toc: generateToc(content) },
  };
}

export default function PostPage({ source, frontMatter, toc }) {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <Navigation showLogo={true} />
        <Post content={source} metadata={frontMatter} toc={toc} />
        <Footer>Site Built &amp; Maintained By: Ryan Schachte // Logo Design By: Alyssa Sopanarat</Footer>
      </div>
    </div>
  );
}
