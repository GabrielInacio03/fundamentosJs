//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'RUA ABC',
        numero: 1000
    }
}

//Destructuring
const { nome: varNome, idade: varIdade} = pessoa
console.log(varNome, varIdade)
console.log(pessoa.endereco)

//atributos que nao existem
const { sobrenome, bemHumorada = 'não atribuida' } = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)