// Find if all characters in a string is unique
const appDiv = document.getElementById('app');
appDiv.innerText = `${isUniqueOptimized('abcdef')} , ${isUniqueOptimized(
  '89%def4#6721'
)}, ${isUniqueOptimized('abcABC')}, ${isUniqueOptimized('abcade')}`;
console.log(
  isUniqueOptimized('abcdef'),
  isUniqueOptimized('89%def$#6721'),
  isUniqueOptimized('abcABC'),
  isUniqueOptimized('abcade')
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

//Complexity -> O(n) + O(n * log(n))
// O(n + n*log(n))
// O(n * log(n))
