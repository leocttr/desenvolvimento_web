
// const aluno = {
//     nome: "Leonardo",
//     idade: 19,
//     curso: "Eng. Software",
//     matriculaAtiva: true,
//     endereco: {
//         rua: "Messias Abrãao",
//         numero: 91
//     }
// }

// console.log(aluno.nome);
// console.log(aluno.endereco.rua);

const listaFrutas = ["Uva","Laranja","Banana","Abacate"]


console.log(listaFrutas)

function soma(val1,val2) {
    return  val1 + val2;
}

function subtracao(val1,val2) {
    return  val1 - val2;
}

function calculos(func1,func2) {
    return func1 + func2;
}

const printF = function printarMeuNome () {
    console.log("Leonardo");
}
printF();

console.log(soma(4,3))
console.log(calculos(soma(4,3), soma(4,3)))

// exemplo
const valorUm = 47;
const valorDois ="47";

if (valorUm === valorDois) {
    console.log("É igual!")
}