{
  let results = [];
  function combineArr(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        results.push(`${array[i]} ${array[j]}`);
      }
    }
    // results.push(array.join(" "));
    return results;
  }

  //const array = ["apple", "banana", "grape", "mango"];
  const array = [1, 2, 3, 4, 5];

  console.log(combineArr(array));
}
