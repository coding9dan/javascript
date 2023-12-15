{
  function sort(array, start = 0, end = array.length - 1) {
    if (start < end) {
      let boundary = partition(array, start, end);

      sort(array, start, boundary - 1);
      sort(array, boundary + 1, end);
    }

    return array;
  }

  function partition(array, start, end) {
    let boundary = start - 1;

    while (start <= end) {
      if (array[start] < array[end]) {
        boundary++;
        [array[boundary], array[start]] = [array[start], array[boundary]];
        start++;
      } else {
        start++;
      }
    }

    boundary++;
    [array[boundary], array[end]] = [array[end], array[boundary]];

    return boundary;
  }

  const array = [2, 5, 78, 45, 34, 56, 7, 9, 11];

  console.log(sort(array));
}
