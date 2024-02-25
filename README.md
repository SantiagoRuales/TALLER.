# TALLER DE EJERCICIOS
Este taller práctico ofrece a los estudiantes la oportunidad de poner en práctica sus conocimientos sobre el manejo de eventos en JavaScript. A través de una serie de ejercicios, los participantes explorarán en detalle cómo utilizar addEventListener para capturar eventos específicos en el navegador. Además, se enfocarán en la manipulación del objeto event para acceder a información relevante sobre la interacción del usuario. Con un énfasis en comprender el modelo de eventos en el navegador, los estudiantes desarrollarán habilidades prácticas para crear interacciones dinámicas y receptivas en aplicaciones web.

### 1. Boton Cambiante de Numero
En este ejercicio hemos creado un botón que cambia de color cada vez que se hace clic en él. Hemos utilizado tanto la asignación dinámica de eventos como la asignación mediante atributo HTML (onclick) para lograr este efecto. El cambio de color se realiza de manera aleatoria para darle un aspecto dinámico y sorprendente a la interacción del usuario. Cuando el botón es clicado, se activa una función en JavaScript que genera un color aleatorio y lo aplica como el nuevo color de fondo del botón, proporcionando una experiencia visualmente atractiva para el usuario.

### 2. Contador de Clics
En este ejercicio la página implementa un contador de clics que se incrementa cada vez que se hace clic en un botón. Se utiliza la propiedad innerText para actualizar visualmente el número de clics en la página. La asignación de eventos se realiza mediante addEventListener, lo que permite manejar los clics en el botón de manera eficiente y modular. Cada vez que se hace clic en el botón, el contador se incrementa y se actualiza en la página automáticamente.

### 3. Validacion de Formulario
En este ejercicio El formulario solicita al usuario que ingrese su nombre. Se utiliza JavaScript para validar que el nombre tenga al menos 3 caracteres antes de enviar el formulario. Se emplean eventos para capturar el momento en que el usuario intenta enviar el formulario, y si la validación no se cumple, se muestra un mensaje de error indicando que el nombre debe tener al menos 3 caracteres. Esto garantiza que la información ingresada sea válida antes de ser procesada o enviada.

### 4. Galeria de Imagenes
En este ejercicio La galería de imágenes permite al usuario hacer clic en miniaturas para actualizar la imagen principal mostrada. Se emplean eventos de clic para manejar la interacción. Esto se puede lograr mediante un bucle que itera sobre un array de imágenes, donde cada miniatura está asociada a una imagen específica. Cuando se hace clic en una miniatura, se actualiza la imagen principal con la imagen correspondiente. Esto proporciona una experiencia interactiva donde el usuario puede explorar fácilmente diferentes imágenes dentro de la galería.

### 5. Menu de Navegacion Interactivo
En este ultimo ejercicio el menú de navegación consta de al menos tres enlaces (Inicio, Acerca de y Contacto) y al pasar el ratón sobre cada enlace, se implementa un efecto visual, como un cambio de color o resaltado. Esto se logra utilizando eventos de ratón para detectar cuando el cursor del ratón entra y sale del área del enlace. Además, se añade una transición suave para mejorar la experiencia del usuario, lo que significa que el cambio de estilo se realiza de forma gradual y no brusca, haciendo que la interacción sea más agradable y estética. Esto proporciona una experiencia de navegación más atractiva y fácil de usar para los usuarios.

## Como iniciar
1. Descarga la carpeta code, encontraras los codigos de los anteriores ejercicios con su respectivos `ejercicio.html`, `ejercicio.js` y `ejercicio.css`
2. Abre las carpetas deacuerdo al ejercicio que quieras observar
3. Ejecutar en cualquier navegador que tengamos disponible en nuestro computador
4. Tener en cuenta que los archivos que se van a ejecutar son los `html` ejemplo `ejercicio1.html` , `ejercicio2.html` y asi sucesivamente.

## Descripcion De Los Codigos

### Primer Archivo `ejercicio1.html`

