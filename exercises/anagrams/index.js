// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const convertString = string => {
    return string
      .replace(/( )/g, '')
      .toLowerCase()
      .split('');
  };

  const stringAChars = convertString(stringA);
  const stringBChars = convertString(stringB);

  return (
    stringAChars.length == stringBChars.length &&
    stringAChars.sort().join('') === stringBChars.sort().join('')
  );
}

module.exports = anagrams;

// const fn = s =>
//   [...s].reduce((acc, char) => {
//     if (acc.hasOwnProperty(char)) return { ...acc, [char]: acc[char] + 1 };
//     return { ...acc, [char]: 1 };
//   }, {});

// const mapA = fn(stringA);

// const mapB = fn(stringB);

// return Object.entries(mapA).every(([key, occurance]) => {
//   return mapB[key] == occurance;
// });
