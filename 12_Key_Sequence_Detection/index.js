const hl = document.getElementsByTagName("h1")[0];
const text = hl.innerHTML;

const pressed = [];
const secretCode = "code";

/*La propuesta original es: 

// hl.addEventListener("click", e => {
//   if (hl.innerHTML === text) {
//     hl.innerHTML = secretCode;
//   } else {
//     hl.innerHTML = text;
//   }
// });

*/

//Mi propuesta es:
hl.addEventListener("click", e =>
  hl.innerHTML === text ? (hl.innerHTML = secretCode) : (hl.innerHTML = text)
);

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key); //adiciona cada key a el array pressed
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING");
    cornify_add();
  }
  console.log(pressed);
});
