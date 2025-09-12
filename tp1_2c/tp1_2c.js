/*
Friorella Celi comision 3 
https://www.youtube.com/watch?v=lj28Cb1c69Q
*/





// Variables globales - Estado original
let tamañoModulo = 60;
let numLineas = 8;
let modoColorido = false;
let colorFondo, colorLinea;
let imagenReferencia;

// Variables para el estado original (para reiniciar)
const TAMAÑO_ORIGINAL = 60;
const LINEAS_ORIGINAL = 8;
const COLORIDO_ORIGINAL = false;

function preload() {

  imagenReferencia = loadImage('DATA/imagentp3.png');
}

function setup() {
  createCanvas(800, 400);

  // Inicializar colores
  colorFondo = color(255);
  colorLinea = color(0);
}

function draw() {
  background(colorFondo);


  if (imagenReferencia) {
    image(imagenReferencia, 0, 0, 400, 400);
  }

  // Línea divisoria para mostrar dónde empieza el patrón
  stroke(150);
  strokeWeight(1);
  line(width/2, 0, width/2, height);

  // Ciclos for anidados para dibujar la grilla
  for (let x = width/2; x < width; x += tamañoModulo) {
    for (let y = 0; y < height; y += tamañoModulo) {
      // Usar función matemática dist() para detectar mouse sobre módulo
      let distanciaMouse = dist(mouseX, mouseY, x + tamañoModulo/2, y + tamañoModulo/2);
      let mouseEncima = distanciaMouse < tamañoModulo/2;

      // Dibujar módulo
      dibujarModulo(x, y, tamañoModulo, mouseEncima);
    }
  }
}

// Función void que NO retorna valor
function dibujarModulo(x, y, tamaño, destacado) {
  push();
  translate(x, y);

  // Condiciones if/else para cambiar color cuando mouse está encima
  if (destacado) {
    if (modoColorido) {
      stroke(255, 0, 0); // Rojo cuando mouse encima en modo colorido
      strokeWeight(3);
    } else {
      stroke(0, 0, 255); // Azul cuando mouse encima en modo normal
      strokeWeight(3);
    }
  } else {
    if (modoColorido) {
      stroke(255, 100, 0); // Naranja en modo colorido
    } else {
      stroke(colorLinea);
    }
    strokeWeight(2);
  }

  noFill();

  // Líneas que van desde las esquinas hacia el centro
  for (let i = 0; i < numLineas; i++) {
    // map para crear líneas que se acercan gradualmente al centro
    let factor = map(i, 0, numLineas-1, 0, 0.5);
    let margen = tamaño * factor;

    // Cuadrado concéntrico
    beginShape();
    vertex(margen, margen);
    vertex(tamaño - margen, margen);
    vertex(tamaño - margen, tamaño - margen);
    vertex(margen, tamaño - margen);
    vertex(margen, margen);
    endShape();

    // Líneas diagonales desde las esquinas hacia el centro
    if (i < numLineas - 1) {
      // Líneas desde esquina superior izquierda
      line(margen, margen, tamaño/2, tamaño/2);
      // Líneas desde esquina superior derecha
      line(tamaño - margen, margen, tamaño/2, tamaño/2);
      // Líneas desde esquina inferior derecha
      line(tamaño - margen, tamaño - margen, tamaño/2, tamaño/2);
      // Líneas desde esquina inferior izquierda
      line(margen, tamaño - margen, tamaño/2, tamaño/2);
    }
  }


  for (let i = 1; i < numLineas; i++) {
    let factor1 = map(i-1, 0, numLineas-1, 0, 0.5);
    let factor2 = map(i, 0, numLineas-1, 0, 0.5);
    let m1 = tamaño * factor1;
    let m2 = tamaño * factor2;

    // Líneas horizontales y verticales intermedias
    line(m1, m1, m2, m2); // Diagonal superior izquierda
    line(tamaño - m1, m1, tamaño - m2, m2); // Diagonal superior derecha
    line(tamaño - m1, tamaño - m1, tamaño - m2, tamaño - m2); // Diagonal inferior derecha
    line(m1, tamaño - m1, m2, tamaño - m2); // Diagonal inferior izquierda
  }

  pop();
}

// Función que SÍ retorna valor - Calcula densidad del patrón 
function calcularDensidad() {
  let areaDerecha = (width/2) * height;
  let areaModulos = ((width/2)/tamañoModulo) * (height/tamañoModulo) * (tamañoModulo * tamañoModulo);
  return map(areaModulos/areaDerecha, 0, 1, 0, 100);
}

// Función para reiniciar a estado original
function reiniciarEstado() {
  tamañoModulo = TAMAÑO_ORIGINAL;
  numLineas = LINEAS_ORIGINAL;
  modoColorido = COLORIDO_ORIGINAL;
  colorFondo = color(255);
  colorLinea = color(0);
}

// C para modo colorido
// + aumenta tamaño
// - achica
// barra espacio mas lineas
// R reinicia
function keyPressed() {
  // Condiciones if/else para diferentes teclas
  if (key === 'c' || key === 'C') {
    modoColorido = !modoColorido; // Cambiar modo colorido
  } else if (key === '+' || key === '=') {
    if (tamañoModulo < 150) tamañoModulo += 10; // Aumentar tamaño
  } else if (key === '-') {
    if (tamañoModulo > 30) tamañoModulo -= 10; // Disminuir tamaño
  } else if (key === ' ') {
    if (numLineas < 12) numLineas++; // Más detalle
  } else if (key === 'r' || key === 'R') {
    reiniciarEstado(); // Reiniciar todo
  }
}

// Evento de mouse
function mousePressed() {
  // Cambiar color de fondo cuando se hace click
  if (red(colorFondo) === 255) {
    colorFondo = color(20, 20, 30); // Fondo oscuro
    colorLinea = color(255);
  } else {
    colorFondo = color(255); // Fondo claro
    colorLinea = color(0);
  }
}
