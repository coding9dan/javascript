{
  // function mergeSort(array) {
  //   if (array.length < 2) {
  //     return array;
  //   }
  //   let pivot = Math.floor(array.length / 2);
  //   let left = array.slice(0, pivot);
  //   let right = array.slice(pivot);
  //   return merge(mergeSort(left), mergeSort(right));
  // }

  // function merge(left, right) {
  //   let result = [];
  //   while (left.length && right.length) {
  //     if (left[0] <= right[0]) {
  //       result.push(left.shift());
  //     } else {
  //       result.push(right.shift());
  //     }
  //   }

  //   // return result.concat(left, right);
  //   return [...result, ...left, ...right];
  // }

  const merge = (arr1, arr2) => {
    let result = [];
    let i = 0,
      j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    return result;
  };

  const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);

    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
  };

  console.log(mergeSort([4, 3, 6, 3, 2, 1, 11, 13, 4, 5]));
}
