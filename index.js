// Find if all characters in a string is unique
const appDiv = document.getElementById('app');
appDiv.innerText = `${isUniqueEvenMoreOptimized(
  'abcdef'
)} , ${isUniqueEvenMoreOptimized('89%def4#6721')}, ${isUniqueEvenMoreOptimized(
  'abcABC'
)}, ${isUniqueEvenMoreOptimized('abcade')}`;
console.log(
  isUniqueEvenMoreOptimized('abcdef'),
  isUniqueEvenMoreOptimized('89%def$#6721'),
  isUniqueEvenMoreOptimized('abcABC'),
  isUniqueEvenMoreOptimized('abcade')
);

//Complexity time O(n2), space O(1)
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

//Complexity time O(n * log(n)), space O(n)
//Complexity -> O(n) + O(n * log(n))
// O(n + n*log(n))
// O(n * log(n))
function isUniqueOptimized(str) {
  const srotedArray = str.split('').sort(); //O(n * log(n))

  for (let i = 1; i < str.length; i++) {
    // O(n)
    if (srotedArray[i] === srotedArray[i - 1]) {
      return false;
    }
  }
  return true;
}

//Complexity time
function isUniqueEvenMoreOptimized(str) {
  const searchedMap = {};
  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (searchedMap[thisChar] === true) {
      return false;
    }

    searchedMap[thisChar] = true;
  }
  return true;
}
