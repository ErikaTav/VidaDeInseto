var vidas = 2
function validaResposta(respostaCerta, proximaPagina) {

    while (!false) {
        if (vidas < 1) {
            alert("GAME OVER")
            window.location.href = "../index.html"
            break;
        }
        var resposta = prompt("Digite aqui");
        if (resposta.toLowerCase() == respostaCerta) {
            window.location.href = proximaPagina
            break;
        } else {
            vidas = vidas - 1
            alert(`Você errou\n Suas vidas: ${vidas}`)
        }
    }
}