/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

create obj to map arr index to obj keys
create arr to return result of missing nums
for loop obj making keys from nums arr i initializing to false
2nd for loop use nums[i] value to get obj key re-assign value to true
for in loop for obj key if obj value stric equals false push to arr

*/


function findDisappearedNumbers(nums) {
    const obj = {};
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        obj[i + 1] = false;
    }
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = true;
    }
    for (const key in obj) {
        if (obj[key] === false) result.push(key)
    }


    return result;
}


console.log(findDisappearedNumbers([2,1,7,6,5,3,0,0,4,2,2,4,8,4,2,5,3,7,8,8]));