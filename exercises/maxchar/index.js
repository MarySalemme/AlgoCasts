// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxValue = 0;
  let maxChar = "";
  const chars = {};
  for (const char of str) {
    !chars[char] ? (chars[char] = 1) : chars[char]++;
  }
  for (const char in chars) {
    if (chars[char] > maxValue) {
      maxValue = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
