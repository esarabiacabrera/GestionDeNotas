let tarjetaRegistro = document.getElementById("registro");
let tarjetaMaterias = document.getElementById("materias");
let tarjetaUsuarios = document.getElementById("usuarios");

tarjetaRegistro.addEventListener("mouseover", efectoAumentar);
tarjetaRegistro.addEventListener("mouseout", disableAumentar);
tarjetaMaterias.addEventListener("mouseover", efectoAumentar);
tarjetaMaterias.addEventListener("mouseout", disableAumentar);
tarjetaUsuarios.addEventListener("mouseover", efectoAumentar);
tarjetaUsuarios.addEventListener("mouseout", disableAumentar);

function efectoAumentar() {
  let tarjeta = document.getElementById(this.id);
  tarjeta.style.transform = "scale(1.05)";
  tarjeta.style.transitionDuration = "500ms";
}

function disableAumentar() {
  let tarjeta = document.getElementById(this.id);
  tarjeta.style.transform = "scale(1)";
}
