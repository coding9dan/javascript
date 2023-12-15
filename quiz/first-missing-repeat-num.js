/*

Find missing and repeating number

Ouput: [repeat number, missing positive]

*/

{
  function missing(nums) {
    nums.filter((num) => num > 0).sort((a, b) => a - b);

    const _length = nums.length;
    let result = [];

    // find repeat number
    for (let i = 0; i < _length; i++) {
      for (let j = i + 1; j < _length; j++) {
        if (nums[i] === nums[j]) {
          result.push(nums[j]);
        }
      }
    }

    // find missing number
    let nextPositive = 1;
    for (let k = 0; k < _length; k++) {
      if (nextPositive === nums[k]) {
        nextPositive++;
      }
    }

    result.push(nextPositive);

    return result;
  }

  console.log(missing([1, 2, 2, 3, 3, 4, 5, 9]));
}
