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
