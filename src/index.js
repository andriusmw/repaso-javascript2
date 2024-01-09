const miPromesa = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Tenemos un valor en la promesa")
        }, 1000);

    })
}

// función async
const medirTiempoAsync =  async() => {
    console.log("Inicio")

     const respuesta = await miPromesa()
     console.log(respuesta)
    
    console.log("Fin")
    return "fin de medir tiempo async"
   //throw "Error en medirTiempoAsync"

}

medirTiempoAsync()
    .then( valor => console.log(valor))
    .catch(err => console.log(err))
//Cuando la promesa falla, (como las de mi ex)
// salta el throw y lo recibe el catch