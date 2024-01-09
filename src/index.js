const miPromesa = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Tenemos un valor en la promesa")
        }, 1000);

    })
}



console.log("Inicio")

miPromesa.then(console.log)

console.log("Fin")