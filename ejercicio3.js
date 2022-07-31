/*
    Con los 2 arrays proporcionados crear otro que contenga la sumatoria, resta, 
    multiplicacion y division de sus elementos en el orden mencionado
    
    Mostrar el resultado de todos los arrays al final de forma horizontal
    
    ej:
    
    1, 2,3,4,5, 6, 7, 8
    4, 3,2,1,0,-1,-2,-3
    5,-1,6,4,5, 7,-14,-2.6666666666666665
*/

let arr1 = [4, 4.4, 2, 1, 3, 23, -23, -2, 0]

let arr2 = [17, 3, -3, 0.3, -1.02, 55, 333, -10000, 1]

//Determino el valor maximo de iteraciones al dedifinir el valor del array con menos elementos ,de esta manera se itera el numero de veces 
//del array de menor longitud
let menorLongitud = Math.min(arr1.length, arr2.length)

// para imprimir en consola los valores de manera mas ordenada cree una variable para cada operacion 
let resultadoSum = [];
let resultadoResta = [];
let resultadoMult = [];
let resultadoDiv = [];

// creo las iteraciones insertando los valores con push()
for (let i = 0; i < menorLongitud; i++) {
    resultadoSum.push(arr1[i] + arr2[i])
}
for (let i = 0; i < menorLongitud; i++) {
    resultadoResta.push(arr1[i] - arr2[i])
}
for (let i = 0; i < menorLongitud; i++) {
    resultadoMult.push(arr1[i] * arr2[i])
}
for (let i = 0; i < menorLongitud; i++) {
    resultadoDiv.push(arr1[i] / arr2[i])
}

console.log(resultadoSum.join(", "))
console.log(resultadoResta.join(", "))
console.log(resultadoMult.join(", "))
console.log(resultadoDiv.join(", "))