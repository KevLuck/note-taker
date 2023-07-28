const { readFile, writeFile } = require("fs/promises");

const writeToFile = async (destination, content) => {
  await writeFile(destination, JSON.stringify(content, null, 4));
  console.info(`\nData written to ${destination}`);
};

const readAndAppend = async (content, file) => {
  const data = await readFile(file, "utf8");
  const parsedData = JSON.parse(data);
  parsedData.push(content);
  await writeFile(file, parsedData);
};

export { writeToFile, readAndAppend };
