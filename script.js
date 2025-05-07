// Este script es para el scroll suave que ya está implementado con CSS
// No es necesario código adicional para el scroll suave, pero si quieres personalizar el comportamiento puedes hacerlo aquí.

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
