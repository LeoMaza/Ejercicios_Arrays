
/*Cambiar los 1 a 0 y viceversa con el array proporcionado
Mostrar el resultado del array, antes y despues de la alteracion, de forma horizontal*/

let arrayBinario = [
  1, 0, 0, 1, 0, 1, 1, 1,
  1, 0, 0, 1, 0, 0, 0, 0,
  1, 0, 0, 1, 0, 0, 1, 1,
  1, 0, 0, 1, 1, 1, 1, 0
];

console.log(arrayBinario.join("-"));// con .join se muestra de manera horizontal el resultado en consola

// aqui creo una condicion que itere en la longiud del array cambian los numeros 0 por 1 y viceversa
for (let i = 0; i < arrayBinario.length; i++) {
    if (arrayBinario[i]) {
        arrayBinario[i] = 0;
   }
   else {
       arrayBinario[i] = 1;
   }
    
}



console.log(arrayBinario.join("-"));// se imprime el resultado separando cada caracter con un - asi se ve mas prolijo