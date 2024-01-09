import heroes from '../data/heroes'


//console.log(heroes)


//getHeroById (id)
//Arrow function
//find
export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id)
    /* en el find busca un héroe cuyo id comparado con
    el argumento que recibe sea true*/
}
//console.log(getHeroById(2))


//getHeroByOwner ("DC","Marvel")
//Arrow function
//filter

export const getHeroByOwner= (owner) => {
    return heroes.filter(hero => hero.owner === owner)
}
//console.log(getHeroByOwner('DC'))


//--------------------------------------

/* esto iría en el index con la ruta actual 

import {getHeroById, getHeroByOwner} from './bases/08-imp-exp'


console.log(getHeroById(2))
console.log(getHeroByOwner('DC'))

*/