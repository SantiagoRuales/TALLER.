// Función para validar el nombre antes de enviar el formulario
function validateName(event) {
    var nameInput = document.getElementById("nameInput");
    var errorMessage = document.getElementById("errorMessage");
  
    if (nameInput.value.length < 3) {
      errorMessage.style.display = "block";
      event.preventDefault(); // Evitar que se envíe el formulario
    } else {
      errorMessage.style.display = "none";
    }
  }
  
  // Obtener referencia al formulario
  var form = document.getElementById("nameForm");
  
  // Asignar evento de envío al formulario
  form.addEventListener("submit", validateName);
  