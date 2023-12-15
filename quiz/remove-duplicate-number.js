/*
Given an array - remove duplicate values

*/

{
  // built in Set method
  const removeDuplicate = (array) => {
    let newArr = [...new Set(array)];
    return newArr;
  };

  let array = [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 9];
  console.log(removeDuplicate(array));
}

{
  // from scratch
  const removeDuplicate = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (newArr.indexOf(array[i]) < 0) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  };

  let array = [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 9];
  console.log(removeDuplicate(array));
}
