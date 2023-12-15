{
  // const sum = (a) => (b) => b ? sum(a + b) : a;
  // const sum = (a) => {
  //   return (b) => {
  //     if (b) {
  //       return sum(a + b);
  //     }
  //     return a;
  //   };
  // };
  // console.log(sum(2)(8)(1)());
}

{
  // function outest() {
  //   let c = 20;
  //   function outer(b) {
  //     function inner() {
  //       console.log(a, b, c);
  //     }
  //     let a = 10;
  //     return inner;
  //   }
  //   return outer;
  // }
  // let ok = outest()("Hello");
  // ok();
}

{
  // function delay(sec) {
  //   return new Promise((resolve) => setTimeout(resolve, sec));
  // }
  // async function getApple() {
  //   await delay(1000);
  //   return "Apple";
  // }
  // async function getBanana() {
  //   await delay(1500);
  //   return "Banana";
  // }
  // async function getThem() {
  //   const apple = await getApple();
  //   const banana = await getBanana();
  //   return `${apple} - ${banana}`;
  // }
  // function getThemAll() {
  //   return Promise.all([getApple(), getBanana()]).then((item) =>
  //     item.join(" - ")
  //   );
  // }
  // getThem().then(console.log);
  // getThemAll().then(console.log);
}

{
  // const prefix = (names, queries) =>
  //   queries.map(
  //     // map over array
  //     (query) =>
  //       names.filter((name) => name.startsWith(query) && name != query).length // count occurrence and check if strings are not equal to avoid counting 'steve' as prefixed with 'steve'
  //   );
  // const names = [
  //   "steve",
  //   "stevens",
  //   "danny",
  //   "steves",
  //   "dan",
  //   "john",
  //   "johnny",
  //   "joe",
  //   "alex",
  //   "alexander",
  // ];
  // const queries = ["steve", "alex", "joe", "john", "dan"];
  // console.log(prefix(names, queries));
}

{
  // function User(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }
  // const a = new User("mike", 40);
  // const b = new User("jen", 30);
  // User.prototype.skill = "react";
  // console.log(a);
  // console.log(b.skill);
}

{
  // const nums = [1, 3, 5, 7, 9];
  // nums.forEach(theFunction);
  // function theFunction(item) {
  //   console.log(item * 2);
  // }
}

{
  // function print(a, b, ...rest) {
  //   console.log(a);
  //   console.log(b);
  //   console.log(rest.map((n) => n * 2));
  // }
  // print(1, 2, 3, 4, 5);
}

{
  // for (let i = 0; i < 10; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, i * 100);
  // }
}

{
  const students = [
    { name: "A", age: 29, enrolled: true, score: 45 },
    { name: "B", age: 28, enrolled: true, score: 75 },
    { name: "C", age: 31, enrolled: true, score: 70 },
    { name: "D", age: 30, enrolled: true, score: 75 },
    { name: "E", age: 26, enrolled: true, score: 45 },
  ];

  let result;
  // result = students.filter(stu => stu.age >= 30);
  // result = students.map((stu) => stu.score * 2);
  // result = students.find((stu) => stu.name.toLowerCase() === "c");
  // result = students.some((stu) => stu.score <= 45);
  // result = students.reduce((acc, cur) => {
  //   return Math.round((acc += cur.score / students.length));
  // }, 0);
  // result = students.map((stu, idx) => {
  //   return {
  //     ...stu,
  //     id: Math.floor(Math.random() * 99 + idx),
  //     grade: stu.score > 65 ? "pass" : "fail",
  //   };
  // });

  result = students
    .filter((stu) => stu.score >= 70)
    .reduce((total, cur) => total + cur.score, 0);

  // result = students.reduce((groupedPeople, person) => {
  //   const score = person.score;
  //   if (groupedPeople[score] == null) groupedPeople[score] = [];
  //   groupedPeople[score].push(person);
  //   return groupedPeople;
  // }, {});

  // console.log(result);
}

{
  // function* iterable() {
  //   yield 1;
  //   yield 2;
  //   yield 3;
  //   yield 4;
  // }
  // for (let val of iterable()) {
  //   console.log(val);
  // }
}

{
  // function printThis(num) {
  //   setTimeout(() => {
  //     console.log(`After 1 sec... ${num}`);
  //   }, 1000);
  // }
  // function* obj() {
  //   yield printThis(1);
  //   yield printThis(2);
  //   yield printThis(3);
  //   yield printThis(4);
  //   yield printThis(5);
  // }
  // let it = obj();
  // it.next();
  // it.next();
  // it.next();
  // it.next();
  // it.next();
}

