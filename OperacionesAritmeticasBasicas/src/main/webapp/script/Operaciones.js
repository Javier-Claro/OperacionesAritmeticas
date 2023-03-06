
function ejemplo1() {
	
	let suma = 10.25 + 0.75;

	document.write(suma);
	
 	document.write(typeof(suma));
}

function ejemplo2() {
	
	let numero1 = 23;
	let numero2 = 34;
	let resultadoOperacion = numero1 + numero2;
	
	document.write(resultadoOperacion);
}

function ejemplo3() {
	
	let operacion = 46 + ((8 * 2) / 2) + 46;
	
	document.write(operacion); 
}

function ejercicioOperadores() {
	
	//incrementa la siguiente variable en 5:
      	let incremento = 12;
      	incremento += 5;
	//Decrementa el resultado de la variable anterior en 1.
		incremento --;
	//Simplifica esta operación utilizando el operador adecuado:
    //let multiplicacion = 10 * 10 * 10 * 10 * 10;
     	let multiplicacion = 10*5;	//tendria que ser con doble *
	//Obtén el resto de 57409 dividido entre 16789.
		let resto = (57409%16789);
	
	document.write(incremento);
	document.write("\n "+ multiplicacion);
	document.write("\n "+ resto);
}

function ejemploOperadores1() {
	
	let numero1 = 10;
	numero1 *= 15;
	
	let numero2 = 10;
	numero2 /= 2;
	
	let numero3=10;
	numero3 %= 5;
	
	let numero4=15;
	numero4 *= 5;	//tendria que ser con doble *
	
	document.write(numero1);
	document.write(numero2);
	document.write(numero3);
	document.write(numero4);
}

	//Crea dos objetos del mismo tipo:
	function coche(marca, modelo, anioFabricacion) { 
	 this.marca = marca; 
	 this.modelo = modelo; 
	 this.anioFabricacion = anioFabricacion; 
	 
	 var Vehiculo = new coche('Honda', 'Civic', 2010); 
	 var Vehiculo1 = new coche('Honda', 'Civic', 2010); 
	 } 	 
	 //¿Qué ocurrirá si se comparan? con == o con ===.

function ejemploObject(marca, modelo, anioFabricacion) {
	
          this.marca  =  marca  ;
          this.modelo  =  modelo  ;
          this.anioFabricacion  =  anioFabricacion  ;
    }
    var Vehiculo = new coche('Honda', 'Civic', 2010);
    var Vehiculo1 = new coche('Honda', 'Civic', 2010);