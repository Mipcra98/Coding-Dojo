// 1. Examina la desestructuración en objetos anidados con un enfoque en propiedades que podrían no existir.

const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;  //const { personal: { detalles: { edad, salario = 2500 } } } = info
console.log(edad);
console.log(salario);

//1-1.    Se observa que la propiedad "salario" no existe en el objeto detalles, por lo que se obtiene un valor undefined al intentar imprimirlo, sin embargo la propiedad "edad" si existe y se imprime exitosamente.
//1-2.    Para solucionar este problema se puede asignar un valor directamente en la desestructuración del "salario", para que de esta manera se añada este valor directamente al salario. Ej: const { personal: { detalles: { edad, salario = 2500 } } } = info;




// 2. Evalúa el uso del operador spread para fusionar objetos con propiedades repetidas.
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

//2-1.    El operador spread permite fusionar objetos con propiedades repetidas, en este caso, las propiedades repetidas se sobreescriben con el valor del objeto que se encuentra después en la fusión.
//2-2.    En este caso, el objeto B tiene propiedades repetidas con el objeto A, por lo que las propiedades "b" y "c" del objeto A se sobreescriben con los valores del objeto B.




//3.Analiza el alcance de las variables dentro de bloques y funciones.
function verificar() {
    if (true) {
        const a = 2;            //Se genera una variable local a dentro del bloque if
        let b = 3;              //Se genera una variable local b dentro del bloque if
        var c = 4;              //Se genera una variable global c dentro del bloque if
    }
    console.log(c);
    // console.log(a);      //Comentado para omitir error
    // console.log(b);      //Comentado para omitir error
}
verificar();

//3-1.    La variable "a" no se puede acceder fuera del bloque if porque fue declarada con const.
//3-2.    La variable "b" no se puede acceder fuera del bloque if porque fue declarada con let.
//3-3.    La variable "c" se puede acceder fuera del bloque if porque fue declarada con var, lo que significa que es accesible en todo el ámbito global, debido a esto si puede ser impresa en pantalla.





// 4. Explora el comportamiento de JavaScript cuando se manipulan propiedades de un objeto inmutable.
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// 4-1.    El objeto "datos" es inmutable, lo que significa que no se pueden agregar, modificar o eliminar propiedades del objeto.
// 4-2.    Según el sitio web 'MDN web docs'(02/09/2024) indica que: "El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido."
// 4-3.    En el ejemplo, se intenta modificar la propiedad "edad" del objeto "datos" pero no se puede porque el objeto es inmutable. Por lo tanto, la consola mostrará el valor original de la propiedad "edad", que es 29.






// 5. Comprende la manipulación de arrays con métodos que no modifican el array original.
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

//5-1.    El método concat() se utiliza para unir dos o más arrays en uno solo. En este caso, se une el array original con el número 4, creando un nuevo array llamado nuevo.
//5-2.    El array original no se modifica, por lo que la consola mostrará el array original sin cambios.




// 6. ¿Por qué el código produjo esa salida? ¿Cómo obtendrías el valor del tercer índice?
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;   //const [primera, segunda, tercera] = frutas;
console.log(primera);
console.log(segunda);
// console.log(tercera);

//6-1.    El código produce esa salida porque se utiliza la destructuración de arrays para asignar los valores de los primeros dos índices del array frutas a las variables primera y segunda, respectivamente.
//6-2.    Para obtener el valor del tercer índice, se puede acceder añadir una tercera "variable". Ej.: const [primera, segunda, tercera] = frutas; y posteriormente hacerle una impresión a esa variable: console.log(tercera);
//6-3.    Otra forma de obtener el valor del tercer índice es utilizando el método rest, añadiendo "..." a una tercera varialbe (const [primera, segunda, ...resto] = frutas;), pero esto haría que todos los siguientes datos tambien se adhieran a esta variable, haciendo que para su impresion sea utilice console.log(resto[0]);




// 7. Examina el comportamiento del ámbito de `let` en bucles, especialmente en bucles anidados.
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}

