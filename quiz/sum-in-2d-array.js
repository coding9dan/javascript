{
  const numbers = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 0, 0],
  ];

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    // for (let j = 0; j < numbers[i].length; j++) {
    //   const number = numbers[i][j];
    //   if (number === 1) {
    //     sum++;
    //   }
    // }
    numbers[i].forEach((el) => {
      sum = sum + el;
    });
  }

  console.log(sum);
}
