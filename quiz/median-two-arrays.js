/*
Given two sorted arrays nums1 and nums2 of size of m and n - return the median of two sorted arrays

Input: nums1 = [1, 3], nums2 = [3]
Output: 2
*/
{
  function findMedian(nums1, nums2) {
    let temp = [...nums1, ...nums2].sort((a, b) => a - b);
    let sortedArray = [...new Set(temp)];
    let arrayLength = sortedArray.length;

    if (arrayLength % 2 == 0) {
      let mid1 = sortedArray[Math.floor(arrayLength / 2)];
      let mid2 = sortedArray[arrayLength / 2 - 1];
      return (mid1 + mid2) / 2;
    } else {
      return sortedArray[Math.floor(arrayLength / 2)];
    }
  }

  const nums1 = [1, 2, 5, 6, 9];
  const nums2 = [3, 4, 10, 12];
  console.log(findMedian(nums1, nums2));
}
