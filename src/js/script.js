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