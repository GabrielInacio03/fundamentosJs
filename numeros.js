const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

/*
    isInteger - Verificar se a variavel é um inteiro retornando true ou false
*/
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // quantidade de casas decimais
console.log(media.toString()) //retorna o valor como uma string
console.log(media.toString(2)) // retorna o valor como binario


