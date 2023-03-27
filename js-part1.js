/**
 * * 
 * Problem #1: A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in 
 * the binary representation of N.
 * 
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary 
 * representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary 
 * representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no 
 * binary gaps. The number 32 has binary representation 100000 and has no binary gaps. 
 * 
 * Write a function: function solution(N); 
 * 
 * that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't 
 * contain a binary gap.For example, given N = 1041 the function should return 5, because N has binary representation 
 * 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary 
 * representation '100000' and thus no binary gaps. Write an efficient algorithm for the following assumptions:N is an integer 
 * within the range [1..2,147,483,647].
 */


/**
 * 
 * @param {*} params 
 */
function binaryGap(number = 0) {
  const isPositiveInteger = checkPositiveInteger(number);
  if (!isPositiveInteger) { return false; }

  let binaryNum = numberToBinary(number);
  console.log(binaryNum);

  let binaryList = binaryNum.toString().split("") || [];
  console.log(binaryList);

  if (binaryList.length === 0) { return false; }

  if (binaryList.length === 1) {
    console.log("Doesn't have a binary gap.");
    return 0;
  }
  let gapsObj = {}
  let gapCounter = 0;
  let listLength = binaryList.length;
  for (let i = 0; i < listLength; i++) {
    if (binaryList[i] == "1") {
      gapCounter += 1;
      gapsObj[gapCounter] = 0;
    } else {
      if (i === listLength - 1) {
        if (Object.keys(gapsObj).length === 1) {
          gapsObj[gapCounter] = 0;
        } else {
          for (const key in gapsObj) {
            if (Object.hasOwnProperty.call(gapsObj, key)) {
              if (gapsObj[key] !== 0) break;
            }
          }
          gapsObj[gapCounter] = 0;
        }
      } else {
        gapsObj[gapCounter] += 1;
      }
    }
  }

  console.log(gapsObj);
  let maxGap = 0;
  for (const key in gapsObj) {
    if (Object.hasOwnProperty.call(gapsObj, key)) {
      if (gapsObj[key] > maxGap) {
        maxGap = gapsObj[key];
      }
    }
  }
  return maxGap
}

function numberToBinary(dec) {
  return (dec >>> 0).toString(2);
}

function checkPositiveInteger(number) {
  // Check bigints
  if (isFinite(parseInt(number))) {
    if (typeof number !== "number" || isNaN(number) || !Number.isInteger(number) || number < 0) {
      console.error("Invalid number. Value must be a positive integer number.", number);
      return false;
    }
  } else {
    if (typeof number !== "bigint" || !BigInt(number) || BigInt(number) < 0) {
      console.error("Invalid Big Int value. Value must be a positive integer number.", BigInt(number));
      return false;
    }
  }
  return true;
}

function checkInteger(number = 0) {
  if (typeof number !== "number" || isNaN(number) || !Number.isInteger(number)) {
    console.error("Invalid number. Value must be a integer number.", number);
    return false;
  }
  return true;
}

/**
 * An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last 
 * element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements 
 * are shifted right by one index and 6 is moved to the first place).
 * 
 * The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times. Write a function:
 *  function solution(A, K);
 * that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
 */

/**
 * The function cyclicRotation takes in two parameters, integersArray and rotations. integersArray is an optional parameter initialized 
 * as an empty array, which represents the array of integers the function is supposed to manipulate. rotations is also an optional 
 * parameter initialized as 0, which represents the number of rotations that should be carried out on the integersArray. 
 * 
 * The function logs the original integersArray to the console. Then it checks whether rotations is a number and an integer, and whether 
 * it is neither undefined nor zero; if not, the function returns false to indicate an error. It then checks whether integersArray is defined 
 * and not empty; if not, the function returns false again. If both parameters are defined correctly, the function executes a for loop 
 * that carries out as many rotations as indicated by rotations. Each iteration of the loop removes the last element of the integersArray 
 * using pop(), and adds it to the beginning of the array using unshift(). This effectively rotates the array to the right by one element 
 * in each iteration. Finally, the function logs the new rotated integersArray to the console and returns it.

 * @param {*} integersArray 
 * @param {*} rotations 
 */
