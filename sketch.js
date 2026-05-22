//variables
let columnas;let filas;
let espaciado = 30;
//el tamaño queda como "[]" para así poner condiciones dentro de este.
let tamaño = [];
let escala = 0.30;
//variables de color
let r = 220;
let g = 220;
let b = 220;
//colores trazo
let R = 220;
let G = 220;
let B = 220;

function setup() {
  
  createCanvas(700, 700);
  
  colorMode(RGB);
  
  //número de columnas
  columnas = width/espaciado;
  filas = height/espaciado;
  
  //neceario para repetir lo circulos en el loop.
  ellipseMode(CENTER);
}

function draw() {
  background(0);
  
  //nested loops
  
  //en este caso necesito que se repitan las columnas para así tener los círculos alineados a través de todo el canva.
  
 for (let i=0; i<columnas; i++){
   tamaño[i] = [];
   for(let j=0; j<filas; j++){
     
     //utilicé el comando dist para el momento en el que se mueva el mouse se vayan achicando los círculos cercanos.
     tamaño[i][j] = (dist(mouseX, mouseY, i*espaciado, j*espaciado))*escala;
     stroke(R,G,B);
     fill(r,g,b);
     ellipse(espaciado/2 + i*espaciado, espaciado/2 + j*espaciado, tamaño[i][j]);
    }  
   }
 } 

//condicionales
//cambiar colores con las teclas

//cambiar colores del relleno
function keyPressed(){
  if (key === 'a'){
    r = random(255);
    g = random(255);
    b = random(255);
  }
//cambiar colores del trazo  
  if (key === 'd'){
    R = random(250);
    G = random(250);
    B = random(250);
  }
//desactivar colores del relleno
  if (key === 'w'){
    r = 255;
    g = 255;
    b = 255;
  }
  //desactivar colores del trazo
  if (key === 's'){
    R = 255;
    G = 255;
    B = 255;
  }
}