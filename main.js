//l primer paso antes de escribir el ciclo es identificar las diferentes partes del ciclo: la inicialización, la condición, el incrementador y el cuerpo.
//Para este ejemplo serían:
//Inicializa una variable en 10.
//La condición es que la variable sea menor o igual a 20.
//Incrementa la variable en dos en cada iteración.
//El cuerpo debe imprimir la variable.

//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 



let edades = [1, 8, 3,15,6];
           //  [0, 1, 2,3, 4];

           
function compararMayor (arreglo){

    let valormax = arreglo[0];

    for (let i = 0; i < arreglo.length; i++){

        if( valormax < arreglo [i]){
            valormax = arreglo[i];
        }


    }
    return valormax;
    }


console.log(compararMayor(edades));
