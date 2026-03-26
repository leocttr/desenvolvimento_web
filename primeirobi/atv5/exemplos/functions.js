function soma(val1,val2) {
    
    return  val1 + val2;
}

const somaFuncAnonima = (val1, val2) => {
    if (val1 == undefined || val2 == undefined) {
        return 0;
    }

    return val1 + val2;
}
const printNome = () => console.log("Leonardo")

console.log(somaFuncAnonima(4, 6))
printNome();