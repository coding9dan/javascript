// {
//   // ex 1
//   let x = 1; // global scope

//   const parentFunc = () => {
//     let my = 2; // local scope
//     console.log(x);
//     console.log(my);

//     const childFunc = () => {
//       console.log((x += 5));
//       console.log((my += 1));
//     };

//     return childFunc;
//   };

//   const result = parentFunc();
//   // console.log(result);

//   result();
//   result();
//   result();
// }

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
  counter.increment();
  console.log(counter.getValue());
}
