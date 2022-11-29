const dogs = [
  { name: "Snickers", age: 3 },
  { name: "hugo", age: 4 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#bada55";
  p.style.fontSize = "50px";
}

//Regular

console.log("Hello");

//Interpolated
console.log("Hello I am a %s string", "💩");

//Style
console.log(
  "%c I am some great text",
  "font-size: 45px; color: blue; text-shadow: 8px 10px 0 red"
);

//Warning!
console.warn("OH NOOOO");

//Error:/
console.error("Shit!");

//Info
console.info("Crocodiles eat 3-4 people per year");

//Testing
console.assert(1 === 2, "That is not true!");

// or this...
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

//Clearing
console.clear();

//Viewing DOM elements
console.log(p);
console.dir(p);

//Grouping together

dogs.forEach(dog => {
  console.group(`${dog.name}`); //Inicia el grupo por el argumento dato, puede ser collapsed
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//Count

console.count("JA");
console.count("JA");
console.count("JA");
console.count("JA");
console.count("JA");
console.count("JA");
console.count("JA");
console.count("JA");
console.count("JA");

//timing
// console.time("fetching data");
// fetch("https://api.github.com/users/wesbos")
//   .then(data => data.json())
//   .then(data => {
//     console.timeEnd("fetching data");
//     console.log(data);
//   });

//table

console.table(dogs);
