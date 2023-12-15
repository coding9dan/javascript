const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

const log = (log) => {
  console.log(log);
};

//***MAP***
//1. Get array of all names
const mapAllNames = characters.map((char) => char.name);
// log(mapAllNames);

//2. Get array of all heights
const mapAllHeights = characters.map((char) => char.height);
// log(mapAllHeights);

//3. Get array of objects with just name and height properties
const mapAllNameAndHeight = characters.map((char) => ({
  name: char.name,
  height: char.height,
}));
// log(mapAllNameAndHeight);

//4. Get array of all first names
const mapAllFirstNames = characters.map((char) => char.name.split(" ")[0]);
// log(mapAllFirstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMassAllChars = characters.reduce((a, c) => a + c.mass, 0);
// log(totalMassAllChars);

//2. Get total height of all characters
const totalHeightAllChars = characters.reduce((a, c) => a + c.height, 0);
// log(totalHeightAllChars);

//3. Get total number of characters by eye color
const totalCharsByEyeColor = characters.reduce((a, c) => {
  if (!a[c.eye_color]) {
    a[c.eye_color] = 1;
  } else {
    a[c.eye_color] = a[c.eye_color] + 1;
  }
  return a;
}, {});
// log(totalCharsByEyeColor);

//4. Get total number of characters in all the character names
const totalAllCharsNames = characters.reduce((a, c) => a + c.name.length, 0);
// log(totalAllCharsNames);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreaterThan100 = characters.filter((char) => char.mass > 100);
// log(massGreaterThan100);

//2. Get characters with height less than 200
const heightLessThan200 = characters.filter((char) => char.height < 200);
// log(heightLessThan200);

//3. Get all male characters
const allMaleChars = characters.filter((char) => char.gender === "male");
// log(allMaleChars);

//4. Get all female characters
const allFemaleChars = characters.filter((char) => char.gender === "female");
// log(allFemaleChars);

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass);
// log(sortByMass);

//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
// log(sortByHeight);

//3. Sort by name
const sortByName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
// log(sortByName);

//4. Sort by gender
const sortByGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
// log(sortByGender);

//***SOME***
//1. Is there at least one male character?
const leastOneMaleChar = characters.some((char) => char.gender === "male");
// log(leastOneMaleChar);

//2. Is there at least one character with blue eyes?
const leastOneBlueEyesChar = characters.some(
  (char) => char.eye_color === "blue"
);
// log(leastOneBlueEyesChar);

//3. Is there at least one character taller than 210?
const leastTallerThan210 = characters.some((char) => char.height > 210);
// log(leastTallerThan210);

//4. Is there at least one character that has mass less than 50?
const leastMassLessThan50 = characters.some((char) => char.mass < 50);
// log(leastMassLessThan50);
