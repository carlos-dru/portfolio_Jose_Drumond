// JOSÉ DRUMOND - RU 3820241
//Exibindo alerta de sucesso e limpando o campo de e-mail
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