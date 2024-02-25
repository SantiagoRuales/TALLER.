// Función para cambiar el color de fondo de manera aleatoria
function changeColor() {
    // Obtener un color aleatorio en formato hexadecimal
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Asignar el color aleatorio al fondo del botón
    document.getElementById("colorButton").style.backgroundColor = randomColor;
  }
  
  document.getElementById("colorButton").addEventListener("click", changeColor);
  