# Wiggle

Esse código aplica uma animação de "Flutuação" a elementos específicos do DOM. Primeiro, ele seleciona os elementos pelos IDs e aplica a eles um deslocamento aleatório no eixo X e uma animação com duração aleatória.

<a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210368404-216273fb-c930-453e-b32b-e3614872eba3.png" width="100%"/></a><br>

## **Configurações**

O código abaixo fixa o primeiro bloco de uma página na plataforma Greatpages. Copie e cole no menu de configurações da página.

<br><a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210372197-a1d41894-8acc-470b-ac38-2bd1ee0a4ed9.png" width="100%"/></a><br>

```html

<style>

    @keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.float {
  animation: float 2s ease-in-out infinite;
}
</style>


<script>
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

  // Name: Wiggle for Greatpages.
  // Version: 1.0.0
  // Copyright© : Claiton Lemes
```
