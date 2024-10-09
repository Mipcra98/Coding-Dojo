var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Arreglo:",arreglo);



//Aplicación de Spread Operator
var arreglo2 = [...arreglo];
var arreglo3 = arreglo;
arreglo.push(11);
console.log("Arreglo:",arreglo);
console.log("Arreglo2:",arreglo2);
console.log("Arreglo3:",arreglo3);



//Aplicación de Rest Operator (...resto) y también la Descontrucción, que es "generar variables" a partir desde un arreglo en este caso.
var [a, b, ...resto] = arreglo;

console.log("a:",a);
console.log("b:",b);
console.log("resto:",resto);