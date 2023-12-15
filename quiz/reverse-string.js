/*
Given an array or string - reversing a string or array

*/

{
  const reverseStr = (str) => {
    return str.split("").reverse().join("");
  };

  const string = "I am Michael";
  console.log(reverseStr(string));
}

{
  const reverseStr = (str) => {
    let newStr = "";
    for (i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  };

  const string = "I am Michael";

  console.log(reverseStr(string));
}