{
  // const cities = [
  //   { "San Antonio": 3000 },
  //   { Austin: 5000 },
  //   { Houston: 3000 },
  //   { "El Paso": 2000 },
  //   { Austin: 5000 },
  // ];
  // let total = 0;
  // cities.forEach((city) => {
  //   for (let key in city) {
  //     total += city[key];
  //   }
  // });
  // total = total - 5000;
  // console.log(total);
}

{
  // const sum = (...many) => {
  //   return many.reduce((a, c) => a + c);
  // };
  // console.log(sum(1, 2, 3, 4, 5, 6));
}

{
  // const obj2 = {
  //   color: "red",
  //   height: 1.7,
  //   width: 5,
  //   [Symbol.iterator]: function* () {
  //     yield this.color;
  //     yield this.height;
  //     yield this.width;
  //   },
  // };
  // for (let prop of obj2) {
  //   console.log(prop);
  // }
}

{
  // const a = [1, 4, 9, 16];
  // const b = ["a", "b", "c", "d"];
  // // output: [[1, "a"], ["b", 4], [9, "c"], ["d", 16]]
  // const c = a.map((v, i) => {
  //   if (i % 2 == 0) {
  //     return [v, b[i]];
  //   } else {
  //     return [b[i], v];
  //   }
  // });
  // console.log(c);
}

{
  // function findFirstrepeatdChar(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     let temp = str.charAt(i);
  //     if (str.indexOf(temp) !== str.lastIndexOf(temp)) {
  //       return temp;
  //     }
  //   }
  //   return "";
  // }
  // const str = "green apple";
  // console.log(findFirstrepeatdChar(str));
}

{
  // const guestArr = [
  //   { name: "A", city: "Seoul" },
  //   { name: "B", city: "Jeju" },
  //   { name: "C", city: "Seoul" },
  //   { name: "D", city: "Seoul" },
  //   { name: "E", city: "Busan" },
  //   { name: "F", city: "Busan" },
  //   { name: "G", city: "Jeju" },
  //   { name: "H", city: "Daegu" },
  //   { name: "I", city: "Seoul" },
  // ];
  // let guestObj = {};
  // guestArr.forEach((item) => {
  //   if (!guestObj[item.city]) {
  //     guestObj[item.city] = [];
  //   }
  //   guestObj[item.city].push(item);
  // });
  // console.log(guestObj);
  // let guestMap = new Map();
  // guestArr.forEach((item) => {
  //   if (!guestMap.has(item.city)) {
  //     guestMap.set(item.city, []);
  //   }
  //   guestMap.get(item.city).push(item);
  // });
  // console.log(guestMap);
}

{
  // const checkEven = (num) => {
  //   return num % 2 === 0 ? "Even" : "Odd";
  // };
  // console.log(checkEven(6));
}

{
  // function countWord(str, w) {
  //   return str.split(w).length - 1;
  // }
  // const str = "This is a word";
  // console.log(countWord(str, "word"));
}

{
  // const arrayFilled = Array(10)
  //   .fill()
  //   .map((v, i) => i + 1);
  // console.log(arrayFilled);
}

{
  // const a = ["a", "b", "c", "b"];
  // const b = [...new Set(a)];
  // console.log(b);
}

{
  // class Node {
  //   constructor(val) {
  //     this.val = val;
  //     this.next = null;
  //   }
  // }
  // const a = new Node("A");
  // const b = new Node("B");
  // const c = new Node("C");
  // const d = new Node("D");
  // a.next = b;
  // b.next = c;
  // c.next = d;
  // // const printLinkedList = (head) => {
  // //   let current = head;
  // //   while (current !== null) {
  // //     console.log(current.val);
  // //     current = current.next;
  // //   }
  // // };
  // const printLinkedList = (head) => {
  //   if (head === null) return;
  //   console.log(head.val);
  //   printLinkedList(head.next);
  // };
  // printLinkedList(a);
}

{
  // console.log(foo); // ReferenceError: foo is not defined
  // foo = 1;
  // console.log(foo); // undefined
  // var foo = 2;
  // var foo;
  // foo = 3;
  // console.log(foo); // 3
}

{
  const privateCounter = () => {
    let count = 0;

    // closure
    return {
      increment: (val = 1) => {
        count += val;
      },
      getValue: () => {
        return count;
      },
    };
  };

  const counter = privateCounter();
  console.log(counter.getValue());
  counter.increment();
  console.log(counter.getValue());
}
