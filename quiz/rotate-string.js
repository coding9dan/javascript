{
  const rotateString = (str, goal) => {
    if (str.length !== goal.length) return false;
    if (str.length === 0 && goal.length === 0) return true;

    const allString = str.concat(str);

    // if (allString.indexOf(goal) >= 0) return true;
    // return false;

    return allString.includes(goal);
  };

  const a = "abcde";
  const b = "cdeab";

  console.log(rotateString(a, b));
}
