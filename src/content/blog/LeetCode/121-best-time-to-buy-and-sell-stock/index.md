---
title: LeetCode 121 Best time to buy and sell stock
date: 2020-12-31
---

![bullish market statue](hans-eiskonen-wn57cSQ7VzI-unsplash.jpg)

## Coding challenge

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one 
share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

#### examples:


```javascript
Input: [7,1,5,3,6,4]
Output: 5
Explanation: 
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. 
Not 7-1 = 6, as selling price needs to be larger than buying price.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

```
<br>

## Breakdown and Discussion of challenge

Given an unsorted array of integer values, all having a duplicate, we need to **check** all the numbers and see which number is the **single**, **unique**, number that only appears once. Whenever there is a challenge that requires **finding** something within the array, against some factor, in this case getting a single unique number from all the ones with their duplicates, I like to immediately think of using an object to map the array's values to the object. I wanted to try implementing a two pointer approach, but I was not successful in getting the pattern to work with numbers in the middle or near the end of the array, e.g. `[2, 1, 2, 4, 1]`. I believe that given enough time, or help, I will be able to get to the solution. 

Using an object, allowing it to have all the array values as keys and I then check the object to see which of its key values have a higher value than 1, returning that unique key.


## Approach

Create an object `uniq` within the function to map all the array values to a key, setting each value to 1. Use a for loop to iterate through all the array values. In the for loop we use an if statement to ask: if the object `uniq` when called using the array's values `uniq[nums[i]]` as its key property, is available then increment++ its value by one, otherwise set its value to one. A second loop is set, this time a for in loop, to check if object `uniq` has any key property whos value is stricly equals to 1? if so then return the key's value else return -1.

#### time complexity

 _**O(n)**_.

#### space complexity

_***O(n)***_.

## Code

```javascript
function maxProfit(prices) {
    let maxPrice = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }else {
            maxPrice = Math.max(maxPrice, prices[i]- minPrice)
        }
    }
    return maxPrice;
};
```

<br>
<br>

## Road to 170

**LC: 6**

This is the 6th Leetcode challenge of the 170 challenges from the [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/) by Sean Prashad