```
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cambio de Color</title>
<link rel="stylesheet" type="text/css" href="ejercicio1.css">
</head>
<body>
  <button id="colorButton">Cambiar Color</button>

  <script src="ejercicio1.js" defer></script>
</body>
</html>
```
- `<title>Cambio de Color</title>`: Establece el título de la página que se muestra en la pestaña del navegador.
- `<link rel="stylesheet" type="text/css" href="ejercicio1.css">` Enlaza una hoja de estilo externa llamada "ejercicio1.css" para aplicar    estilos a la página.
- `<body>` Esta sección contiene el contenido visible de la página.
- `<button id="colorButton">Cambiar Color</button>`: Crea un botón con el texto "Cambiar Color" y un identificador único "colorButton".
- `<script src="ejercicio1.js" defer></script>`: Enlaza un archivo JavaScript externo llamado `ejercicio1.js` y utiliza el atributo defer para asegurarse de que el script se ejecute después de que se haya cargado el contenido de la página. Este script manejará el cambio de color cuando se haga clic en el botón.

### Primer Archivo `ejercicio1.css`

```
# colorButton {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  ```
- `#colorButton`: Esto es un selector de ID en CSS. Se refiere a un elemento con el ID "colorButton". En el HTML que proporcionaste, este ID se asigna al botón "Cambiar Color".

- `{`: Indica el comienzo de un bloque de declaración de estilo para el elemento seleccionado.

- `padding`: 10px 20px;: Establece el relleno (padding) del botón. El primer valor, 10px, se refiere al relleno superior e inferior, mientras que el segundo valor, 20px, se refiere al relleno izquierdo y derecho. Esto crea un espacio dentro del botón entre su contenido y sus bordes.

- `font-size: 16px;`: Define el tamaño de la fuente del texto dentro del botón como 16 píxeles. Esto determina la altura del texto dentro del botón.

- `cursor: pointer;`: Esto establece el cursor del mouse cuando está sobre el botón. En este caso, se establece como "pointer", lo que indica que el cursor cambiará a una mano, indicando que el botón es interactivo y se puede hacer clic en él.

- `}`: Cierra el bloque de declaración de estilo.

### Primer Archivo `ejercicio1.js`

```
// Función para cambiar el color de fondo de manera aleatoria
function changeColor() {
    // Obtener un color aleatorio en formato hexadecimal
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Asignar el color aleatorio al fondo del botón
    document.getElementById("colorButton").style.backgroundColor = randomColor;
  }
  
  document.getElementById("colorButton").addEventListener("click", changeColor);
```

- `function changeColor() {`: Esto define una función llamada changeColor() que se encarga de cambiar el color de fondo del botón.

- `var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);`: Esta línea genera un color aleatorio en formato hexadecimal.

- `Math.random()`: Genera un número aleatorio entre 0 y 1 (exclusivo).

- `Math.floor()`: Redondea hacia abajo el número resultante, convirtiéndolo en un número entero.

- `* 16777215`: Multiplica el número aleatorio por 16777215, que es el valor máximo que se puede obtener al convertir el color RGB más alto (255) a hexadecimal (FFFFFF).

- `.toString(16)`: Convierte el número en una cadena en base 16 (hexadecimal). Esto generará un número hexadecimal de 6 dígitos.

- `'#' + ...`: Concatena el signo "#" con el número hexadecimal generado, creando así una cadena que representa un color en formato hexadecimal válido.

- `document.getElementById("colorButton").style.backgroundColor = randomColor;`: Esta línea cambia el color de fondo del botón con ID "colorButton" al color aleatorio generado. Se accede al estilo del botón utilizando document.getElementById("colorButton").style y se cambia la propiedad backgroundColor a randomColor.

`document.getElementById("colorButton").addEventListener("click", changeColor);`: Esta línea agrega un evento de escucha al botón con ID "colorButton". Cuando se haga clic en este botón, se ejecutará la función changeColor(). Esto significa que cada vez que se haga clic en el botón, se generará un nuevo color aleatorio y se cambiará el color de fondo del botón.

### Segundo Archivo `ejercicio2.html`

```
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contador de Clics</title>
<link rel="stylesheet" type="text/css" href="ejercicio2.css">
</head>
<body>
  <button id="clickButton">Haz clic aquí</button>
  <p>Contador de clics: <span id="clickCount">0</span></p>

  <script src="ejercicio2.js" defer></script>
</body>
</html>
```
- `<head>`: Aquí se incluyen metadatos y enlaces a recursos externos como CSS y JavaScript.

