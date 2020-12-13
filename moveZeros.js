//two pointers
//check current place for i swap with j
//return same array

function moveZeros(nums) {
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[pointer];
            nums[pointer] = nums[i];
            nums[i] = temp;

            pointer++;
        };
    }


    return nums;
}


console.log(moveZeros([1, 0, 12, 0, 0, 3, 4, 5, 3, 2, 5, 45, 0, 6,87,]));


// Input: [0,0,2]
// Output: [1,3,12,0,0]