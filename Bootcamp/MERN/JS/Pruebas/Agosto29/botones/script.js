document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('click', function (e) {
        if (e.target.id === 'alertButton') {
            toggleBoxColor();
        } else if (e.target.id === 'toggleButton') {
            toggleDayNightMode();
        }
    });
});

function toggleDayNightMode() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;
    if (currentColor === 'rgb(249, 249, 249)' || currentColor === '') {
        // Cambiar a modo noche
        body.style.backgroundColor = '#333'; // Cambiar el color de fondo a modo noche
    } else {
        // Cambiar a modo día
        body.style.backgroundColor = '#f9f9f9'; // Cambiar el color de fondo a modo día
    }
}

function toggleBoxColor() {
    var hoverBox = document.getElementById('hoverBox');
    var currentColor = hoverBox.style.backgroundColor;
    if (currentColor === 'rgb(76, 175, 80)') {
        hoverBox.style.backgroundColor = '#f39c12'; // Cambio en el color de fondo
    } else {
        hoverBox.style.backgroundColor = '#4CAF50'; // Cambio en el color de fondo
    }
}