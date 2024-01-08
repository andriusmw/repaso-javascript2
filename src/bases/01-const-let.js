

// ------------------ consts ------------------


const nombre = 'Tony'
const apellido = 'Stark'

console.log(nombre, apellido)

if (true) {
    const nombre = 'Peter'
    console.log(nombre)
    // las dos constantes se llaman igual pero 
    // aquí me muestra la del scope, en vue, sino estuviera
    // definida subiría arriba y mostraría Tony, en otros frameworks
    // saldría undefined.
}

//---------------------- let--------------------

let nombre2 = 'Tony2'


console.log('nombre2 = ' + nombre2)

if (true) {
    nombre2 = 'Peter2'
    console.log(nombre2)
   
}