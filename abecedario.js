
//voy a utilizar el codigo ACII para imprimir el abecedario que va de la A a la Z siendo los respectivos numeros del 65 al 91
// y en minuscula del 97 al 123

function imprimirAbecedario(opcion) {

	//determinar el valor por defecto de i , j para imprimir de la  A hasta la Z
	let i = 65;
	let j = 91;


	//si la opcion es "minuscula" asignar los valores correspondientes a  i,j para imprimir de la  a hasta la z
	if (opcion == 'minuscula') {
		i = 97;
		j = 123;
	}
	let str = "";
	//iterar los valores de la  i a la  j
	for (k = i; k < j; k++) {
		//convertir el  char code a un  string y concatenar con += las letras y con un if insertar la separacion con ","
		str += String.fromCharCode(k);
		if (k !== j - 1) str += ",";


	}
	// imprimir en consola
	console.log(str);
}

imprimirAbecedario(); // imprime el abecedario en letras Mayusculas
imprimirAbecedario("minuscula");// imprime el abecedario en letras minusculas