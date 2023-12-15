/*
Given an unsorted array - calculate median

Input: [2, 5, 78, 45, 34, 56, 7, 9, 11]
Output: 11
*/

{
  function median(array) {
    const arr = [...array];
    const sortedArray = bubbleSort(arr);
    let result = 0;
    if (sortedArray.length % 2 === 0) {
      let mid1 = sortedArray[sortedArray.length / 2];
      let mid2 = sortedArray[sortedArray.length / 2 - 1];
      result = (mid1 + mid2) / 2;
    } else {
      result = sortedArray[Math.floor(sortedArray.length / 2)];
    }

    return result;
  }

  function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[j] < array[j - 1]) {
          let temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        }
      }
    }
    return array;
  }

  const arr = [2, 5, 78, 45, 34, 56, 7, 9, 11];
  console.log(median(arr));
}
