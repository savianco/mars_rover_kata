// Creo un array multidimensional de espacios blancos que representa el planeta
// Marte en coordenadas x e y, con 2 (O,Q)bstaculos diferentes en [7, 1] y [3, 6]
var marte = [
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," ","O"," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," ","Q"," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
];

console.log(marte.join('\n') + '\n\n');



var coordX = 0;
var coordY = 0;
var oldCoordX;
var oldCoordY;



// Creo el objeto roverKata que partiendo de posicion inicial [0, 0], se dirige direccion Norte.
var roverKata = {
  position:[0,0],
  direction: "N"
};

console.log(roverKata);


// Creo una función para girar a la DERECHA.
function turnRight(roverKata){
  switch(roverKata.direction) {
    case "N":
      roverKata.direction = "E";
      console.log("RoverKata ahora hacia al ESTE");
      break;

    case "E":
      roverKata.direction = "S";
      console.log("RoverKata ahora hacia el SUR");
      break;

    case "S":
      roverKata.direction = "W";
      console.log("RoverKata ahora hacia el OESTE");
      break;

    case "W":
      roverKata.direction = "N";
      console.log("RoverKata ahora hacia el NORTE");
      break;
  }
}


// Creo otra función para girar a la IZQUIERDA.

function turnLeft(roverKata){
  switch(roverKata.direction) {
    case "N":
      roverKata.direction = "W";
      console.log("RoverKata ahora hacia el OESTE");
      break;

    case "W":
      roverKata.direction = "S";
      console.log("RoverKata ahora hacia el SUR");
      break;

    case "S":
      roverKata.direction = "E";
      console.log("RoverKata ahora hacia el ESTE");
      break;

    case "E":
      roverKata.direction = "N";
      console.log("RoverKata ahora hacia el NORTE");
      break;
  }
}


// Creo una funcion para controlar donde estan los (Q,O)bstaculos
function controlObstaculos() {
  console.log(coordX);
  console.log(coordY);

	oldCoordX = coordX;
	oldCoordY = coordY;

  if (marte[coordX++][coordY] === "O" || marte[coordX][coordY++] === "O" || marte[coordX--][coordY] === "O" || marte[coordX][coordY--] === "O" || marte[coordX++][coordY] === "Q" || marte[coordX][coordY++] === "Q" || marte[coordX--][coordY] === "Q" || marte[coordX][coordY--] === "Q") {
      console.log("RoverKata, hay un abstáculo, no puedes avanzar. Por favor, retrocede a la posición anterior");
		  console.log(coordX);
		  console.log(coordY);
		  console.log(oldCoordX);
		  console.log(oldCoordY);

		  coordX = oldCoordX;
		  coordY = oldCoordY;

      console.log("RoverKata, estás ahora en: [" + oldCoordX + ", " + oldCoordY + "]");
		  return true;
    } else {
	   return false;
	}
}

// Creo una función para que roverKata no se salga del planeta.
function controlMarte(roverKata) {
  if (coordX > 9) {
    coordX = 0;
  }
  if (coordX < 0) {
    coordX = 9;
  }
  if (coordY > 9) {                             
    coordY = 0;
  }
  if (coordY < 0) {
    coordY = 9;
  }
}


// Creo una función para AVANZAR, teniendo en cuenta la ubicación de los obstáculos.
function goForward(roverKata) {
	console.log(controlObstaculos(roverKata));
	if (controlObstaculos(roverKata) === false) {
    switch(roverKata.direction) {
      case "N":
          coordY++;
          controlMarte(roverKata);
        break;

      case "E":
          coordX++;
          controlMarte(roverKata);
        break;

      case "S":
          coordY--;
          controlMarte(roverKata);
        break;

      case "W":
          coordX--;
          controlMarte(roverKata);
        break;
    }

    console.log("RoverKata, tu nueva posición es: [" + coordX + ", " + coordY + "]");
	}
}

// Creo una función para RETROCEDER, teniendo en cuenta la ubicación de los obstáculos.
function goBack(roverKata) {
	if (controlObstaculos(roverKata) === false) {
    switch(roverKata.direction) {
      case "N":
        coordY--;
        controlMarte(roverKata);
        break;

      case "E":
        coordX--;
        controlMarte(roverKata);
        break;

      case "S":
        coordY++;
        controlMarte(roverKata);
        break;

      case "W":
        coordX++;
        controlMarte(roverKata);
        break;
    }
    console.log("RoverKata, tu nueva posición es: [" + coordX + ", " + coordY + "]");
	}
}


// Vamos a ver a RoverKata en movimiento 
console.log("BIENVENIDO A MARTE: DATE UNA VUELTA CON KATA, MI ROVER");
alert("BIENVENIDO A MARTE: DATE UNA VUELTA CON KATA, MI ROVER");
console.log("=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=o=");
console.log("Posición Inicial de RoverKata: ["+ roverKata.position +"]");

var counter = 1;
while (counter <= 1) {
  
// Creo una entrada de usuario para ordenar movimiento/s y generar un array con ellos.
roverKataInstrucc = prompt("Indica algún comando: f (avanzar), b (retroceder), r (derecha), l (izquierda)");
roverKataArrayInstrucc = roverKataInstrucc.split(""); 
console.log(roverKataArrayInstrucc);

var roverKataArrayInstruccLength = roverKataArrayInstrucc.length;
for (var i = 0; i < roverKataArrayInstruccLength; i++) {
    if (roverKataArrayInstrucc[i].toLowerCase() === 'f') {
  goForward(roverKata);
} else if (roverKataArrayInstrucc[i].toLowerCase() === 'b') {
  goBack(roverKata);
} else if (roverKataArrayInstrucc[i].toLowerCase() === 'r') {
  turnRight(roverKata);
} else if (roverKataArrayInstrucc[i].toLowerCase() === 'l') {
  turnLeft(roverKata);
} else {
    console.log("Comando incorrecto");
    alert("Comando incorrecto");
  }
}
 counter += 1;
}

// Indicamos la posición final y la dirección de RoverKata
console.log("RoverKata, tu POSICIÓN FINAL ES: [" + coordX + ", " + coordY + "]");
console.log("RoverKata, tu DIRECCIÓN FINAL ES: " + (roverKata.direction));


  


