let wiggle = document.querySelectorAll(
  "#ElementID_01, #ElementID_02, #ElementID_03"
);
wiggle.forEach(function (elemento) {
  const deslocamento = Math.floor(Math.random() * 20) - 1;
  const animate =
    "float " + (Math.random() * 1 + 10) + "s ease-in-out infinite";
  elemento.style.transform = "translateX(" + deslocamento + "px)";
  elemento.style.animation = animate;
});

/* Segundo grupo de animações opcional */

/*   wiggle = document.querySelectorAll("#ElementID_04, #ElementID_05, #ElementID_06");
    wiggle.forEach(function (elemento) {
      const deslocamento = Math.floor(Math.random() * 10) - 20;
      const animate = "float " + (Math.random() * 10 + 1) + "s ease-in-out infinite";
      elemento.style.transform = "translateX(" + deslocamento + "px)";
      elemento.style.animation = animate;
    }); */
