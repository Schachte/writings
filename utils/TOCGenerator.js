/**
 * Author: Ryan Schachte
 * Dyanmic MD Parser and TOC Generator
 */

const dynamicMdMatcher = /^(#{1,4})\s+(.*)$/;

const injectId = (name) => {
  return `<li class="toc">${name}</li>`;
};

const retrieveParsedData = (postContent) => {
  const allLines = postContent
    .split(/\r?\n/)
    .map((line) => {
      return line;
    })
    .filter((line) => line.length > 0);

  const matchedHeadings = allLines
    .map((line) => {
      let potentialMatch = dynamicMdMatcher.exec(line);

      if (potentialMatch !== null) {
        return {
          depthCount: potentialMatch[1].length,
          type: potentialMatch[1],
          content: potentialMatch[2],
        };
      }
      return "";
    })
    .filter((line) => line !== "");

  return matchedHeadings.flatMap((item) => item);
};

const mdRecursiveSubRoutine = (data, existingGroup = [], solution = []) => {
  if (data.length == 0) {
    if (existingGroup) {
      return [...solution, existingGroup];
    }
    return solution;
  }

  const depthCount = data[0]["depthCount"];

  if (existingGroup.length == 0) {
    existingGroup = [data[0]];
    data.shift();
    return mdRecursiveSubRoutine(data, existingGroup, solution);
  }

  if (depthCount < existingGroup[existingGroup.length - 1]["depthCount"]) {
    solution = [...solution, existingGroup];
    const currentLevel = data[0];
    data.shift();
    return mdRecursiveSubRoutine(data, [currentLevel], solution);
  }

  existingGroup = [...existingGroup, data[0]];
  data.shift();
  return mdRecursiveSubRoutine(data, existingGroup, solution);
};

const generateNestedHtml = (depthData) => {
  let closeCount = 0;
  let generatedHtml = `<ul>
  ${recursiveListGenerator(depthData, depthData[0].depthCount, "", closeCount)}
  </ul>`;

  return generatedHtml;
};

const recursiveListGenerator = (
  layer,
  prevDepth,
  generatedCode,
  closeCount
) => {
  if (layer.length == 0) {
    generatedCode += "</ul>";
    return generatedCode;
  }

  const currentDepth = layer[0].depthCount;

  if (layer[0].depthCount == prevDepth) {
    generatedCode += injectId(layer[0].content);
    layer.shift();
    return recursiveListGenerator(
      layer,
      currentDepth,
      generatedCode,
      closeCount
    );
  }

  if (layer[0].depthCount > prevDepth) {
    // Tells us how much deeper we need to recurse down the tree
    // IE. if current depth is 2 (## hello) and next is 3 (### hello), the delta is 1 recursive invocation
    const calculatedRecursionDepth = layer[0].depthCount - prevDepth;

    let tempCloseCount = 0;
    for (let i = 0; i < calculatedRecursionDepth; i++) {
      generatedCode += "<ul>";
      tempCloseCount++;
    }

    generatedCode += injectId(layer[0].content);
    layer.shift();

    return recursiveListGenerator(
      layer,
      currentDepth,
      generatedCode,
      tempCloseCount
    );
  } else {
    while (closeCount--) generatedCode += "</ul>";
    generatedCode += injectId(layer[0].content);
    layer.shift();

    return recursiveListGenerator(
      layer,
      currentDepth,
      generatedCode,
      closeCount
    );
  }
};

export default function generateToc(fileContents) {
  const parsedResults = mdRecursiveSubRoutine(
    retrieveParsedData(fileContents)
  ).flatMap((item) => item);
  return generateNestedHtml(parsedResults);
}
