const nombre = 'Harry'
const apellido = 'Potter'

const nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// ------------------------ Template Strings --------------

const nombreCompleto2 = `${nombre} ${apellido}`
console.log(nombreCompleto2)
console.log(`Resultado: ${1 + 4}`)

function getSaludo(nombre) {
    return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
//nombre está definido arriba con valor: Harry

