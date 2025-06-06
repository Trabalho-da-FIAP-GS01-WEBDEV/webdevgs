// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// SlideShow
let currentSlide = 0;
const slides = ['../src/images/img1.jpg', '../src/images/img2.jpg', '../src/images/img3.jpg'];

function showSlide() {
    const slide = document.getElementById('slide-show');
    slide.src = slides[currentSlide];
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 5000); // troca a imagem a cada 5 seguhndos

// Validação do formulário
document.getElementById('formulario')?.addEventListener('submit', function(event) {
    const nome = document.getElementById('nome')?.value;
    const email = document.getElementById('email')?.value;

    if (!nome || !email) {
        alert("Todos os campos são obrigatórios.");
        event.preventDefault();
    }
});

// script.js

// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;

    // Respostas corretas
    const respostas = {
        q1: 'b',  // Acúmulo de água da chuva
        q2: 'a',  // Falta de drenagem urbana
        q3: 'b',  // Monitoramento dos níveis dos rios e previsão de chuvas
        q4: 'a',  // Região Norte e Nordeste
        q5: 'c',  // Todos os itens acima
        q6: 'a',  // Mudanças climáticas e impermeabilização do solo
        q7: 'a',  // Falta de drenagem adequada
        q8: 'a',  // Permite evacuação antecipada das áreas de risco
        q9: 'a',  // Centro Nacional de Monitoramento e Alertas de Desastres Naturais
        q10: 'b'  // Prevenção através de planejamento urbano e monitoramento
    };
    
    // Verificando as respostas
    for (let pergunta in respostas) {
        const resposta = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (resposta && resposta.value === respostas[pergunta]) {
            score++;
        }
    }

    // Exibe o resultado do quiz
    document.getElementById('resultado').innerHTML = `Você acertou ${score} de 10 perguntas!`;
});
