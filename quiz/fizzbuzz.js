/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Input: n = 3
Output: ["1","2","Fizz"]

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

{
  let arr = [];
  const answer = (num) => {
    for (i = 1; i <= num; i++) {
      const divBy3 = i % 3 == 0;
      const divBy5 = i % 5 == 0;

      if (divBy3 && divBy5) {
        arr.push("FizzBuzz");
      } else if (divBy3) {
        arr.push("Fizz");
      } else if (divBy5) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }

    return arr;
  };
  console.log(answer(15));
}
