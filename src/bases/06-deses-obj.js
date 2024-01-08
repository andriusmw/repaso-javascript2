
const person = {
    name: "Tony",
    age: 45,
    codeName: "IronMan",
    power: "Money"
}

console.log(person.name)

const {age, name, codeName, power = "No tiene poder"} = person
// de-structuring, saca las propiedades de de un objeto
// y las hace accesibles
// permite poner valores por defecto en caso de undefined, como el power


console.log(age) 
console.log(power)

// --------------------------------------------

const createHero = (person ) => {
    //también puedes desestructurar dentro de línea 22
    // en el paréntesis

    const {name, age, codeName, power } = person

    return {
        id:23243442,
        name: name, // or name , directamente sin los : 
        //porque se llama igual la propiedad que la variable
        age: age,
        codeName: codeName,
        power: power,
    }
}

console.log( createHero( person))