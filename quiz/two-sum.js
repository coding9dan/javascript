/*
Given an array of integers nums and an integer target - return indices of the two numbers such that they add up to target

Input: nums = [1, 3, 5, 7, 8, 10], target = 15
Output: [3, 4]

https://www.youtube.com/watch?v=_CoCO62fn_E&t=580s
*/

{
  function twosum(nums, target) {
    const comp = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (comp[nums[i]]) {
        return [comp[nums[i]], i];
      }

      comp[target - nums[i]] = i;
    }

    return [];
  }

  const nums = [1, 3, 5, 7, 8, 10];
  console.log(twosum(nums, 8));
}
