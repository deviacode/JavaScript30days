//Start with strings, numbers and booleans

let age = 80;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2); //200 80

let name = "wes";
let name2 = name;
console.log(name, name2);
name = "wesley";
console.log(name, name2); //wesley wes

//We have an array
const players = ["wes", "sarah", "ryan", "poppy"];
//Let's say we want to make a copy of it
const team = players;

console.log(players, team);

//You might think we can just do something like this:

//team[3] = "lux";
console.log(team);
console.log(players); // modifica el array, porque team es solo una referencia al array

//However what happens when we update that array?

//Now here is the problema!

// oh no - we have edited the original array too!

//Why? It's because that is an array reference, not an array copy. They both point to the same array

//So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2);

//One way

//Or create a new array and concat the old one in

const team3 = [].concat(players);
console.log(team3);

//Or use the new ES6 Spread

const team4 = [...players];
team4[3] = "Wow...";
console.log(team4);

const team5 = Array.from(players);

console.log(team5);

//Now when we update it, the original one isn't changed

//The same thing goes for objects, let's say we have a person object

//with objects

const person = {
  name: "DeviaCode",
  age: 100,
};

//and think we make a copy:
//how do we we take a copy instead?

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

//We will hopefully soon see the object ...spread

// const cap3 = {...person}; // aún no se implementa

//Things to note - this is only 1 level deep - both for Arrays and Objects.
//Lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: "pipiolo",
  age: 100,
  social: {
    twitter: "@twitter",
    facebook: "face.facebook",
  },
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);
