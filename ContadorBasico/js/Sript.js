// Funciones para manipular el contador
let contador = 0;

function incrementar() {
  contador++;
  actualizarContador();
}

function decrementar() {
  contador--;
  actualizarContador();
}

function resetear() {
  contador = 0;
  actualizarContador();
}

function actualizarContador() {
  document.getElementById('contador').innerText = contador;
}
