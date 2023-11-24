const texto = document.querySelectorAll("p");

const alturaLinha = parseInt(window.getComputedStyle(texto).lineHeight);
const linhasDesejadas = 2;
const alturaMaxima = alturaLinha * linhasDesejadas;

if (texto.clientHeight > alturaMaxima) {
    while (texto.clientHeight > alturaMaxima) {
        texto.textContent = texto.textContent.replace(/\W*\s(\S)*$/, "...");
    }
}
