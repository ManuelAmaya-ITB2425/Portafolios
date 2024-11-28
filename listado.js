// scripts.js

// Función para realizar el efecto de tipeo (deletreo)
function typingEffect(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type(); // Inicia el tipo de efecto
}

// Llamar a la función typingEffect para el título "Galería de Proyectos"
window.onload = function() {
    typingEffect("galeria-titulo", "Galería de Proyectos", 100);
};

// Función para hacer girar los botones horizontalmente cuando el ratón se acerque
function rotarBoton(buttonId) {
    const boton = document.getElementById(buttonId);
    
    // propiedad de transición de botones //
    boton.style.transition = 'transform 0.5s ease';

    // Cuando el ratón entra al botón, hacer girar 360 grados alrededor del eje Y (horizontalmente)
    boton.addEventListener('mouseenter', () => {
        if (!boton.classList.contains('rotado')) {  // Asegura que no gire más de una vez
            boton.style.transform = 'rotateY(360deg)';
            boton.classList.add('rotado');  // Añadimos una clase para indicar que ya ha girado
        }
    });

    // Cuando el ratón sale, volver a la posición original
    boton.addEventListener('mouseleave', () => {
        if (boton.classList.contains('rotado')) {
            boton.style.transform = 'rotateY(0deg)';
            boton.classList.remove('rotado');
        }
    });
}

// Activamos el efecto de rotación horizontal para ambos botones
rotarBoton('button1');
rotarBoton('button2');

// Código para el menú desplegable
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');  // Añadimos o quitamos la clase 'active'
});
