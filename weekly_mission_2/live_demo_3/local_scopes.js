/*
	Contexto local: definir variables dentro de funciones, fuera de ahí no estarán disponibles.
*/

function my_function_to_keep_local_values(){
    const my_age=27
    console.log(my_age)
}

if(true){
    const my_age=27
    console.log(my_age)
}

for(let index=0; index < 3; index++){
    console.log(index)
}