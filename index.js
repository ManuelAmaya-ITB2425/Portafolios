document.addEventListener('mousemove', function(event) {
    // Obtener la posición del ratón
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Obtener las caras y los ojos
    const caras = document.querySelectorAll('.muneco');

    // Recorrer cada muñeco para actualizar la posición de los ojos
    caras.forEach(function(muneco) {
        const cara = muneco.querySelector('div');
        const ojos = cara.querySelectorAll('.ojo');
        
        // Obtener las coordenadas de la cara
        const rect = cara.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calcular el ángulo entre el ratón y el centro de la cara
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);

        // Mover cada ojo hacia la dirección del ratón
        ojos.forEach(function(ojo) {
            const distance = 15; // distancia que los ojos se mueven (puedes ajustar esto)
            const eyeX = Math.cos(angle) * distance;
            const eyeY = Math.sin(angle) * distance;
            
            ojo.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
        });
    });
});

const formulario = document.querySelector('.formulario');
const inputs = formulario.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = 'green';
        } else {
            this.style.borderColor = 'red';
        }
    });
});

// Función para cambiar las imágenes cuando se activa o desactiva el modo oscuro
function toggleDarkModeImages() {
    const images = document.querySelectorAll('.apartado img');

    // Verificar si el cuerpo tiene la clase 'dark-mode'
    const isDarkMode = document.body.classList.contains('dark-mode');

    images.forEach(img => {
        // Recuperar la URL original desde 'data-src' (si no existe, la URL actual de la imagen será la original)
        const originalSrc = img.getAttribute('data-src') || img.src.split('?')[0]; // Si no tiene 'data-src', usamos la URL actual

        // Obtener la imagen para el modo oscuro desde el atributo 'data-dark-src'
        const darkImage = img.getAttribute('data-dark-src');

        if (isDarkMode) {
            // Si está en modo oscuro, cambiar la imagen a la versión oscura
            img.src = darkImage;
        } else {
            // Si está en modo claro, volver a la imagen original
            img.src = originalSrc;
        }
    });
}

// Agregar evento al cambio del tema
const toggleCheckbox = document.getElementById('toggle-theme');
toggleCheckbox.addEventListener('change', function() {
    // Cambiar el modo oscuro en el body
    document.body.classList.toggle('dark-mode');
    document.querySelector('.formulario').classList.toggle('dark-mode');
    
    // Llamar a la función para cambiar las imágenes
    toggleDarkModeImages();
});

// Llamar a la función al cargar la página para aplicar la imagen correcta si el tema ya está activado
if (document.body.classList.contains('dark-mode')) {
    toggleDarkModeImages();
}

const apartados = document.querySelectorAll('.apartado');

apartados.forEach(apartado => {
    apartado.addEventListener('mouseover', function() {
        apartado.style.transform = 'scale(1.1)';
        apartado.style.transition = 'transform 0.3s ease';
    });

    apartado.addEventListener('mouseout', function() {
        apartado.style.transform = 'scale(1)';
    });
});

document.querySelector('.hamburger-icon').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
});
