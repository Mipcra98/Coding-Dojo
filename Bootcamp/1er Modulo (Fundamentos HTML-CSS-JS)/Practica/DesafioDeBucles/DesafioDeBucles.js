console.log("Práctica, Desafío de Bucles")

console.log("Ejercicio 1");
for (let i = 1; i<=30;i++){     //recorrer 30 numeros
    if (i%2==0){                //si el numero es par o multiplo de 2
        console.log(i);         //imprimir el numero
    }                           
}

console.log("Ejercicio 2");
for (let i= 100; i>=10; i--){      //recorrer 100 numeros en orden descendente de 4 en 4
    if (i%4==0){                  //si el numero es multiplo de 4
        console.log(i);           //imprimir el numero
    }
}

console.log("Ejercicio 3");
for (let i=10; i>=-5; i-=3){       //recorrer 10 numeros en orden descendente de 3 en 3
    console.log(i);                 //imprimir el numero
}

console.log("Ejercicio 4");
var suma = 0;
for (let i=1; i<=50; i++){         //recorrer 50 numeros
    suma += i;                     //sumar el numero a la suma
}
console.log(suma);                 //imprimir el valor de la suma

console.log("Ejercicio 5");
var producto = 1;
for (let i=1; i<=20; i++){         //recorrer 20 numeros
    producto *= i;                 //multiplicar el numero al producto
}
console.log(producto);             //imprimir el valor del producto