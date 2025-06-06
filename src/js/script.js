// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// SlideShow
let currentSlide = 0;
const slides = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'];

function showSlide() {
    const slide = document.getElementById('slide-show');
    slide.src = slides[currentSlide];
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 5000); // troca a imagem a cada 5 seguhndos