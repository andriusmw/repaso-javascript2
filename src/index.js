
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
