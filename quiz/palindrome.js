/*
Given a string - find a string is a palindrome or not

Input: madam
Output: Yes

ref: https://www.youtube.com/watch?v=_KE_yCKBqUA

*/

{
  var isPalindrome = function (s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z]/g, "");
    const len = str.length;

    if (len === 0) {
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  const s = "A man, a plan, a canal: Panama";

  console.log(isPalindrome(s));
}
