/*
 Contexto Global: variables disponibles en el script.
 Importante:
 - Declarar una función.
 - Ver cómo modificar variables globales (contexto global y local)
*/

let a='Javascript'
let b=10

//Esto es una función

function my_function_to_show_scopes(){
    console.log(a,b)
    if(true){
        //Variables disponibles en este bloque
        let a='Elixir'
        let b=999
        console.log(a,b)
    }
    console.log(a,b)
}

my_function_to_show_scopes()

console.log(a,b)