/*
A higher-order function is a function that accepts functions as parameters and/or returns a function.

*/

{
  const calculate = (array, fun) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(fun(array[i]));
    }
    return result;
  };

  const addByOne = (array) => {
    return array + 1;
  };

  const multiply = (array) => {
    return array * 2;
  };

  const array = [2, 4, 6, 8];

  console.log(calculate(array, addByOne));
  console.log(calculate(array, multiply));
}
