$("button").click(function () {
    alert("¡Has hecho clic en un botón!");
    $(".box").slideDown()
});

$(document).ready(function () {
    $(".box").hover(
        function () {
            $(this).addClass("hovered");
            $(this).fadeOut();
        },
        function () {
            $(this).removeClass("hovered");
            // $(this).slideDown();
        }
    );
});