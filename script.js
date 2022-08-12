
function selecionarPrato(classePrato) {
    const pratoSelecionado = document.querySelector(".prato .selecionado")

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado")
    }

    const seletor = "." + classePrato;
    const botao = document.querySelector(seletor)
    botao.classList.add("selecionado")
}

function selecionarBebida(classeBebida) {
    const bebidaSelecionada = document.querySelector(".bebida .selecionado")

    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado")
    }

    const seletor = "." + classeBebida;
    const botao = document.querySelector(seletor)
    botao.classList.add("selecionado")
}

function selecionarSobremesa(classeSobremesa) {
    const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado")

    if (sobremesaSelecionada !== null) {        
        const checking = document.querySelector(".selecionado .check")
        checking.classList.add("hidden")
        sobremesaSelecionada.classList.remove("selecionado")
    }

    const botao = document.querySelector(classeSobremesa)
    botao.classList.add("selecionado")



    const checking = document.querySelector(`${classeSobremesa} .check`)
    if (checking !== null) {
        checking.classList.remove("hidden")
    }
}