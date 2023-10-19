// JOSÉ DRUMOND - RU 3820241
// Criando método para fazer a animação de "fade down" nos itens de formação
document.addEventListener("DOMContentLoaded", function () {
    const formacoes = document.querySelectorAll(".formacao");
    formacoes.forEach((formacao, index) => {
        // Define os atrasos com base no índice
        const delay = (index + 1) * 1000;

        // Aplica a classe "show" após o atraso
        setTimeout(() => {
            formacao.classList.add("show");
        }, delay);
    });
});