function cyclicRotation(integersArray = [], rotations = 0) {
  if (isNaN(rotations) || !Number.isInteger(rotations)) { return []; }

  if (!rotations || rotations === 0) { return []; }

  if (!integersArray || Number.isInteger(integersArray)) { return []; }

  if (!integersArray.length || integersArray.length === 0) { return []; }

  for (let i = 1; i <= rotations; i++) {
    integersArray.unshift(integersArray.pop())
  }
  console.log(integersArray);

  return integersArray;
}
// console.log(cyclicRotation([-4, 6, 0, 0, 0, -2, 10], 15));
// console.log("Function: ", cyclicRotation([1, 3, 4], 2));


/**
 * A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the 
 * array can be paired with another element that has the same value, except for one element that is left unpaired.
 * For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
  
  the elements at indexes 0 and 2 have value 9,
  the elements at indexes 1 and 3 have value 3,
  the elements at indexes 4 and 6 have value 9,
  the element at index 5 has value 7 and is unpaired.

  For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
  
  the function should return 7, as explained in the example above. 
  Write an efficient algorithm for the following assumptions:

    - N is an odd integer within the range [1..1,000,000];
    - each element of array A is an integer within the range [1..1,000,000,000];
    - all but one of the values in A occur an even number of times.
 */

/**
 * 
 * @param {*} A 
 */
function oddOcurrencesArray(integersArray = []) {
  let invalidArray = false;
  let ocurrences = {};
  for (let i = 0; i < integersArray.length; i++) {
    // console.log(integersArray[i])
    if (!checkPositiveInteger(integersArray[i])) {
      invalidArray = true;
      break;
    } else if (integersArray[i] % 2 !== 1) {
      // console.log("Is Not Odd Number.");
      invalidArray = true;
      break;
    }
    ocurrences[integersArray[i]] = ocurrences[integersArray[i]] ? ocurrences[integersArray[i]] + 1 : 1;
  }
  console.log("found ocurrences: ", ocurrences);
  if (invalidArray) { return false; }

  const unpairedElement = () => {
    for (const key in ocurrences) {
      if (ocurrences[key] === 1) {
        return key;
      }
    }
    return 0;
  }
  return unpairedElement();
}

// console.log("oddOcurrencesArray: ", oddOcurrencesArray([9, 3, 9, 3, 9, 7, 9]));

/**
 * A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get 
 * to a position greater than or equal to Y. The small frog always jumps a fixed distance, D. Count the minimal number of 
 * jumps that the small frog must perform to reach its target.
 * 
 * Write an efficient algorithm for the following assumptions:
 * 
    X, Y and D are integers within the range [1..1,000,000,000];
    X ≤ Y.
 */
/**
 * 
 * @param {*} xDist 
 * @param {*} yDist 
 * @param {*} jumpValue 
 */
function frogJumping(xDist = 0, yDist = 0, jumpValue = 0) {
  const isValidX = checkPositiveInteger(xDist);
  const isValidY = checkPositiveInteger(yDist);
  const isValidD = checkPositiveInteger(jumpValue);

  if (!isValidX || !isValidY || !isValidD) { return false; }
  if (xDist > yDist) { return false; }
  if (xDist === yDist) { return 0; }

  let stepsTraveled = 0;
  let currentPos = xDist;
  while (currentPos <= yDist) {
    stepsTraveled += 1;
    currentPos += jumpValue;
  }
  return stepsTraveled;
}
// console.log("frogJumping: ", frogJumping(10, 2823, 2));

/**
 * An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], 
 * which means that exactly one element is missing. Your goal is to find that missing element.
 * For example, given array A such that:
    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
    
  the function should return 4, as it is the missing element. Write an efficient algorithm for the following assumptions:
    - N is an integer within the range [0..100,000];
    - the elements of A are all distinct;
    - each element of array A is an integer within the range [1..(N + 1)].
 * 
 */
