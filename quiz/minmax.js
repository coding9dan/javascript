/*
Given an unsorted array - find min, max

Input: [3, 2, 1, 67, 55, 5, 70, 45, 6]
Output: 11
*/

{
  // built in method
  // const minmax = (arr) => {
  //   let min = Math.min(...arr);
  //   let max = Math.max(...arr);
  //   let result = [min, max];

  //   return result;
  // };
  const minmax = (arr) => {
    return arr.reduce((acc, val) => {
      acc[0] = acc[0] === undefined || val < acc[0] ? val : acc[0];
      acc[1] = acc[1] === undefined || val > acc[1] ? val : acc[1];
      return acc;
    }, []);
  };

  const arr = [3, 2, 1, 67, 55, 5, 70, 45, 69];
  console.log(minmax(arr));
}

{
  // from scratch
  const minmax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let result;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
    return (result = [min, max]);
  };
  const arr = [3, 2, 1, 67, 55, 5, 70, 45, 69];
  console.log(minmax(arr));
}
