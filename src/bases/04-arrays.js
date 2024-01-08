

const arreglo = [1,2,3,4] // arrays
// const arreglo = new Array(100)


console.log(arreglo)
console.log(arreglo[0])

arreglo.push(5)

console.log(arreglo)

const arreglo2 = arreglo

arreglo2.push(6)

console.log(arreglo)
console.log(arreglo2)

//Al usar el operador = estamos apuntando 
// al mismo espacio de memoria, con lo cual
// estamos creando una nueva const que apunta
// al mismo espacio de memoria, con lo que
//cualquier cambio en arreglo se verá en arreglo2 tambien y vb


//-----------  Spread -----------------

const arreglo3 = [...arreglo]
arreglo3.push(7)
console.log(arreglo3)

// -------------- map

const arreglo4 = arreglo2.map( function(n){
    return n * 2
})

console.log(arreglo4)
/* 
El map recorre el array y devuelve los valores
guardándolos en un nuevo array con nueva posición 
de memoria independiente del primero.

n son los valores, podemos operarlo
*/