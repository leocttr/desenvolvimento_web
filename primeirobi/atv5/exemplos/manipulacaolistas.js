const listaFrutas = ["Uva","Laranja","Banana","Abacate"]
const listaFrutasMaisMorango = [...listaFrutas, "Morango"];
console.log(listaFrutasMaisMorango)

const listaAbacate = listaFrutas.map( fruta => fruta + "Abacate");
console.log(listaAbacate);

const listaLaranjas = listaFrutas.filter(fruta => fruta == "Laranja");

console.log(listaLaranjas);

const transacoesConta = [20, 10, 40, 100];

const valorTotal = transacoesConta.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual
);

console.log(valorTotal)