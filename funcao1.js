//funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(4,2)

//funcao com retorno

function soma(a, b=0){
    return a+b
}
console.log(soma(3,2))