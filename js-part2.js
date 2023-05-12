/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

A: Using ^ (XOR) operator will check that the pair of values compared are not the same, cancel them out.
The time complexity is O(n) lineal because of using one loop. and the space or storage is O(1) constant for 1 single var.
 * @param {*} nums 
 * @returns 
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};

// console.log("rotate array: ", rotate([1,2,3,4,5,6,7], 3))

function intersectTwoArrays(arr1, arr2) {
    const map = {};
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = 1;
        } else {
            map[arr1[i]]++;

        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]] > 0) {
            result.push(arr2[i]);
            map[arr2[i]]--;
        }

    }
    return result;
}

// console.log("intersectTwoArrays: ", intersectTwoArrays([1, 2, 1, 6], [6, 1, 1, 1]))

function twoSum(nums, target) {
    const hashMap = {};
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (typeof hashMap[difference] !== "undefined" && results.indexOf(i) === -1 && results.indexOf(hashMap[difference]) === -1) {
            results.push(i, hashMap[difference])
        }
        hashMap[nums[i]] = i;
        // for (let j = i + 1; j < nums.length; j++) {
        //     if (nums[i] + nums[j] === target && results.indexOf(i) === -1 && results.indexOf(j) === -1) {
        //         results.push(i, j)
        //     }
        // }
    }
    return results;
}
// console.log("twoSum: ", twoSum([1, 2, 7, 1], 8)); // [0, 2] o [2, 3]
// console.log("twoSum: ", twoSum([2, 7, 10, 1], 11)); // [2, 3]

function reverseString(str) {
    return str.reverse();
}
function reverseString2(s) {
    let left = 0; // initialize left pointer
    let right = s.length - 1; // initialize right pointer

    // iterate while left pointer is less than right pointer
    while (left < right) {
        // swap values at left and right pointers
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        // move left pointer to the right
        left++;
        // move right pointer to the left
        right--;
    }
    return s; // return reversed string
}

// console.log("reverseString", reverseString(["h", "a", "l", "o"]))
// console.log("reverseString", reverseString(["h","e","l","l","o"]))
// console.log("reverseString2", reverseString2(["h", "a", "l", "o"]))
// console.log("reverseString2", reverseString2(["h", "e", "l", "l", "o"]))