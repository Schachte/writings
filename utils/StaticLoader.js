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

export const getSlugs = () => {
  const fileNames = fs.readdirSync("articles");
  return fileNames.map(generateSlugFromFile).map((filename) => {
    return {
      params: {
        slug: filename["modified"].replace(".mdx", ""),
        filename: filename["original"],
      },
    };
  });
};

export const getPostData = async (originalFileName) => {
  const fullPath = path.join("articles", `${originalFileName}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