/**
 * 
 * @param {*} list 
 */
function findMissingElement(elements = []) {
  const hasOnlyPositive = elements ? elements.reduce((prev, current) => {
    if (prev && checkPositiveInteger(current)) { return true; }
    return false;
  }, true) : false;
  if (!hasOnlyPositive) { return false; }

  const areDistinct = checkDistinctValues(elements);
  if (!areDistinct) { return false; }

  const missingElements = [];
  const max = Math.max(...elements); // Will find highest number
  const min = Math.min(...elements); // Will find lowest number

  for (let i = min; i <= max; i++) {
    if (!elements.includes(i)) { missingElements.push(i); }
  }
  return missingElements;
}

function checkDistinctValues(arr = []) {
  const n = arr.length;
  // Put all array elements in a map, by default Set stores unique values!.
  let set = new Set();
  for (let i = 0; i < n; i++) { set.add(arr[i]); }
  // If all elements are distinct, size of set should be same array.
  return set.size == arr.length;
}
// console.log("findMissingElement: ", findMissingElement([]));

/**
 * 
 * @param {*} array 
 */
function getMaxValueMultiple4(array = []) {
  const onlyIntegers = array ? array.reduce((prev, current) => {
    if (prev && checkInteger(current)) { return true; }
    return false;
  }, true) : false;
  if (!onlyIntegers) { return false; }

  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 4 === 0 && array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
}
// console.log("getMaxValueMultiple4: ", getMaxValueMultiple4([-6, -91, 1011, -100, 84, -22, 0, 1, 473]));

function operatingBinary(binaryString = "") {
  const isBinary = checkBinaryString(binaryString);
  if (!isBinary) { return false; }
  let decNumber = 0;
  if (!isFinite(parseInt(binaryString, 2))) {
    decNumber = BigInt(binaryString);
  } else {
    decNumber = parseInt(binaryString, 2);
  }
  console.log(isFinite(parseInt(binaryString, 2)));
  if (!checkPositiveInteger(decNumber)) { return false; }

  let operationsCount = 0;
  if (!isFinite(parseInt(binaryString, 2))) {
    while (decNumber > BigInt(0)) {
      operationsCount += 1;
      if (decNumber % BigInt(2) !== 0) {
        // Odd number, subtract 1 from it
        decNumber -= BigInt(1);
      } else {
        // Is even, divide it by 2
        decNumber = decNumber / BigInt(2);
      }
    }
  } else {
    while (decNumber > 0) {
      operationsCount += 1;
      if (decNumber % 2 !== 0) {
        // Odd number, subtract 1 from it
        decNumber -= 1;
      } else {
        // Is even, divide it by 2
        decNumber = decNumber / 2;
      }
    }
  }
  return operationsCount;
}

function checkBinaryString(str = "") {
  let isBinary = false;
  if (typeof str !== "string") { return false; }
  for (let i = 0; i < str.length; i++) {
    isBinary = str[i] == "0" || str[i] == "1" ? true : false;
  }
  return isBinary;
}

// let testBinary1 = "";
// for (let index = 0; index < 1000; index++) {
//   testBinary1 += "1"
// }
// console.log("operatingBinary: ", operatingBinary("1111010101111"));

function dividingIntoChains(list = []) {
  if (typeof list !== "object" || !list.length || list.length < 5) {
    return false;
  }
  const hasOnlyPositive = list ? list.reduce((prev, current) => {
    if (prev && checkPositiveInteger(current)) { return true; }
    return false;
  }, true) : false;
  if (!hasOnlyPositive) { return false; }

  // Sort the array in descending order
  list.sort((a, b) => b - a);

  // Stores minimum cost to split the array into K subsets
  let minCost = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

  }
  return minCost;
}
console.log("dividingIntoChains: ", dividingIntoChains([5, 2, 4, 6, 3, 7]));

