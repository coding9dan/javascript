/*
Given a signed 32-bit integer x, return x with its digits reversed.

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

ref: https://www.youtube.com/watch?v=lzixNqKWBEg
*/

{
  // built in method
  // function reverse(num) {
  //   let number = Math.abs(num);
  //   let arr = number.toString().split("");
  //   let reversed = arr.reverse().join("");
  //   if (num < 0) {
  //     return -1 * reversed;
  //   }
  //   return reversed;
  // }
  // console.log(reverse(-123));
}

{
  // from scratch
  function reverse(num) {
    let last_digit,
      reversed = 0,
      number = Math.abs(num);

    while (number != 0) {
      last_digit = number % 10;
      // console.log("last digit ", last_digit);
      reversed = reversed * 10 + last_digit;
      // console.log("reversed ", reversed);
      number = Math.floor(number / 10);
      // console.log("number ", number);
    }

    if (num < 0) {
      return -1 * reversed;
    }
    return reversed;
  }
  console.log(reverse(-123));
}
