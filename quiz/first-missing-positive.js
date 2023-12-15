/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

Input: nums = [1,2,0]
Output: 3

Input: nums = [3,4,-1,1]
Output: 2

Input: nums = [7,8,9,11,12]
Output: 1

TODO
1. remove duplicate values
2. remove negative values
3. sort array
4. check each number is matched the index

ref: https://www.youtube.com/watch?v=mxaBwC48pOY
*/

{
  // built in method
  function firstMissingInteger(nums) {
    nums = [...new Set(nums)];
    nums = nums.filter((num) => num > 0).sort((a, b) => a - b);

    let j = 1;
    for (let i = 0; i < nums.length; i++) {
      if (j === nums[i]) {
        j++;
      } else {
        return j;
      }
    }

    return j;
  }
}

{
  // use object
  // function firstMissingInteger(nums) {
  //   const obj = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     obj[nums[i]] = 1;
  //   }
  //   for (let i = 1; i <= nums.length; i++) {
  //     if (!obj[i]) {
  //       return i;
  //     }
  //   }
  //   return nums.length + 1;
  // }
}

const nums = [1, 2, 3, 7];

console.log(firstMissingInteger(nums));
