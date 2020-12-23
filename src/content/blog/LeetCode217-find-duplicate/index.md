---
title: LeetCode 217 Contains duplicate
date: 2020-12-23
---

## Coding challenge

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

#### examples:


```javascript
Input: [1,2,3,1]
Output: true

Input: [1,2,3,4]
Output: false

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```
<br>

## Breakdown and Discussion of challenge


## Approach


### time complexity

### space complexity

There is use of only one object ``` match ``` to store the key/value pairs from the given array ``` nums ``` . Key maps to each array value and each of the key's value is set to true, giving it a space complexity of _***O(1)***_.

## Code

```javascript
function containsDuplicate(nums) {
    const match = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in match) return true;
        
        match[nums[i]] = true;
    }
    return false;
};
```

<br>
<br>

## Road to 170

This is the first Leetcode challenge of the 170 from the [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) by Sean Prashad