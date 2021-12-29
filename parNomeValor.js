//par nome/valor
// par chave/valor

const saudacao = 'Opa' //contexto léxico => local que sua variavel foi definida no código

function exec(){
    const saudacao = 'falaaa'
    return saudacao
}

const cliente = {
    nome: 'Gabriel',
    idade: 19,
    peso: 63,
    endereco: {
        logradouro: '',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
