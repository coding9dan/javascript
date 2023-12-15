/*
Given a sorted integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index otherwise return -1

Input: nums = [-1, 0, 1, 2, 3, 4], target = 2
Output: 3

ref: https://www.youtube.com/watch?v=7lGiPItOVCM
*/

{
  // function search(nums, target) {
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) {
  //       return i;
  //     }
  //   }

  //   return -1;
  // }

  function binary(nums, target) {
    let lower = 0; // always the staring index in an array
    let upper = nums.length - 1; // get the last element index an array

    while (lower <= upper) {
      const mid = lower + Math.floor((upper - lower) / 2);

      if (target === nums[mid]) {
        return mid;
      }

      if (target < nums[mid]) {
        // shift focus to the elements on the left side of the middle or it's not there
        // so reset upper limit
        upper = mid - 1; // shift to the left
      } else {
        // the elements either on the right side of the middle or it's not there
        // need to reset lower limit
        lower = mid + 1; // shift to right
      }
    }

    return -1;
  }

  const nums = [-1, 0, 1, 2, 3, 4];
  console.log(binary(nums, 1));
}
