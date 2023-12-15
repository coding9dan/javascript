/*
 Bubble sort ...
*/

{
  function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length - i; j++) {
        if (array[j] < array[j - 1]) {
          // old school method
          // let temp = array[j];
          // array[j] = array[j - 1];
          // array[j - 1] = temp;

          // swap method
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
      }
    }
    return array;
  }

  const array = [2, 5, 78, 45, 34, 56, 1, 3, 11, 6, 9];

  console.log(bubbleSort(array));
}
