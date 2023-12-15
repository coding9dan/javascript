// most frequent item of an array
// ref: https://www.youtube.com/watch?v=oyBXiJgU--U

{
  const getMostOneByFor = (str) => {
    let frequentChar = {};
    let lcStr = str.toLowerCase();

    for (let char of lcStr) {
      frequentChar[char] = frequentChar[char] + 1 || 1;
    }

    let maxCount = 0,
      maxChar = "";
    for (let key in frequentChar) {
      // console.log(frequentChar[key]);
      if (frequentChar[key] > maxCount) {
        maxCount = frequentChar[key];
        maxChar = key;
      } else if (frequentChar[key] == maxCount) {
        maxChar += key;
      }
    }
    return [frequentChar, maxChar];
  };

  // const getMostOneByReduce = (str) => {
  //   let maxCount = 0,
  //     maxChar = "";
  //   const newStr = str.split("").reduce((accChar, curChar) => {
  //     if (accChar[curChar]) {
  //       accChar[curChar]++;
  //     } else {
  //       accChar[curChar] = 1;
  //     }

  //     if (accChar[curChar] > maxCount) {
  //       maxCount = accChar[curChar];
  //       maxChar = curChar;
  //     } else if (accChar[curChar] == maxCount) {
  //       maxChar += curChar;
  //     }

  //     return accChar;
  //   }, {});

  //   return [newStr, maxChar];
  // };

  const str = "abbbcccddefffg";

  console.log(getMostOneByFor(str));
  // console.log(getMostOneByReduce(str));
}
