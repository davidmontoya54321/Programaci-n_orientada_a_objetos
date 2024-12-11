class Particula {
  //este método se ejecuta autimáticamente
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.estaViva = true; //par monitorear si esta viva la pelota
    //El tiempo de vida
    this.tVida = round(random(5, 25)); //esto nos va arrojar fotogramas en decimales(no existen)
    //para eso usamos round()
    this.tamaño = 10;
    this.opacidad = 100;
  }
  update() {
    this.tVida -= 1; // this.tVida --

    /*if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }*/

    if (this.posY < this.tamaño / 2) {
      this.estaViva = false;
    }
    this.opacidad -= 1;
    this.posX += random(-10, 10);
    this.posY -= -1;
    this.tamaño += 0.5;
  }
  display() {
    this.changeColor;
    //hara que me deje ver la animaciones- se crea aqui los objetos
    fill(random(150, 200), random(150, 200), 0, this.opacidad);
    noStroke();

    /* //Estrella de 4 puntas

    beginShape(); //util para crear formas fuera de las convencionales pero necesita algo para cerrar
    vertex(45 + this.posX, -60 + this.posY, this.tVida);
    vertex(70 + this.posX, 0 + this.posY, this.tVida);
    vertex(150 + this.posX, 20 + this.posY, this.tVida); ///puntaDerecha
    vertex(70 + this.posX, 60 + this.posY, this.tVida);
    vertex(45 + this.posX, 130 + this.posY, this.tVida); //mitad
    vertex(20 + this.posX, 60 + this.posY, this.tVida);
    vertex(-50 + this.posX, 20 + this.posY, this.tVida); //punta izquierda
    vertex(20 + this.posX, 10 + this.posY, this.tVida);
    endShape(CLOSE); // Cerrar la forma*/

    circle(this.posX, this.posY, this.tamaño);
  }
}