- `<title>Contador de Clics</title>`: Establece el título de la página que se mostrará en la pestaña del navegador.

- `<link rel="stylesheet" type="text/css" href="ejercicio2.css">`: Enlaza un archivo CSS externo llamado "ejercicio2.css" que contiene estilos para la página.

- `<body>`: Aquí se encuentra el contenido visible de la página.

- `<button id="clickButton">Haz clic aquí</button>`: Un botón con el texto "Haz clic aquí" y un atributo id establecido como "clickButton". Este botón se utilizará para registrar los clics.

- `<p>Contador de clics: <span id="clickCount">0</span></p>`: Un párrafo que muestra el texto "Contador de clics:" seguido de un elemento span con un atributo id establecido como "clickCount". El contenido inicial de este span es "0", que es el valor inicial del contador de clics.

- `<script src="ejercicio2.js" defer></script>`: Enlaza un archivo JavaScript externo llamado "ejercicio2.js" que contiene código para manejar el contador de clics. El atributo defer indica que el script se ejecutará después de que se analice el documento HTML, lo que garantiza que tenga acceso a todos los elementos HTML definidos anteriormente.

### Segundo Archivo `ejercicio2.css`

```
/* Estilos para el botón */
#clickButton {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  /* Estilos para el contador de clics */
  #clickCount {
    font-weight: bold;
  }
```
- `#clickButton`: Este selector aplica estilos al botón con el id "clickButton".

- `padding: 10px 20px;`: Establece un relleno interno de 10 píxeles en la parte superior e inferior y 20 píxeles en los lados izquierdo y derecho del botón. Esto crea un espacio alrededor del texto dentro del botón.

- font-size: 16px;: Define el tamaño de fuente del texto del botón como 16 píxeles.

- `cursor: pointer;`: Cambia el cursor del mouse cuando pasa sobre el botón para indicar que es interactivo. En este caso, se establece como un puntero, que es el cursor estándar para elementos que pueden hacer clic.

- `#clickCount`: Este selector aplica estilos al elemento <span> con el id "clickCount", que se utiliza para mostrar el contador de clics.

- `font-weight`: bold;: Establece el peso de la fuente del texto del contador como negrita, lo que hace que el texto sea más grueso y fácilmente distinguible del texto normal.

### segundo archivo `ejercicio2.js`

```
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
```
- `var button = document.getElementById("clickButton");`: Esta línea obtiene una referencia al elemento del botón en el documento HTML con el id "clickButton" y la guarda en la variable button. Esto permite acceder y manipular el botón desde JavaScript.

- `var clickCountDisplay = document.getElementById("clickCount");`: Aquí se obtiene una referencia al elemento <span> en el documento HTML con el id "clickCount" y se guarda en la variable clickCountDisplay. Este elemento se utiliza para mostrar el contador de clics.

- `var clickCount = 0;`: Se inicializa una variable llamada clickCount con el valor 0. Esta variable se utilizará para almacenar y mantener un registro del número de clics en el botón.

- `function incrementCounter() { ... }`: Se define una función llamada incrementCounter que se encarga de incrementar el contador de clics y actualizar la pantalla con el nuevo valor del contador.

- `clickCount++;`: Incrementa el valor de clickCount en 1 cada vez que se llama a esta función, lo que registra un clic adicional en el botón.

- `clickCountDisplay.innerText = clickCount;`: Actualiza el contenido del elemento clickCountDisplay con el valor actualizado de clickCount. Esto asegura que el contador de clics en la página se actualice y muestre el número correcto de clics.

- `button.addEventListener("click", incrementCounter);`: Esta línea asigna un evento de clic al botón. Cuando el botón es clicado, se llama a la función incrementCounter, lo que incrementa el contador de clics y actualiza su visualización en la página.

### Tercer archivo `ejercicio3.html`

```
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario de Nombre</title>
<link rel="stylesheet" type="text/css" href="ejercicio3.css">
</head>
<body>
  <h2>Ingrese su nombre:</h2>
  <form id="nameForm">
    <input type="text" id="nameInput" placeholder="Nombre">
    <button type="submit">Enviar</button>
  </form>
  <p id="errorMessage" class="error-message">El nombre debe tener al menos 3 caracteres.</p>

  <script src="ejercicio3.js" defer></script>
</body>
</html>
```
- `<head>`: Aquí se incluyen metadatos y enlaces a recursos externos como CSS y JavaScript.

