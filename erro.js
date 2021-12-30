function tratarErroELancar(erro){
    throw new Error('Ocorreu algum erro..')
}
function imprimirNomeGritando(obj){
    try
    {
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e)
    {
        tratarErroELancar(e)
    }
    
}

const obj = {nome: 'Gabriel'}
imprimirNomeGritando(obj)