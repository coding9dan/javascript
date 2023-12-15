/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

ref: https://www.youtube.com/watch?v=OxbxP5_-Tcs

*/

{
  function isValid(string) {
    const hashMap = { "(": ")", "[": "]", "{": "}" };
    const stack = [];

    for (let ch of string) {
      // opening bracket then store closing match bracket
      if (hashMap[ch]) {
        stack.push(hashMap[ch]);
      }
      // closing bracket then remove closing match bracket
      else if (stack.length > 0 && stack[stack.length - 1] === ch) {
        stack.pop();
      }
      // otherwise return false
      else {
        return false;
      }
    }

    // return true if stack is empty
    return stack.length === 0;
  }

  console.log(isValid("([]"));
}
