//variable para saber pantalla actual
let pantalla;
let Imagenes = [];

function preload() {
  //pre carga de cosillas (loadImage(), loadSound(), loadFont()...
  Imagenes[0] = loadImage("./data/Imagen0.png");
  Imagenes[1] = loadImage("./data/Imagen1.png");
  Imagenes[2] = loadImage("./data/Imagen2.png");
}

function setup() {
  createCanvas(640, 480);
  //valor inicial pantalla
  pantalla = 0;
} 

function draw() {
  background(137, 206, 140);
  
  //mostrar pantalla inicio
  if (pantalla === 0) {
    mostrarPantallaInicio();
  }
  //primer p
  else if (pantalla === 1) {
    image(Imagenes[1], 0, 0, width, height);
    // Descomentar para ver el área del botón:
    //mostrarBotonRect(220, 430, 200, 40);
  }
  //segunda p
  else if (pantalla === 2) {
    image(Imagenes[2], 0, 0, width, height);
  }
  //tercer p
  else if (pantalla === 3) {}
}

// --- Funciones para mostrar áreas clickeables ---
function mostrarBotonCirculo(x_, y_, diametro_) {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  circle(x_, y_, diametro_);
}

function mostrarBotonRect(x_, y_, ancho_, alto_) {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  rect(x_, y_, ancho_, alto_);
}

function mousePressed() {
  // Pantalla 0: botón circular para ir a pantalla 1
  if (pantalla === 0) { 
    let distancia = dist(mouseX, mouseY, 320, 420);
    if (distancia < 65) { // 65 es el radio (130/2)
      pantalla = 1;
    }
  }
  // Pantalla 1: botón rectangular para ir a pantalla 2
  else if (pantalla === 1) {
    if (mouseX > 220 && mouseX < 420 && mouseY > 430 && mouseY < 470) {
      pantalla = 2;
    }
  }
}

/// funciones pantalla
function mostrarPantallaInicio() {
  push(); 
  image(Imagenes[0], 0, 0, width, height);
  
  // Descomentar para ver el área del botón:
  // mostrarBotonCirculo(320, 420, 130);
  
  fill(255);
  textAlign(CENTER);
  textSize(24);
  //text("Hole!", width/2, height/2);
  textSize(20);
  //text("lick para continuar", width/2, height/2+20);
  pop();
}
