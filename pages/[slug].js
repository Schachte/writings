import Navigation from "../components/Navigation";
import Post from "../components/Post";
import Footer from "@/components/Footer";
import { bundleMDX } from "mdx-bundler";

import generateToc from "utils/TOCGenerator";
import { remarkMdxImages } from "remark-mdx-images";
import imageSize from "rehype-img-size";
import rehypePrism from 'rehype-prism-plus';
import { visit } from 'unist-util-visit'

import fs from "fs";
import path from "path";

// const fixMetaPlugin = (options = {}) => {
//   return (tree) => {
//     visit(tree, 'element', visitor);
//   };

//   function visitor(node, index, parent) {
//     if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
//       return;
//     }

//     node.data = { ...node.data, meta: node.properties.metastring };
//   }
// };

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
        slug: filename["modified"].replace(".mdx", ""),
      },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join("articles", `${params.slug}.mdx`);
  const parsedData = fs.readFileSync(fullPath, "utf8");
  const { code, frontmatter } = await bundleMDX({
    source: parsedData,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? [[imageSize, { dir: "public" }], ]),
        remarkMdxImages,
      ];

      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // fixMetaPlugin,
        rehypePrism
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
      };

      return options;
    },
  });

  return {
    props: { source: code, frontMatter: frontmatter, toc: generateToc(parsedData) },
  };
}

export default function PostPage({ source="", frontMatter="", toc="" }) {
  if (source == "" || frontMatter == "" || toc == "") {
    return <div></div>
  }
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <Navigation showLogo={true} />
        <Post content={source} metadata={frontMatter} toc={toc} />
        <Footer>
          Site Built &amp; Maintained By: Ryan Schachte // Logo Design By:
          Alyssa Sopanarat
        </Footer>
      </div>
    </div>
  );
}