// 7-1.    El código utiliza solamente la variable "i" que se encuentra en el segundo buble para imprimir, sin embargo existen 2 variables locales llamadas "i", en el primer bucle (el externo) es el que contará del 0 a 2, y el segundo bucle (el interno) es el que contará del 0 a 1, sin embargo, el segundo bucle no afecta al primero, ya que el alcance de la variable "i" del primer bucle es "global", mientras que el alcance del segundo es local, por lo que el resultado de la impresión es 0, 1, 0, 1. (entiendase que la variable "global" solamente lo es para esa función, no para el código completo, en este contexto sigue siendo una variable local)
// 7-2.    Se puede notar las diferencias perfectamente si se añaden "impresiones" dentro del primer bucle que diga algo similar a "i del bucle exterior:" seguido del valor i, mientras que en el "console.log" ya existente diga "i del bucle interior:" seguido del valor i, esto mostrará que el primer bucle cuenta del 0 al 2, mientras que el segundo cuenta del 0 al 1, y que el segundo no afecta al primero.





// 8. Operador Spread en Objetos ¿Por qué el código produjo esa salida? ¿Cómo solucionarías un problema si quisieras evitar sobrescribir la propiedad ‘b’?
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const  combinado = { ...objeto1, ...objeto2};   //const  combinado = { ...objeto1, ...objeto2 ,b: [objeto1.b, objeto2.b]};

console.log(combinado);

// 8-1. El código produce esa salida porque el operador spread toma todas las propiedades de un objeto y las agrega a otro objeto, en este caso, objeto1 y objeto2 se combinan en combinado, y la propiedad 'b' de objeto2 sobrescribe la propiedad 'b' de objeto1, por lo que el valor de 'b' en combinado es 3.
// 8-2. Para evitar sobrescribir la propiedad 'b', se puede asignar ambos valores a la variable en forma de una lista, así no se perderían ninguno de ambos valores, para ello sería necesario declararlo algo similar a: const  combinado = { ...objeto1, ...objeto2 ,b: [objeto1.b, objeto2.b]}; .
// 8-3. A travez del ejemplo mencionado anteriormente ya se asignan los valores de 'b' en ambos objetos al objeto combinado, cabe resaltar que el orden de los objetos para el "spread" es importante, ya que el último objeto que se coloque en el spread, es el que tiene prioridad para sobrescribir las propiedades.





// 9. Uso del operador Spread para combinar arrays. Analiza cómo se combinan los arrays y qué sucede con los elementos duplicados.
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

// 9-1. El operador spread permite combinar los arrays numeros1 y numeros2 en un nuevo array llamado combinados, pero no los remplaza como en el caso de los objetos, simplemente los añade en el siguiente índice del array.
// 9-2. El resultado de la combinación es un array que contiene todos los elementos de los dos arrays originales, en este caso, [1, 2, 3, 3, 4, 5].





// 10. Alcance y captura de variables en una función. Explora el ámbito de las variables dentro de una función y cómo esto afecta su visibilidad.
function demostracion() {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();

// 10-1. La variable nombre es una variable global, por lo que se puede acceder a ella desde cualquier parte de la función "demostración", así mismo se modificará para el resto de su existencia dentro de la función "demostración" una vez que se haga algún cambio en el, pero en caso de que se intenta acceder a esta variable global fuera de la función, se generará un error ya que ésta no existe en ese entorno.
// 10-2. Por otra parte, la variable edad es una variable local, por lo que solo se puede acceder a ella dentro de la función "demostración", no se puede modificar desde fuera de ella (en este caso, el hijo o bloque if que se encuentra dentro de la función "demostración"), por lo que su valor se mantiene en 25, ya que no se le asigna ningún valor dentro de la propia función "demostración", en este contexto, si se hubiera impreso (console.log(edad)) dentro del hijo o bloque if, esta impresión mostraría el valor de 30, pero sin sobreescribir el valor de 'edad' que se encuentra directamente en la función "demostración".