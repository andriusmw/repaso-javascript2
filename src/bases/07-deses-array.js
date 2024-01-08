const characters =["Goku","Vegeta","Trunks"]
/*
const G = characters[0]
const V = characters[1]
const T = characters[2]
*/

const [G,V,T] = characters
//Se puede hacer de-structuring de arrays igual que de
//objetos, teniendo en cuenta el orden y cambiando las llaves

//const [,,T] = characters -->si solo quiero el tercero necesito poner
//los dos primeros con espacio

console.log(G, V, T)



