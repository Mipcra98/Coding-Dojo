document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll(".miVideo");

  // Función para reproducir el video cuando pasa el mouse sobre él
  function reproducirVideo() {
    this.play();
  }

  // Función para pausar el video cuando se retira el mouse del mismo
  function pausarVideo() {
    this.pause();
  }

  // Mostrar los videos al cargar el contenido
  videos.forEach(function (video) {
    video.style.display = "block";

    
    video.addEventListener("mouseenter", reproducirVideo);  //evento que detecta la entrada del mouse sobre el video

    video.addEventListener("mouseleave", pausarVideo);    //evento que detecta la salida del mouse de sobre el video
  });
});