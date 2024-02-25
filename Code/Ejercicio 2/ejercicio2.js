// Obtener referencia al botón y al elemento de conteo
var button = document.getElementById("clickButton");
var clickCountDisplay = document.getElementById("clickCount");

// Inicializar contador
var clickCount = 0;

// Función para incrementar el contador y actualizar la pantalla
function incrementCounter() {
  clickCount++;
  clickCountDisplay.innerText = clickCount;
}

// Asignar evento de clic al botón
button.addEventListener("click", incrementCounter);
