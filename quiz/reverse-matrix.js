/*
Given 2d array - arr[][] of size M x N integers where M is the number of rows and N is the number of columns. The task is to reverse every row of the given 2D array.

Input: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
       ]
Output: 3 2 1 
        6 5 4 
        9 8 7
*/

{
  const M = 3; // number of rows
  const N = 3; // number of columns

  // Function to reverse
  // the given 2D arr
  function reverseArray(arr) {
    // Traverse each row of arr
    for (i = 0; i < M; i++) {
      // Initialise start and end index
      var start = 0;
      var end = N - 1;

      // Till start < end, swap the element
      // at start and end index
      while (start < end) {
        // Swap the element
        // var temp = arr[i][start];
        // arr[i][start] = arr[i][end];
        // arr[i][end] = temp;
        [arr[i][start], arr[i][end]] = [arr[i][end], arr[i][start]];

        // Increment start and decrement
        // end for next pair of swapping
        start++;
        end--;
      }
    }

    // Print the arr after
    // reversing every row
    for (i = 0; i < M; i++) {
      for (j = 0; j < N; j++) {
        console.log(arr[i][j]);
      }
      // console.log("--");
    }
  }

  // Driver Code

  var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // Function call
  console.log(reverseArray(arr));
}
