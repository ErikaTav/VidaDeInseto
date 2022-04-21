function link(){
    window.location.href="instrucoes.html";
}


function validaResposta(){
    var resposta=prompt("Digite a resposta")
    if(resposta =="1"){
        alert("Resposta correta!")
        location.assign('francis2.html')
    }else{
        alert("Resposta errada tente novamente")
    }
}

function validaResposta2(){
    var resposta=prompt("Digite a resposta")
    if(resposta =="2"){
        alert("Resposta correta!")
        location.assign('francis3.html')
    }else{
        alert("Resposta errada tente novamente")
    }
}
function validaResposta3(){
    var resposta=prompt("Digite a resposta")
    if(resposta =="2"){
        alert("Resposta correta!")
        location.assign('finalfrancis.html')
    }else{
        alert("Resposta errada tente novamente")
    }
}