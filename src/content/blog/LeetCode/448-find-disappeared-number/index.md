---
title: LeetCode 448 Find All Numbers Disappeared in an Array
date: 2020-12-25
---

![magnifying glass, find all disappeared numbers](markus-winkler-afW1hht0NSs-unsplash.jpg)

## Coding challenge

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.


#### examples:


```javascript
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

```
<br>

## Breakdown and Discussion of challenge

Given an unsorted array of integer values, we need to **check** all the numbers and see which number is the **missing** from the given range. For challenges that require **finding** something within the array, against some factor, in this case being the array's range of numbers, I like to immediately think of using an object to map the array's values to the object. This method allows for the object to have all the values and then I can check against the array to see what is missing, compare, check for duplicates ect..  


## Approach

Within the function we create an object `missingNum` and an array `result`. Use a for loop to iterate through the array mapping each array's index to the object keys and setting each key's value to false. Create a second loop to set to true each object key's that is in the object using the array's values. A last for loop is create, this time a for in loop, grabbing each key from the object and using an `if` statement asking: `missingNum[key] === false` take the `result` array and push the `key` with false value to it. Now the function will `return result[0]` the fist element in the array.

#### time complexity

 _**O(n)**_.

#### space complexity

_***O(n)***_.

## Code

```javascript
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

};
```

<br>
<br>

## Road to 170

**LC: 2**

This is the second Leetcode challenge of the 170 challenges from the [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) by Sean Prashad