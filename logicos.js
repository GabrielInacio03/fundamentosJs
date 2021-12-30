//  OU ||
// E &&


function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete //operador unário

    return {compraSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(false,false))