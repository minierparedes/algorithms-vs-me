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

Given an unsorted array of integer values, we need to **check** all the numbers and see which number is the **missing** from the given range. For challenges that require **finding** something within the array, against some factor, in this case being the array's range of numbers, I like to immediately think of using an object to map the array's values to the object. This method allows for the object to have all the values and then I can check against the array to see what is missing, compare against, check for duplicates ect..  


## Approach

Fitst step is to create an object `match` and an array `result`. The object for us to map our array's index to by means of our first for loop. We need to make sure that for the object's keys we use the loop's `i` variable and `+ 1` to it. Doing so allows the `match` to start at the correct value and end at the correct value. For every key that is set to the array's value, its value is initialized to false. The array `result` will be used to push matching keys to. 

We create a second loop that will set each property using the array's values to `true` if the key has been set from the first loop.

For the last step, a for in loop will iterate through the object using the key to check with an if statement, if there are any key's whos values is equal to `false`. If equal to `false` then push set key to the `result` array. The function `return` `result` array.

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

**LC: 3**

This is the Third Leetcode challenge of the 170 challenges from the [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) by Sean Prashad