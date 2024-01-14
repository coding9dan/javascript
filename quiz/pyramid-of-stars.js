const pyramid = (row) => {
  if (row === 0) return;
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let k = 1; k <= row - i; k++) {
      star = star + " ";
    }
    for (let j = 1; j <= i; j++) {
      star = star + "* ";
    }
    console.log(star);
  }
};

pyramid(5);
