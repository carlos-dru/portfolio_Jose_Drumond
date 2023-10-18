// Criando método para fazer a animação de "fade down" nos itens de formação
document.addEventListener("DOMContentLoaded", function () {
    const experiencias = document.querySelectorAll(".experiencia");
    experiencias.forEach((experiencia, index) => {
        // Define os atrasos com base no índice
        const delay = (index + 1) * 1000;

        // Aplica a classe "show" após o atraso
        setTimeout(() => {
            experiencia.classList.add("show");
        }, delay);
    });
});

