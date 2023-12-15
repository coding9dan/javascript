{
  var longestConsecutive = function (nums) {
    const setNums = new Set(nums);
    let max = 0;

    for (let num of setNums) {
      if (setNums.has(num - 1)) {
        continue;
      }
      let curNum = num;
      let curMax = 1;

      while (setNums.has(curNum + 1)) {
        curNum++;
        curMax++;
      }
      max = Math.max(max, curMax);
    }
    return max;
  };

  let nums = [100, 300, 2, 3, 4, 1, 1, 1];
  console.log(longestConsecutive(nums));
}
