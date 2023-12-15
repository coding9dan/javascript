/*
  recursive & memoization

  Fib
  number:    1, 2, 3, 4, 5, 6, 7,  8,  9,  10
  Fib:    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 
*/

{
  function fibMemo(num, prevValues = []) {
    if (prevValues[num] != null) {
      return prevValues[num];
    }

    let result;
    if (num <= 2) {
      result = 1;
    } else {
      result = fibMemo(num - 1, prevValues) + fibMemo(num - 2, prevValues);
    }

    prevValues[num] = result;
    return result;
  }
  // console.log(fibMemo(100));

  function fib(n) {
    if (n <= 2) {
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }
  console.log(fib(6));
}

// factorial
{
  const facMemo = (num) => {
    let cache = {};
    if (num == 1) {
      return 1;
    } else {
      if (num in cache) {
        return cache[num];
      } else {
        cache[num] = num * facMemo(num - 1);
        return cache[num];
      }
    }
  };
  console.log(facMemo(30));

  function fac(num) {
    if (num == 1) {
      return 1;
    } else {
      return num * fac(num - 1);
    }
  }

  // console.log(fac(30));
}
