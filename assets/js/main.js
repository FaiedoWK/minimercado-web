// Contador de Ofertas
function atualizaOferta() {
    const agora = new Date();
    const fimOferta = new Date();
    fimOferta.setHours(23, 59, 59); // Oferta termina à meia-noite
    
    const diff = fimOferta - agora;
    const horas = Math.floor(diff / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("contador-oferta").innerHTML = 
        `⏰ Promoção termina em: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

setInterval(atualizaOferta, 1000);

// Inicializa tooltips do Bootstrap
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});