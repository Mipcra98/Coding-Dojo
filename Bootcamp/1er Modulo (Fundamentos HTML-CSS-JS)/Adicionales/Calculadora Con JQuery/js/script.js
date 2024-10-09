$(document).ready(function () {  //Cuando se cargue el DOM, se procede con toooodo lo demás
    const display = $("#display").text();


    function clickHandler(evento) {
        const btn = evento.textContent;
        switch (btn) {
            case "C":
                clearDisplay();
                break;
            case "=":
                calculate();
                break;
            default:
                addToDisplay(btn);
        }
    }

    function clearDisplay() {
        
    }

    function calculate() {
        
    }

    function addToDisplay(dato) {
        
    }

    $("div.buttons button").click(function () { //Se crea una función que se ejecuta cuando se hace click en un botón
        clickHandler(this);
        $('#display').text('Hola');
    })
});