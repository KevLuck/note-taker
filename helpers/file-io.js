import fs from "fs";
import util from "util";

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 * Function to write data to the JSON file given a destination and some content
 * @param {string} destination The file you want to write to.
 * @param {object} content The content you want to write to the file.
 * @returns {void} Nothing
 */
async function writeToFile(destination, content) {
  await fs.writeFile(destination, JSON.stringify(content, null, 4));
  console.info(`\nData written to ${destination}`);
}

/**
 * Function to read data from a given a file and append some content
 * @param {object} content The content you want to append to the file.
 * @param {string} file The path to the file you want to save to.
 * @returns {void} Nothing
 */
async function readAndAppend(content, file) {
  const data = await readFromFile(file, "utf8");
  const parsedData = JSON.parse(data);
  parsedData.push(content);
  await writeToFile(file, parsedData);
}

export { readFromFile, writeToFile, readAndAppend };
