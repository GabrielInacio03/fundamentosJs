const nome = "Rebeca";
const concatenacao =  "Olá" + nome + "!"

//template string
const template = `Olá ${nome}`

console.log(template)
//${nome} => interpolação( introdução de palavras ou frases em um texto)

//Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //funcao estranha
console.log(`Ei... ${up('cuidado')}`)
