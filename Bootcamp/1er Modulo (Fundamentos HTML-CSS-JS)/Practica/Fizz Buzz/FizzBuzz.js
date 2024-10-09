console.log("Práctica, FizzBuzz")
var lista = []                      //se crea una lista vacia
for (var i = 1; i <= 100; i++) {    //recorremos 100 números
    if(i%3 ==0 && i%5 ==0){         //si es múltiplo de 15 (3 y 5 a la vez)
        lista.push("FizzBuzz")      //se agrega "FizzBuzz" a la lista
    }else if(i%3 ==0){              //si es múltiplo de 3
        lista.push("Fizz")          //se agrega "Fizz"  a la lista
    }else if(i%5 ==0){              //si es múltiplo de 5
        lista.push("Buzz")          //se agrega "Buzz"  a la lista
    }else{                          //sino
        lista.push(i)               //se agrega el número normal a la lista
    }
}

console.log(lista)                  //se imprime la lista