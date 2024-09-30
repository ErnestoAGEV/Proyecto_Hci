let image = document.getElementById('image');
let gridSize = 100;
let positionX = 0; // Columna inicial
let positionY = 0; // Fila inicial

function updateImagePosition() {
    image.style.left = `${positionX * gridSize}px`;
    image.style.top = `${positionY * gridSize}px`;
}

document.addEventListener('keydown', function(event) {
    // Detectar flechas del teclado
    switch (event.key) {
        case 'ArrowUp':
            if (positionY > 0) {
                positionY--; // Mueve hacia arriba
            }
            break;
        case 'ArrowDown':
            if (positionY < 5) {
                positionY++; // Mueve hacia abajo
            }
            break;
        case 'ArrowLeft':
            if (positionX > 0) {
                positionX--; // Mueve hacia la izquierda
            }
            break;
        case 'ArrowRight':
            if (positionX < 5) {
                positionX++; // Mueve hacia la derecha
            }
            break;
    }
    updateImagePosition();
});
