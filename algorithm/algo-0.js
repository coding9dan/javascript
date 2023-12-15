// iterate from 0 to 10 and print only even numbers
{
  let result = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  console.log(result);
}

// remove duplicate values in array
{
  const array = ["apple", "banana", "grape", "orange", "banana"];
  // const result = new Set(array);
  const result = array.reduce((a, c) => {
    if (a.indexOf(c) < 0) {
      a.push(c);
    }
    return a;
  }, []);
  console.log(result);
}

// find the highest number in array
{
  const array = ["3", "10", "9", "12", "5", "11"];
  const result = array.reduce((a, c) => {
    return Math.max(a, c);
  }, 0);
  console.log(result);
}

// factorial
{
  const factorial = function (n) {
    if (n == 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  console.log(factorial(5));
}

// check digit - passing ID '55555' the sum of all digits is 25. Because this is not a single digit number
// so 2 and 5 would be added and the result 7 would be the check digit
{
  const checkDigit = function (id) {
    let num = id.toString().split("");
    let sum = num.reduce((a, c) => {
      return (a += Number(c));
    }, 0);

    return sum > 10 ? checkDigit(sum) : sum;
  };
  console.log(checkDigit("55555"));
}

// most frequent item of an array
{
  // input : ["apple", "banana", "grape", "orange", "apple"];
  // input : ["1", "2", "3", "4", "5"];
  // input : ["1", "2", "2", "4", "5"];
  const getMostOne = (array) => {
    let maxCount = 0,
      mf = "",
      len = array.length;
    for (let i = 0; i < len; i++) {
      let count = 0;
      for (let j = 0; j < len; j++) {
        if (array[i] == array[j]) {
          count++;
        }

        if (maxCount < count) {
          maxCount = count;
          mf = array[i];
        }
      }
    }
    return mf;
  };
  console.log(getMostOne(["apple", "banana", "grape", "orange", "apple"]));
}
{
  var a = "abbbccccddefffg";

  const counter = (str) => {
    var ch = {};
    for (var i = 0; i < str.length; i++) {
      if (str[i] in ch) {
        ch[str[i]] += 1;
      } else {
        ch[str[i]] = 1;
      }
    }

    let highest_num = 0;
    for (var key in ch) {
      if (ch[key] > highest_num) {
        highest_num = ch[key];
      }
    }
    let res = "";
    for (let k in ch) {
      if (ch[k] === highest_num) {
        res += k;
      }
    }
    return res;
  };

  console.log(counter(a));
}

// bubble sort
{
  // regular
  const bubbleSort = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return console.log(array.join());
  };
  bubbleSort([14, 33, 27, 35, 10, 56, 101]);
}
{
  // better
  const bubbleSort = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return console.log(array.join());
  };
  bubbleSort([14, 33, 27, 35, 10, 56, 101]);
}

// Find out sum of numbers is equal to the lagest number
{
  const arraySum = function (array) {
    let nums = array.sort((a, b) => a - b);
    let lastNum = nums.pop();
    let result = nums.reduce((a, c) => {
      return (a += c);
    }, 0);
    console.log(result == lastNum ? "true" : "false");
  };
  // arraySum([1, 2, 4, 6, 13]); // return true 1+2+4+6=13
  arraySum([1, 2, 4, 34, 22]); // return false 1+2+4+22!=34
}

// Find out mean from array
{
  const findMean = function (array) {
    const result = array.reduce((a, c) => {
      return (a += c / array.length);
    }, 0);
    return result;
  };
  console.log(findMean([1, 2, 3]));
}

// Find out median from array
{
  const findMedian = function (array) {
    let newArr = array.sort((a, b) => a - b);
    let half = Math.floor(array.length / 2);
    return (media =
      array.length % 2 == 0
        ? (newArr[half] + newArr[half - 1]) / 2
        : newArr[half]);
  };
  console.log(findMedian([1, 2, 3, 4, 5, 6]));
}

// Find greatest common diviser of two numbers
{
  let gcd = function (a, b) {
    let smaller = Math.min(a, b);
    let larger = Math.max(a, b);

    if (larger % smaller == 0) {
      return smaller;
    } else {
      return gcd(smaller, larger % smaller);
    }
  };
  console.log("gcd - ", gcd(20, 40));
}

// Find the position where last item is delivered
{
  // n - size of circle
  // m - number of items
  // k - initial position
  const lastPosition = function (n, m, k) {
    // n - k + 1 is number of positions
    // before we reach beginning of circle
    // If m is less than this value, then
    // we can simply return (m-1)th position
    if (m <= n - k + 1) {
      return m + k - 1;
    } else {
      // Let us compute remaining items before we reach beginning.
      m = m - (n - k + 1);
    }

    // We compute m % n to skip all complete
    // rounds. If we reach end, we return n
    // else we return m % n
    return m % n == 0 ? n : m % n;
  };
  console.log(lastPosition(3, 7, 1));
}

// parenthesis matching problem
{
  let isMatching = (str) => {
    let stack = [];
    let open = {
      "{": "}",
      "[": "]",
      "(": ")",
    };
    let closed = {
      "}": true,
      "]": true,
      ")": true,
    };
    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (open[char]) {
        stack.push(char);
      } else if (closed[char]) {
        if (open[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.length == 0;
  };
  console.log(isMatching("({})"));
  console.log(isMatching("({(()))}}"));
}

// binary search
{
  const search = function (array, target) {
    let sortedNums = array.sort((a, b) => a - b);
    let high = array.length,
      low = 0,
      mid = 0;
    while (low < high) {
      mid = Math.floor(high + low / 2);
      if (sortedNums[mid] == target) {
        return sortedNums[mid];
      } else if (target > sortedNums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  };
  console.log(search([1, 0, 3, 4, 8, 9], 9));
}

// Compare two software versions and return 0,-1,1 accordingly
{
  // Return 1 if a > b
  // Return -1 if a < b
  // Return 0 if a == b
  function compare(a, b) {
    if (a === b) {
      return 0;
    }

    var a_version = a.split(".");
    var b_version = b.split(".");

    var len = Math.min(a_version.length, b_version.length);

    // loop while the components are equal
    for (var i = 0; i < len; i++) {
      // A bigger than B
      if (parseInt(a_version[i]) > parseInt(b_version[i])) {
        return 1;
      }

      // B bigger than A
      if (parseInt(a_version[i]) < parseInt(b_version[i])) {
        return -1;
      }
    }

    // If one's a prefix of the other, the longer one is greater.
    if (a_version.length > b_version.length) {
      return 1;
    }

    if (a_version.length < b_version.length) {
      return -1;
    }

    // Otherwise they are the same.
    return 0;
  }

  console.log(compare("1", "2"));
  console.log(compare("2", "1"));
  console.log(compare("1.0", "1.0"));
  console.log(compare("2.0", "1.0"));
  console.log(compare("1.0", "2.0"));
  console.log(compare("1.0.1", "1.0"));
}

// write unit test
{
  const add = function (a, b) {
    return a + b;
  };

  const unitTest = {};
  unitTest.testAdd = function (method) {
    let num1 = 3;
    let num2 = 4;
    let result = num1 + num2;

    if (method(num1, num2) === result) {
      return true;
    } else {
      return false;
    }
  };
  console.log(add(3, 4));
  console.log(unitTest.testAdd(add));
}

// invert binary tree
{
  var invertTree = function (root) {
    if (root === null) return root;

    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
  };
}
