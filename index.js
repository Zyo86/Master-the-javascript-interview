import { f } from './AMAZON.js';

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
// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);
// console.log(y);

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
// console.log((myVar = 100));

//Multi level array flatten question
const arr = [4, 5, 6, [2, 3], 7, 8, [[9, 10], 11]];
const aRR = [[[[[[[[[[[[[[[[[[[[20]]]]]]]]]]]]]]]]]]]];

//flatten(arr,1) -> [4,5,6,2,3,7,8,[9,10],11]
//flatten(arr,2) -> [4,5,6,2,3,7,8,9,10,11]

function flatten(arr, n) {
  const flattenedArray = [];
  if (n < 1) return [...arr];

  for (let i = 0; i < arr.length; i++) {
    const thisItem = arr[i];
    if (Array.isArray(thisItem)) {
      // Again flatten keeping the level in mind
      const newArray = flatten(thisItem, n - 1);
      for (let j = 0; j < newArray.length; j++) {
        flattenedArray.push(newArray[j]);
      }
    } else {
      flattenedArray.push(thisItem);
    }
  }

  return flattenedArray;
}

console.log(flatten(arr, 1));
console.log(flatten(arr, 2));
console.log(flatten(arr, 3));

console.log(flatten(aRR, 1));
console.log(flatten(aRR, 2));
console.log(flatten(aRR, 3));

console.log(flatten(aRR, 4));
console.log(flatten(aRR, 5));
console.log(flatten(aRR, 6));

console.log(flatten(aRR, 7));
console.log(flatten(aRR, 8));
console.log(flatten(aRR, 9));

console.log(flatten(aRR, 17));
console.log(flatten(aRR, 18));
console.log(flatten(aRR, 19));

console.log(flatten(aRR, 20));
console.log(flatten(aRR, 21));
console.log(flatten(aRR, 22));

// Finding if a string is a rotation of base string

function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else if (str1.length === str2.length && (str1 + str1).includes(str2)) {
    //O(n) to find includes
    //O(n) space Complexity while adding strings str1 + str1, string concatenation time complexity O(1)
    return true;
  } else {
    return false;
  }
}

function isRotationNonOptimised(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    //O(n) loop rotation as string characters are n numbers
    const currentRotation = str1.slice(i, str1.length) + str1.slice(0, i); //Slice operation is linear iteration hence O(n)
    if (currentRotation === str2) return true;
  }

  //Time complexity comes out as O(n2)
  //Space complexity comes out as O(n) to store currentRotation

  return false;
}

console.log(isRotation('Javascript', 'Java'));
console.log(isRotation('Javascript', 'scriptJava'));

console.log(isRotationNonOptimised('Javascript', 'Java'));
console.log(isRotationNonOptimised('Javascript', 'scriptJava'));

// Check is an array is a substring of another array

function isSubset(superset, subset) {
  const map = {};
  if (subset.length > superset.length) {
    return false;
  }

  for (let i = 0; i < superset.length; i++) {
    const thisItem = superset[i];
    if (map[thisItem] === undefined) {
      map[thisItem] = 1;
    } else {
      map[thisItem]++;
    }
  }

  for (let i = 0; i < subset.length; i++) {
    const thisItem = subset[i];
    if (map[thisItem]) {
      map[thisItem]--;
      if (map[thisItem] === 0) {
        delete map[thisItem];
      }
    } else if (map[thisItem] === undefined) {
      return false;
    }
  }

  return true;
}
//Time O(m + n)
//Space O(n)
console.log(isSubset([1, 2, 3], [1, 2, 3, 4]), ' :isSubset');
console.log(isSubset([1, 2, 2, 2, 3], [1, 2, 2]), ' :isSubset');
console.log(isSubset([1, 3], [1, 2]), ' :isSubset');
console.log(isSubset([1, 2, 3], [1, 1, 1]), ' :isSubset');

//Find if strings are only singly mutated

//Insertion
// "abc", "abdc"
//Deletion
// "abcd", "abd"
//Substitution
// "abcd" , "abcX"

function isSingleMutation(str1, str2) {
  let mutations = 0;
  for (let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      mutations++;
      if (mutations > 1) {
        return false;
      }
      if (str1.length < str2.length) {
        i--;
      }
      if (str1.length > str2.length) {
        j--;
      }
    }
  }
  return true;
}

//Time O(n)
//Space O(1)

console.log(isSingleMutation('abc', 'abdc'), ' : single mutation');
console.log(isSingleMutation('abcd', 'abd'), ' : single mutation');
console.log(isSingleMutation('abcd', 'abcX'), ' : single mutation');

// Find if strings in an array are all anagrams

function allAnagrams(strings) {
  // n-> length of array s-> length of strings
  const sorted = strings.map((str) => str.split('').sort().join(''));
  // map runs n times
  // for each map iteration, split -> O(s), sort -> O(s*log(s)), join -> O(s)
  // Comes down to O(n * (2s + s*log(s)))
  // Comes down to O(n * s * log(s))
  for (let i = 1; i < sorted.length; i++) {
    //O(s)
    if (sorted[i] !== sorted[0]) {
      return false;
    }
  }
  return true;
}

// Time O(n * s * log(s))
// Space O(n*s)
console.log(allAnagrams(['abcd', 'abdc', 'adbc']), ': All Anagrams');

function allAnagramsFast(strings) {}

// Deep Equivalence Algorithms
// Deep equality operators are not gonna help
// NaN is of type number
// NaN === NaN returns false
// null is an object in javascript because of a bug itself
function deepEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a !== 'object' || a === null || b === null) {
    return a === b;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    if (!deepEquals(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEquals(1, 1));
console.log(deepEquals(null, 1));
console.log(deepEquals(1, NaN));
console.log(deepEquals({}, {}));
console.log(deepEquals('{}', 1));

// Memoized fibonacci using closure

const fibonacci = (function () {
  const seq = [1, 1];
  return function (n) {
    if (seq.length > n) {
      return seq.slice(0, n);
    }

    while (seq.length < n) {
      const lastItem = seq[seq.length - 1];
      const secondLastItem = seq[seq.length - 2];
      seq.push(lastItem + secondLastItem);
    }

    return seq;
  };
})();

console.log(fibonacci(2));
console.log(fibonacci(20));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));

console.log(f(1));
console.log(f(10));
console.log(f(11));
console.log(f(99));
console.log(f(111));
console.log(f(121));
console.log(f(999));
console.log(f(990));

console.log(f(123456));
console.log(f(123456789));
console.log(f(123456345));
console.log(f(123456890));
console.log(f(55555555555555555));
