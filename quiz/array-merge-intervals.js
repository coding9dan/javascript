/*
ref: https://www.youtube.com/watch?v=LvygwImtvEw
*/
{
  function mergeInterval(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    // console.log(intervals.sort((a, b) => a[0] - b[0]));
    const result = [intervals[0]];

    for (let interval of intervals) {
      const end1 = result[result.length - 1][1];
      const start2 = interval[0];
      const end2 = interval[1];

      if (end1 >= start2) {
        result[result.length - 1][1] = Math.max(end1, end2);
      } else {
        result.push(interval);
      }
    }
    return result;
  }

  console.log(
    mergeInterval([
      [1, 3],
      [8, 10],
      [15, 18],
      [2, 6],
    ])
  );
}
