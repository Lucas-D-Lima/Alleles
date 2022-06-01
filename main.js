console.log("Bem vindo ao Alelos-gen")

const genInfos = {
    possibleAlelos: ['A', 'a'], //Lista de alelos possiveis, para começar pequeno vamos começar com dois
    genSimulation: 2, //Esse é o numeros de geraçoes que será simulado
    gen1Family: ['AA', 'aa'], //Essa são os dois primeiros individuos da primeira geração
    familySize : 2 //Esse é o tamanho maximo de filhos que uma familia pode ter
};

function SegregationAndMultiplication(father, mother){
    const typesOfAlleles = father.length-1

    const family = [];

    for(let i = 0; i< typesOfAlleles*2; i++){
        for(let j = 0; j<2; j++){
            const child = father[j]+mother[i]
            family.push(child)
        }
    }

    return family
}

/*for(let i = 0; i < genInfos.genSimulation; i++){

}*/

console.log(SegregationAndMultiplication('Aa', 'aa'))


console.table(genInfos)
