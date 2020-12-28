/*
448. Find All Numbers Disappeared in an Array
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]


*/


function findDisappearedNumbers(nums) {
    const match = {};
    const result = [];

    for (let i = 1; i < nums.length; i++) {
        match[i + 1] = false;
    }
    for (let i = 0; i < nums.length; i++) {
        match[nums[i]] = true;
    }
    for (const i in match) {
        if (match[i] === false) result.push(i)
    }

    return result;

}


console.log(findDisappearedNumbers([2,1,7,6,5,3,0,0,4,2,2,4,8,4,2,5,3,7,8,8]));