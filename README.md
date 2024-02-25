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

## Descripcion De Los Codigos

### Archivo `ejercicio1.html`

```<!DOCTYPE html>
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
- `<script src="ejercicio1.js" defer></script>`: Enlaza un archivo JavaScript externo llamado "ejercicio1.js" y utiliza el atributo defer     para asegurarse de que el script se ejecute después de que se haya cargado el contenido de la página. Este script manejará el cambio     de color cuando se haga clic en el botón.

