//variable para saber pantalla actual
let pantalla;
let Imagenes = [];

function preload() {
  //pre carga de cosillas (loadImage(), loadSound(), loadFont()...
  Imagenes[0] = loadImage("./data/Imagen0.png");
  Imagenes[1] = loadImage("./data/Imagen1.png");
  //Imagenes[2] = loadImage ("./data/Imagen2.png");
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
  }
  //segunda p
  else if (pantalla === 2) {}
  //tercer p
  else if (pantalla === 3) {}
}

// --- Función para mostrar o definir el área clickeable ---
function mostrarBoton(x_, y_, diametro_) {
  noFill();
  //stroke(255, 0, 0); // solo para visualizar el área (despues hay que sacarlo)
  //strokeWeight(2);
  circle(x_, y_, diametro_);
}

function mousePressed() {
  if (pantalla === 0) { 
    // Chequea si hiciste click dentro del círculo del botón
    let distancia = dist(mouseX, mouseY, 320, 420);
    if (distancia < 65) { // 65 es el radio (130/2)
      pantalla = 1;
    }
  }
  else if (pantalla === 1) {}
}

/// funciones pantalla
function mostrarPantallaInicio() {
  push(); 
  
  image(Imagenes[0], 0, 0, width, height);
  
  // Llama la funcion mostrarBoton para ver dónde esta (x, y del centro, diámetro)
  //mostrarBoton(320, 420, 130);
  
  fill(255);
  textAlign(CENTER);
  textSize(24);
  //text("Hole!", width/2, height/2);
  textSize(20);
  //text("lick para continuar", width/2, height/2+20);
  pop();
}
