
function saludar(nombre) {
    return 'Hola ' + nombre
}

let nombre = "Tony"
console.log(saludar(nombre))


//------------ arrow functions -------------


const saludar2 = (nombre) => {
    return 'Hola ' + nombre
} 

console.log(saludar2(nombre))


const saludar3 = (nombre) =>  'Hola ' + nombre
//Si solo devuelve una línea se puede poner así

console.log(saludar3(nombre))

// ---------------------------

const getUser = () => {
    return {
        uid: "ABC123",
        username: "Tony001"
    }
}

console.log(getUser())


const heroes = [
    {
        id:1,
        name: "Batman"
    },
    {
        id:2,
        name: "Superman"
    },

]

const existe = heroes.some( (heroe) => heroe.id === 1);
/*some recorre el array y a cada elemento lo llama como
dentro del paréntesis rosa, heroe en este caso, entonces 
ya podemos acceder al id de cada elemento y comprobar que sea
1. Some devuelve TRUE OR FALSE
*/
console.log(existe)

//---------------------

const existe2 = heroes.map( (heroe) => {
    heroe.id = heroe.id + 3;
    return "Hola " + heroe.id + " " + heroe.name
}
 );
/*
dentro del arrow function podemos hacer instrucciones.
La función map recorre el array creándo uno nuevo con 
los valores anteriores, así podemos modificar esos valores
y conservar ambos arrays. En este ejemplo hemos combinado
las dos sintaxis.
*/
console.log(existe2)




