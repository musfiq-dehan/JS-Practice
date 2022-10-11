//Given an integer array nums, return the most frequent even element. If there is a tie, return the smallest one. If there is no such element, return -1.

// Example 1:

// Input: nums = [1,2,2,3,3,3,4]
// Output: 2
// Explanation: 2 occurs 3 times. 4 occurs 1 time (which is odd). So 2 is the most frequent even number.

// Solution:
// 1. Create a map to store the frequency of each element
// 2. Create a variable to store the most frequent even element
// 3. Create a variable to store the frequency of the most frequent even element
// 4. Loop through the map
// 5. If the current element is even and its frequency is greater than the frequency of the most frequent even element, update the most frequent even element and its frequency
// 6. Return the most frequent even element

// Time Complexity: O(n)
// Space Complexity: O(n)

// Language: javascript
// Path: leetcode.js
// Compare this snippet from ArrayOperations/move.js:

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const map = new Map();
    let mostFrequentEvenElement = -1;
    let mostFrequentEvenElementFrequency = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        if (key % 2 === 0 && value < mostFrequentEvenElementFrequency) {
            mostFrequentEvenElement = key;
            mostFrequentEvenElementFrequency = value;
        }
    }

    return mostFrequentEvenElement;

};

