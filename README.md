# Aplicación NASA APOD

Esta aplicación utiliza la API de la NASA APOD (Astronomy Picture of the Day) para mostrar imágenes y descripciones de la astronomía.
![Imagen de la Pagina](img/pagina.png)


## Cómo funciona

La aplicación utiliza tanto Promesas como Async/Await para obtener datos de la API de la NASA. Los usuarios pueden seleccionar qué método utilizar a través de una interfaz de usuario.

### Fetch Data

La aplicación tiene dos funciones para obtener datos de la API: `fetchDataWithPromise` y `fetchDataWithAsyncAwait`. Ambas funciones toman una URL de API y devuelven los datos obtenidos.

### Procesar respuesta

La función `processResponse` toma los datos obtenidos de la API y una opción seleccionada por el usuario. Dependiendo de la opción, la función mostrará una imagen, una descripción de texto, o ambos.

### Manejador de eventos

El manejador de eventos para el botón de búsqueda llama a la función de obtención de datos correspondiente y luego procesa la respuesta.

### Estilos CSS

Los estilos para la aplicación se encuentran en `styles.css`. Los elementos de imagen tienen un ancho máximo del 100% para asegurar que se ajusten al contenedor.

### Manejo de errores

El código utiliza bloques `try/catch` para manejar errores durante la obtención de datos. Si ocurre un error, se muestra un mensaje de error al usuario.

### Caso de error

Un caso que provocaría un error sería si la API de la NASA no está disponible o si la fecha proporcionada por el usuario no tiene una imagen disponible. En este caso, la aplicación mostrará un mensaje de error al usuario.
