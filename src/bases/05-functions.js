
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




// ------------------- FIND--------------


const existe3 = heroes.find( (heroe3) => heroe3.id === 1);
/* Some devuelve los datos o undefined sino lo encuentra
*/
console.log(existe3)
console.log(heroes)