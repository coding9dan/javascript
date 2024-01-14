const cities = [
  { "San Antonio": 3000 },
  { Austin: 5000 },
  { Houston: 3000 },
  { "El Paso": 2000 },
  { Austin: 5000 },
];

let total = 0;
let result = [];
let uniqueKeySet = new Set();

cities.forEach((city) => {
  for (let key in city) {
    console.log(key);
    if (!uniqueKeySet.has(key)) {
      uniqueKeySet.add(key);
      result.push({ [key]: city[key] });
      total += city[key];
    }
  }

  return [result, total];
});
console.log(result, total);
