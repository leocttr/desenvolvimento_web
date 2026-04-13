
const title = document.querySelector(".titulo-principal")


title.textContent = "Alterado"

title.classList.add("color-gren");

function criarElementos() {
    const container = document.getElementById("container")

    const qtdFilhos = container.children.length;

    if (qtdFilhos < 5) {

        console.log(qtdFilhos)
    

        const h3 = document.createElement("h3");

        h3.textContent = "Titulo Três";

        const p = document.createElement("p")

        p.textContent = "Um texto bala";

        const btnRemover = document.createElement("button")

        btnRemover.textContent = "Remover"

        btnRemover.addEventListener("click", removerUltElemento(container))

        container.appendChild(h3)
        container.appendChild(p)
    } else {
        container.lastChild.remove();
    }
    
}