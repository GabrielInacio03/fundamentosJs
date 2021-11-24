let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//OBS: Sempre priorizar constante ao invés de variaveis

isAtivo = 1
console.log(!!isAtivo)
/**
 * ! => se é falso
 * !! => se é verdadeiro
 */

console.log(!true)
console.log(!!true)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || ' ' || 0))

//contexto real
let nome = '' //false
console.log(nome || 'Desconhecido')