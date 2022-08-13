const prato = new Array(2);
const bebida = new Array(2);
const sobremesa = new Array(2);

function selecionarPrato(classePrato) {
    const pratoSelecionado = document.querySelector(".prato .selecionado")

    if (pratoSelecionado !== null) {
        const checking = document.querySelector(".selecionado .check")
        checking.classList.add("hidden")
        pratoSelecionado.classList.remove("selecionado")
    }

    const botao = document.querySelector(classePrato)
    botao.classList.add("selecionado")

    const checking = document.querySelector(`${classePrato} .check`)
    if (checking !== null) {
        checking.classList.remove("hidden")
    }
    
    const nomePrato = document.querySelector(`${classePrato} .nome-prato`)
    prato[0] = nomePrato.innerHTML;
    const valorPrato = document.querySelector(`${classePrato} .valor-prato`)
    prato[1] = valorPrato.innerHTML;
}

function selecionarBebida(classeBebida) {
    const bebidaSelecionada = document.querySelector(".bebida .selecionado")

    if (bebidaSelecionada !== null) {
        const checking = document.querySelector(".bebida .selecionado .check")
        checking.classList.add("hidden")
        bebidaSelecionada.classList.remove("selecionado")
    }

    const botao = document.querySelector(classeBebida)
    botao.classList.add("selecionado")

    const checking = document.querySelector(`${classeBebida} .check`)
    if (checking !== null) {
        checking.classList.remove("hidden")
    }

    const nomeBebida = document.querySelector(`${classeBebida} .nome-bebida`)
    bebida[0] = nomeBebida.innerHTML;
    const valorBebida = document.querySelector(`${classeBebida} .valor-bebida`)
    bebida[1] = valorBebida.innerHTML;
}

function selecionarSobremesa(classeSobremesa) {
    const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado")

    if (sobremesaSelecionada !== null) {        
        const checking = document.querySelector(".sobremesa .selecionado .check")
        checking.classList.add("hidden")
        sobremesaSelecionada.classList.remove("selecionado")
    }

    const botao = document.querySelector(classeSobremesa)
    botao.classList.add("selecionado")



    const checking = document.querySelector(`${classeSobremesa} .check`)
    if (checking !== null) {
        checking.classList.remove("hidden")
    }

    const nomeSobremesa = document.querySelector(`${classeSobremesa} .nome-sobremesa`)
    sobremesa[0] = nomeSobremesa.innerHTML;
    const valorSobremesa = document.querySelector(`${classeSobremesa} .valor-sobremesa`)
    sobremesa[1] = valorSobremesa.innerHTML;
}

/*function ativaBotao(){
    if (prato[0] !== undefined && bebida[0] !== undefined && sobremesa[0] !== undefined){
        console.log("teste");
    }
}

ativaBotao();*/