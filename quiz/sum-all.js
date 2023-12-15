/*
Given an array of two numbers - sum all numbers in a range

Input: [1, 3]
Output: 6
*/

{
  function sumAll(arr) {
    let min, max;
    if (arr[0] > arr[1]) {
      max = arr[0];
      min = arr[1];
    } else {
      max = arr[1];
      min = arr[0];
    }

    // const min = arr[0] < arr[1] ? arr[0] : arr[1];
    // const max = arr[0] > arr[1] ? arr[0] : arr[1];

    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumAll([1, 3]));
}
