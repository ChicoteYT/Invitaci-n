// scripts.js

// Este es el lugar para añadir la interactividad a tu página.
// Por ejemplo, podrías manejar el envío de formularios, animaciones al hacer scroll,
// o peticiones a una API para cargar contenido dinámicamente.

document.addEventListener('DOMContentLoaded', () => {
  console.log('El documento está listo y el DOM ha sido cargado.');

  // Ejemplo: Podrías añadir un efecto a los botones
  const allButtons = document.querySelectorAll('.main-button, .link-button');
  allButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.98)';
    });
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
});