- `<title>Formulario de Nombre</title>`: Establece el título de la página que se mostrará en la pestaña del navegador.

- `<link rel="stylesheet" type="text/css" href="ejercicio3.css">`: Enlaza un archivo CSS externo llamado "ejercicio3.css" que contiene estilos para la página.

- `<body>`: Aquí se encuentra el contenido visible de la página.

- `<h2>Ingrese su nombre:</h2>`: Un encabezado que indica al usuario que ingrese su nombre.

- `<form id="nameForm">`: Comienza un formulario con un id establecido como "nameForm". Los formularios son contenedores para elementos de entrada y botones de envío.

- `<input type="text" id="nameInput" placeholder="Nombre">`: Un campo de entrada de texto donde los usuarios pueden ingresar su nombre. Tiene un id establecido como "nameInput" y un marcador de posición que muestra "Nombre" como guía para el usuario.

- `<button type="submit">Enviar</button>`: Un botón de envío que enviará el formulario cuando se haga clic en él.

- `<p id="errorMessage" class="error-message">El nombre debe tener al menos 3 caracteres.</p>`: Un párrafo que muestra un mensaje de error que se ocultará inicialmente. Tiene un id establecido como "errorMessage" y una clase de CSS "error-message" que probablemente se utilice para aplicar estilos específicos al mensaje de error.

- `<script src="ejercicio3.js" defer></script>`: Enlaza un archivo JavaScript externo llamado "ejercicio3.js" que contiene código para manejar la validación del formulario y otros comportamientos dinámicos. El atributo defer indica que el script se ejecutará después de que se analice el documento HTML, lo que garantiza que tenga acceso a todos los elementos HTML definidos anteriormente.

### Tercer Archivo `ejercicio3.css`
```
/* Estilos para el mensaje de error */
.error-message {
    color: red;
    display: none;
  }
```
- `.error-message`: Este es un selector de clase que apunta a elementos que tienen la clase "error-message".

- `color: red;`: Establece el color del texto del mensaje de error en rojo. Esto hace que el mensaje de error sea visualmente prominente y fácilmente distinguible del resto del contenido.

- `display: none;`: Oculta inicialmente el elemento con la clase "error-message". Cuando un elemento tiene display: none;, no se muestra en la página. Esto significa que cuando la página se carga por primera vez, el mensaje de error no será visible para el usuario.

### Tercer Archivo `ejercicio3.js`
```
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
```

- `function validateName(event) { ... }`: Se define una función llamada validateName que toma un parámetro event, que representa el evento que desencadenó la llamada a la función (en este caso, el evento de envío del formulario).

- `var nameInput = document.getElementById("nameInput");`: Obtiene una referencia al elemento de entrada de texto con el id "nameInput", que es donde los usuarios ingresan su nombre.

- `var errorMessage = document.getElementById("errorMessage");`: Obtiene una referencia al elemento de mensaje de error con el id "errorMessage".

- `if (nameInput.value.length < 3) { ... }`: Comprueba si la longitud del valor ingresado en el campo de nombre es menor que 3 caracteres.

- `errorMessage.style.display = "block";`: Si el nombre tiene menos de 3 caracteres, muestra el mensaje de error estableciendo su estilo de visualización como "block". Esto hará que el mensaje de error sea visible en la página.

- `event.preventDefault();`: Evita que el formulario se envíe si la validación falla. Esto detiene el comportamiento predeterminado del evento de envío del formulario, que es enviar los datos al servidor, y evita que la página se recargue.

- `else { errorMessage.style.display = "none"; }`: Si el nombre tiene al menos 3 caracteres, oculta el mensaje de error estableciendo su estilo de visualización como "none". Esto asegura que el mensaje de error desaparezca si se cumple la condición de validación.

- `var form = document.getElementById("nameForm");`: Obtiene una referencia al formulario con el id "nameForm".

- `form.addEventListener("submit", validateName);`: Asigna un evento de envío al formulario. Cuando el formulario se envía (por ejemplo, cuando se hace clic en el botón de enviar), se llama a la función validateName para validar el nombre ingresado antes de que se envíen los datos del formulario al servidor.
