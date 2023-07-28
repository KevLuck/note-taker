const { readFile, writeFile } = require("fs/promises");

/**
 * Function to write data to the JSON file given a destination and some content
 * @param {string} destination The file you want to write to.
 * @param {object} content The content you want to write to the file.
 * @returns {void} Nothing
 */
async function writeToFile(destination, content) {
  await writeFile(destination, JSON.stringify(content, null, 4));
  console.info(`\nData written to ${destination}`);
}

/**
 * Function to read data from a given a file and append some content
 * @param {object} content The content you want to append to the file.
 * @param {string} file The path to the file you want to save to.
 * @returns {void} Nothing
 */
async function readAndAppend(content, file) {
  const data = await readFile(file, "utf8");
  const parsedData = JSON.parse(data);
  parsedData.push(content);
  await writeFile(file, parsedData);
}

export { writeToFile, readAndAppend };

