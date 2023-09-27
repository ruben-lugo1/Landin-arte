// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function () {
    // Función para desplazamiento suave al hacer clic en los enlaces
    function smoothScroll(target, duration) {
      const targetElement = document.querySelector(target);
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  
    // Agregar evento de clic a los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        smoothScroll(targetId, 1000); // 1000 milisegundos (1 segundo) para la animación
      });
    });
  });

  // JavaScript adicional para el visor de imágenes en una ventana emergente
document.addEventListener("DOMContentLoaded", function () {
    const imagenesGaleria = document.querySelectorAll(".imagen-galeria");
    const enlacesVerEnGrande = document.querySelectorAll(".ver-en-grande");
  
    enlacesVerEnGrande.forEach((enlace, index) => {
      enlace.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarImagenEnGrande(imagenesGaleria[index].src);
      });
    });
  
    function mostrarImagenEnGrande(src) {
      const ventanaEmergente = window.open(src, "Imagen en grande", "width=800,height=600");
      ventanaEmergente.focus();
    }
  });

// JavaScript adicional para el visor de imágenes en una ventana emergente con imagen reducida y botón de cierre
document.addEventListener("DOMContentLoaded", function () {
    const imagenesGaleria = document.querySelectorAll(".imagen-galeria");
    const enlacesVerEnGrande = document.querySelectorAll(".ver-en-grande");
  
    enlacesVerEnGrande.forEach((enlace, index) => {
      enlace.addEventListener("click", function (e) {
        e.preventDefault();
        const imagenSrc = imagenesGaleria[index].src;
        mostrarImagenEnGrande(imagenSrc);
      });
    });
  
    function mostrarImagenEnGrande(src) {
      const ventanaEmergente = window.open("", "Imagen en grande", "width=800,height=600,scrollbars=yes");
      ventanaEmergente.document.write(`
        <html>
          <head>
            <title>Imagen en grande</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              img {
                max-width: 100%;
                max-height: 100%;
              }
            </style>
          </head>
          <body>
            <img src="${src}" alt="Imagen en grande">
            <a href="#" id="cerrar">Cerrar</a>
            <script>
              document.getElementById("cerrar").addEventListener("click", function(e) {
                e.preventDefault();
                window.close();
              });
            </script>
          </body>
        </html>
      `);
      ventanaEmergente.focus();
    }
  });
  