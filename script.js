function mostrarInformacion(id) {
    // Primero, ocultar toda la información dinámica
    const infoElements = document.querySelectorAll('.informacion-dinamica');
    infoElements.forEach(element => {
        element.style.display = 'none';
    });

    // Luego, mostrar solo la información correspondiente al botón presionado
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'block';
    }
}