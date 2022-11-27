//Usar canvas para dibujar líneas de colores con el movimiento del mouse
//

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

//Resize canvas space to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//base settings getContext()
ctx.strokeStyle = "#BADA55"; // Específica el color del trazo
ctx.lineJoin = "round"; //Asigna cómo se unen dos segmentos
ctx.lineCap = "round"; //Determina como se dibuja el punto final de un trazo
ctx.lineWidth = 50; //Establece el grosor de las líneas

//ctx.globalCompositeOperation = 'multiply' // Es un tipo de composición para dibujar con formas

//Variables 'dummy' asignación de trabajo

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//Esta funcion controla el dibujo.

function draw(e) {
  if (!isDrawing) return; //Stop th fn from running when they are not moused down
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();

  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.direction--;
  }
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
