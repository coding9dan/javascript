{
  const obj = {
    name: "이름",
    age: "나이",
  };

  for (const key in obj) {
    console.log(key); // key값 출력
    console.log(obj.name, obj.age); // value 값 출력

    console.log(`key 값 : ${key}`); // 1. key값 : 이름 // 2. key값 :age
    console.log(`value 값 : ${obj[key]}`); // 1. value 값 : 이름 // 2. value값 : 나이
  }
}

{
  const array = ["1번", "2번", "3번"];

  for (const element of array) {
    console.log(element); // 배열[0] ~ 끝까지 순차적 출력
    console.log(array); // 배열 전체 출력
  }
}
