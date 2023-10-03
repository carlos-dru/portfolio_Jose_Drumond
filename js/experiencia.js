function destacarDescricao(profissao) {
    if (profissao == 'QA') {
        var divDescricao = document.getElementById("descricaoExperienciaQA");
        divDescricao.classList.add("destacarDescricaoExperiencia");
        divDescricao.classList.remove("escurecerDescricaoExperiencia");
        console.log("Testando QA");
    } else if (profissao == 'PO') {
        var divDescricao = document.getElementById("descricaoExperienciaPO");
        divDescricao.classList.add("destacarDescricaoExperiencia");
        divDescricao.classList.remove("escurecerDescricaoExperiencia");
        console.log("Testando PO");
    }
}

function sombrearDescricao(profissao) {
    if (profissao == 'QA') {
        var divDescricao = document.getElementById("descricaoExperienciaQA");
        divDescricao.classList.add("escurecerDescricaoExperiencia");
        divDescricao.classList.remove("destacarDescricaoExperiencia");
        console.log("Testando QA");
    } else if (profissao == 'PO') {
        var divDescricao = document.getElementById("descricaoExperienciaPO");
        divDescricao.classList.add("escurecerDescricaoExperiencia");
        divDescricao.classList.remove("destacarDescricaoExperiencia");
        console.log("Testando PO");
    }
}