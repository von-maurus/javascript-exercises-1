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
  // Check if its a Number and Integer
  if (!number && !isNaN(number) && !Number.isInteger(number) && number > 0) {
    console.error("Invalid number. Value must be a positive integer number.", number);
    return false;
  }

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
console.log(cyclicRotation([-4, 6, 0, 0, 0, -2, 10], 15));
// console.log("Function: ", cyclicRotation([1, 3, 4], 2));