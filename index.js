// Find if all characters in a string is unique
const mySet = new Set('#$23452^&*');
console.log(mySet);
const appDiv = document.getElementById('app');
appDiv.innerText = `${isUniqueSet('abcdef')} , ${isUniqueSet(
  '89%def4#6721'
)}, ${isUniqueSet('abcABC')}, ${isUniqueSet('abcade')}
My Set [${[...mySet]}]`;
console.log(
  isUniqueEvenMoreOptimizedUsingSet('abcdef'),
  isUniqueEvenMoreOptimizedUsingSet('89%def$#6721'),
  isUniqueEvenMoreOptimizedUsingSet('abcABC'),
  isUniqueEvenMoreOptimizedUsingSet('abcade')
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

//Complexity time O(n), space O(n)
function isUniqueEvenMoreOptimized(str) {
  const searchedMap = {}; //O(n) -> space
  for (let i = 0; i < str.length; i++) {
    //O(n)
    const thisChar = str[i];

    if (searchedMap[thisChar] === true) {
      //O(1)
      return false;
    }

    searchedMap[thisChar] = true;
  }
  return true;
}

//Complexity time O(n), space O(n)
function isUniqueEvenMoreOptimizedUsingSet(str) {
  const searchedMap = new Set();
  for (let i = 0; i < str.length; i++) {
    //O(n)
    const thisChar = str[i];

    if (searchedMap.has(thisChar)) {
      //O(1)
      return false;
    }

    searchedMap.add(thisChar);
  }
  return true;
}

function isUniqueSet(str) {
  const newSet = new Set(str);

  return newSet.size === str.length;
}

// Here, because strict mode is not used, y is created in global space and value is 0 for y.
// y = 0 acts as (y = 0)  and returns value of y, i.e. 0
// hence x is also 0
// but x is defined as let, so it is only locally scoped and can not be accessed from outside
// but y is global scoped and can be accessed from outside
// hence, typeof x -> undefined, typeof y -> number
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
console.log(y);

// Here, because strict mode is used, y is not created in global space/local space as it is not declared
// hence we get reference error at line no 101 saying y can not be referenced as memory is not allocated for it
// function fooStrict() {
//   'use strict';
//   let a = (b = 0);
//   a++;
//   b++;
//   return a;
// }

// console.log(fooStrict(), typeof a, typeof b);
// console.log(b);

// This statement prints 100, as assignment operation returns the value assigned
console.log((myVar = 100));
