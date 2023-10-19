function enviarEmail() {
    var mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.classList.add("mensagemExibida");
    mensagemSucesso.classList.remove("mensagemOcultada");
    var campoEmail = document.getElementById("campoEmail");
    campoEmail.value = "";
}

function ocultarMensagem() {
    var mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.classList.remove("mensagemExibida");
    mensagemSucesso.classList.add("mensagemOcultada");
}