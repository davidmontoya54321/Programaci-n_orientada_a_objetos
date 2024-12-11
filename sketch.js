/*let posX, posY; // usa aquí dos nombres para una variabl
let velX, velY;
let diametro;
let rad;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = color(random(100, 250), random(100), 100);
  rad = ceil(random(10, 50));
  diametro = rad * 2; //el radio se multiplica para 2
  //para que varie en tamaño // "int" para no tener decimales
  //ceil() agarra el inmediato superior floor() agarra el numero mas bajo round()redondear un decimal

  posX = random(rad, width - rad); //height hara que use toda la pantalla //(rad, width - rad) para que no sobrepase los limites
  posY = random(rad, height - rad);

  velX = random(-7, 5); // mientras mas grandes sean los numeros, mas rápido y mas probable que vaya a un lado
  velY = random(-4, 5);
}

function draw() {
  background(bg);
  fill(255);
  noStroke();

  posX += velX; // no se como  lo hizo pero no poner un número solo veX, a lo mejor sea por esta
  posY += velY;

  //para que la pelota rebote
  if (posX > width - rad || posX < rad) {
    velX *= -1;
    console.log("se fue");
    bg = color(random(100, 255), random(100), random(255));
  }

  if (posY > height - rad || posY < rad) {
    velY *= -1;
    console.log("se fue");
    bg = color(random(100, 255), random(100), random(255));
  }

  circle(posX, posY, diametro);
}*/
/*let space;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  space = mouseX + 5; //Deber tener 1 número para que no quede en 0

  fill(10);
  circle(20, 20, 30);
  noStroke();
  for (let x = 20; x < width; x += 20) {
    for (let y = 20; y < height, (y += 20)) {
      circle(x.y, random(2, 10));
    }

    circle(x, 20, 10);
    //circle(29, x, 10);
  }
}*/

//****************parte 2******************************** */
let particulas = [];
//let Particula1;
//let Particula2;
//let numero;
let = mouseX;
let = mouseY;
//let = pmouseX;
//let = pmouseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let numero = 900;
  frameRate(15);
  //console.log(particula1.nombre);
}

function draw() {
  background(20, 10);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update(); //para acceder al indice de una array usamos []
    particulas[i].display(); //para acceder al indice de una array usamos []
  }

  //PARA BORRAR LAS PARTÍCULAS:FORMA 2
  particulas = particulas.filter((pelota) => pelota.estaViva);

  //PARA BORRAR LAS PARTÍCULAS:FORMA 1
  for (let i = 0; i < particulas.length; i++) {
    if (particulas[i].estaViva) {
      //! se usa para contradecir
    } else {
      particulas.splice(i, 1);
    }
    /*if (((mouseX = pmouseX), (mouseY = pmouseY))) {
      noLoop();
    } else {*/
    particulas[i].update(); //para acceder al indice de una array usamos []
    particulas[i].display();

    noFill()
    stroke(252, 99, 145)
strokeWeight(1);
for(let i = 0; i < particulas.length - 1; 1++){
  if(particulas[i + 1] != undefined={
  line(
    particulas[i].posX, 
    particulas[i].poxY,
    particulas[i+1].posX, 
    particulas[i+1].poxY,)}

  }
}}
