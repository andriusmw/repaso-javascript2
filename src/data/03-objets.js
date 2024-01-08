

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip:5646565,
        lat:14.3434,
        lng: 34.344
    }
}



console.log(persona)

//-------------------

const persona2 = {...persona};

persona2.nombre = 'Peter'

console.log(persona2);
console.log(persona)