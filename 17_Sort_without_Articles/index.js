const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//Retirar los arrticulos de los strings

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, " ").trim();
}

//Organizar el array alfabéticamente, que simultaneamente permite crear la función
//Para presentar los datos en HTML como una arrow function

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// const sortedBands = bands.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

document.querySelector("#bands").innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join("");
