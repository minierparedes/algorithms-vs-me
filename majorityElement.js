/*

Given an array of size n, find the majority element. The majority element is the element that 
appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

function majorityElement(arr) {
    const frequencyCounter = {};

    for (let i = 0; i < arr.length; i++) {
        frequencyCounter[arr[i]] ? frequencyCounter[arr[i]]++ : frequencyCounter[arr[i]] = 1;
    }

    for (let key in frequencyCounter) {
        console.log(frequencyCounter[key]);
    }

    return frequencyCounter;
}

console.log(majorityElement([3,2,3]));