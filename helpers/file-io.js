const { readFile, writeFile } = require("fs/promises");

const writeToFile = async (destination, content) => {
  await writeFile(destination, JSON.stringify(content, null, 4));
};

const readAndAppend = async (file) => {
  const data = await readFile(file, "utf8");
  const parsedData = JSON.parse(data);
  parsedData.push("New data");
  await writeFile(file, JSON.stringify(parsedData, null, 4));
};

export { writeToFile, readAndAppend };
