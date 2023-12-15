{
  /*
  Suppose we have some input data describing a graph of relationships between parents and children over multiple families and generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

  For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

  1   2    4           30
  \ /   /  \           \ 
    3   5    9  15      16
    \ / \    \ / 
      6   7   12  


  Sample input/output (pseudodata):

  pairs = [
      (5, 6), (1, 3), (2, 3), (3, 6), (15, 12),
      (5, 7), (4, 5), (4, 9), (9, 12), (30, 16)
  ]


  Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.


  Output may be in any order:

  findNodesWithZeroAndOneParents(pairs) => [
    [1, 2, 4, 15, 30],   // Individuals with zero parents
    [5, 7, 9, 16]        // Individuals with exactly one parent
  ]

  Complexity Analysis variables:

  n: number of pairs in the input
  */

  function findNodesWithZeroAndOneParents(pairs) {
    const [parents, childs] = pairs.reduce(
      ([parents, childs], [first, second]) => [
        // Build two arrays, one for fisrt column and another for the second, basically a map function
        [...new Set(parents), first],
        [...childs.sort((a, b) => a - b), second],
      ],
      [[], []]
    );

    // Filter all that does not appear in the second column
    const zero = parents.filter((i) => !childs.includes(i));

    // Filter the ones that appear just once
    const one = childs.filter(
      (i) => childs.indexOf(i) === childs.lastIndexOf(i)
    );

    return [zero, one];
  }

  const pairs = [
    [5, 6],
    [1, 3],
    [2, 3],
    [3, 6],
    [15, 12],
    [5, 7],
    [4, 5],
    [4, 9],
    [9, 12],
    [30, 16],
  ];

  console.log(findNodesWithZeroAndOneParents(pairs));
}
