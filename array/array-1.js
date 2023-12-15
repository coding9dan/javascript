/*
// Add comment
*/

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "apple,Kiwi,banana,orange";
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // const array = [1, 2, 3, 4, 5];
  // const result = array.reverse();
  const result = function (str) {
    let newStr = str.split(" ").reverse();
    return newStr.join(" ");
  };
  console.log(result("I love you"));
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
}

function Student(name, age, enrolled, score) {
  this.name = name;
  this.age = age;
  this.enrolled = enrolled;
  this.score = score;
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((stu) => stu.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((stu) => {
    return stu.enrolled;
  });
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((stu) => stu.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some - at least one true then return true
  // every - all should true then return true
  const result = students.some((stu) => stu.score <= 90);
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce((a, c) => {
    return Math.round((a += c.score / students.length));
  }, 0);
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((stu) => {
      return stu.score;
    })
    .join(", ");
  console.log(result);
}

// Q10.5 make a new array that include grade and index start 1
{
  const result = students.map((stu, idx) => {
    return {
      ...stu,
      idx: idx + 1,
      grade: stu.score < 60 ? "fail" : "pass",
    };
  });
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((stu) => {
      return stu.score;
    })
    .sort((a, b) => a - b)
    .join(", ");
  console.log(result);
}

// Q11 will be here
/*
Given an array of integers nums and an integer target - return indices of the two numbers such that they add up to target
Input: nums = [1, 3, 5, 7, 8, 10], target = 15
Output: [3, 4]
*/


// Q12 will be here
/*
Given an array of two numbers - sum all numbers in a range
Input: [1, 3]
Output: 6
*/

// Q13 will be here
/*
Implement a bubble sort
Input: array = [2, 5, 78, 45, 34, 56, 1, 3, 11, 6, 9]
*/

// Q14 will be here
/*
Given two sorted arrays nums1 and nums2 of size of m and n - return the median of two sorted arrays
Input: nums1 = [1, 3], nums2 = [3]
Output: 2
*/