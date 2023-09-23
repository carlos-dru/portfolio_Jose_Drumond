document.addEventListener("DOMContentLoaded", function () {
    const atividades = document.querySelectorAll(".atividade");
    atividades.forEach((atividade, index) => {
        // Define os atrasos com base no índice
        const delay = (index + 1) * 1000;

        // Aplica a classe "show" após o atraso
        setTimeout(() => {
            atividade.classList.add("show");
        }, delay);
    });
});