import random from "random";

const generateRandomString = () => {
  // Generate a random number between 1 and 0x10000
  const randomNumber = random.integer(1, 0x10000);

  // Convert the random number to a hexadecimal string and remove the first character
  const hexadecimalString = randomNumber.toString(16);
  return hexadecimalString.substring(1);
};

// Export the function
export default generateRandomString;
