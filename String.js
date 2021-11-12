/**
 * STRING - Cadeia de caracteres
 * 'texto'
 * "texto2" 
 */

const escola = "Cod3r"

//pegar a letra que estiver no indice 4
console.log(escola.charAt(4))

//pegar o valor do indice e retorna o valor dele de acordo com a tabela unicode codiog html
console.log(escola.charCodeAt(3)) 

//saber qual o valor de um determinado indice
console.log(escola.indexOf('3'))

//a partir do indice 1
console.log(escola.substring(1))
console.log(escola.substring(0,3))//nao inclui o indice 3

//concatenar
console.log('Escola '.concat(escola).concat("!"))

//substituir de acordo com o indice
console.log(escola.replace(3, 'e'))

//substitui tudo pela letra e
console.log(escola.replace(/\w/g, 'e'))


//convertendo string para Array
console.log('Ana,Maria,Pedro'.split(','))