// Fico na dúvida se poderia compactar mais esse código.


const buttonConvert = document.querySelector(".botao1")

const selector = document.querySelector(".seletor1")

const selector2 = document.querySelector("#selecionador2")

const inserirValor = document.querySelector(".input1")

let valorDolar = 6

let valorEuro = 5

let valorReal = 5

const valorInicial = document.querySelector(".input2")

const valorConvertidoDolar = document.querySelector(".input3")

const imagemInicial = document.querySelector("#image1")

const imagemConvertida = document.querySelector("#image2")


// Imagens



function trocarImagem() {

    
    // Seletor 1
    
    if (selector.value === "opcao1") {

        imagemInicial.src = "./assets/brasil.png"

    }


    if (selector.value === "opcao2") {

        imagemInicial.src = "./assets/uk.png"

    }



    if (selector.value === "opcao3") {

        imagemInicial.src = "./assets/eua.png"

    }

   
    // Seletor 2
   
    if (selector2.value === "op1") {

        imagemConvertida.src = "./assets/eua.png"

    }

    if (selector2.value === "op2") {

        imagemConvertida.src = "./assets/uk.png"


    }

    if (selector2.value === "op3") {

        imagemConvertida.src = "./assets/brasil.png"


    }

}



selector.addEventListener("change", trocarImagem)
selector2.addEventListener("change", trocarImagem)


// Conversor

function Convert() {


    // Real

    if (selector.value === "opcao1" && selector2.value === "op1") {


        const resultado = inserirValor.value / valorDolar
       
       
        
        valorInicial.value =  valorConvertidoDolar.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inserirValor.value)

        
        valorConvertidoDolar.value = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    if (selector.value === "opcao1" && selector2.value === "op2") {

        valorEuro = 5

        const resultado = inserirValor.value / valorEuro

        valorInicial.value = valorConvertidoDolar.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = valorConvertidoDolar.value = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "EUR"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    if (selector.value === "opcao1" && selector2.value === "op3") {

        const resultado = inserirValor.value * 1

        valorInicial.value = valorConvertidoDolar.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = valorConvertidoDolar.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    // Euro


    if (selector.value === "opcao2" && selector2.value === "op1") {

        valorEuro = 1

        valorDolar = 2


        const resultado = inserirValor.value * valorDolar

        valorInicial.value = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "EUR"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    if (selector.value === "opcao2" && selector2.value === "op2") {

        valorEuro = 2

        valorDolar = 3

        const resultado = inserirValor.value * 1

        valorInicial.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    if (selector.value === "opcao2" && selector2.value === "op3") {


        const resultado = inserirValor.value / valorReal

        valorInicial.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }


    // Dolar

    if (selector.value === "opcao3" && selector2.value === "op1") {


        const resultado = inserirValor.value * 1

        valorInicial.value = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    if (selector.value === "opcao3" && selector2.value === "op2") {

        valorEuro = 2

        valorDolar = 3


        const resultado = inserirValor.value * valorEuro

        valorInicial.value = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "EUR"
        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }

    if (selector.value === "opcao3" && selector2.value === "op3") {

        valorReal = 6

        const resultado = inserirValor.value * valorReal

        valorInicial.value = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inserirValor.value)

        valorConvertidoDolar.value = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(resultado)

        valorInicial.style.borderColor = "#FFD54B";
        valorConvertidoDolar.style.borderColor = "#FFD54B";

    }


}

buttonConvert.addEventListener("click", Convert)


// Sumir Valor

const opc1 = document.querySelector("#opcao1")
const opc2 = document.querySelector("#opcao2")
const opc3 = document.querySelector("#opcao3")

const opt1 = document.querySelector("#op1")
const opt2 = document.querySelector("#op2")
const opt3 = document.querySelector("#op3")

const selecionee = document.querySelector("#selecione")

const selecione2 = document.querySelector("#selecione2")

function selectConvertValorRemove(){

    // Seletor 1
    
    if( selector.value === "opcao1" ){

        opt3.style.display = "none";

        opt1.style.display = "block";

        opt2.style.display = "block";

        selecionee.style.display = "none"

    }

    if(selector.value === "opcao2"){

        opt2.style.display = "none";

        opt1.style.display = "block";

        opt3.style.display = "block";

        selecionee.style.display = "none";

    }

    if(selector.value === "opcao3"){

        opt1.style.display = "none";

        opt2.style.display = "block";

        opt3.style.display = "block";

        selecionee.style.display = "none";

    }

    // Seletor 2 

    if(selector2.value === "op1" ){

        opc3.style.display = "none";

        opc2.style.display = "block";

        opc1.style.display = "block";

        selecione2.style.display = "none";
        

    }

    if(selector2.value === "op2"){

        opc2.style.display = "none";

        opc1.style.display = "block";

        opc3.style.display = "block";

        selecione2.style.display = "none";

    }

    if(selector2.value === "op3"){

        opc1.style.display = "none";

        opc2.style.display = "block";

        opc3.style.display = "block";

        selecione2.style.display = "none";

    }

}

  




selector.addEventListener("change", selectConvertValorRemove)
selector2.addEventListener("change", selectConvertValorRemove)















