// -------------EJEMPLO PROMESA BÁSICA --------------
/*
console.log("Inicio")

new Promise( (resolve, reject) => {


    console.log("Cuerpo de la promesa")
   // resolve("Promesa resuelta")
    reject("Promesa resuelta con error")
    //Error personalizado--> lo manda al catch

}).then(msg => console.log(msg))
//el then se hace después de ejectarse todo el archiv
// mira lo que queda pendiente
.catch(err => console.log(err))

console.log("Fin") 

*/

//--------------- Promesa async + timeout -----------
import {getHeroById} from './bases/08-imp-exp'

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroById( id )

            if(hero) {
                resolve( hero )
            } else {
                reject("El héroe no existe")
            }

        }, 1000);

    })
}

getHeroByIdAsync(2)
    .then( hero => console.log("El héroe es: " + hero.name))
    .catch(console.log)