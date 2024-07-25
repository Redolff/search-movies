ENUNCIADO

Crea una aplicación para buscar películas

- API a usar: https://www.omdbapi.com/
- API_KEY: d9c5495b
- API: https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}
- Api: https://www.omdbapi.com/?apikey=d9c5495b&s=Avengers


Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

- Necesita mostrar un input para buscar la película y un botón para buscar.
- Lista las películas y muestra el título, año y poster.
- Que el formulario funcione
- Haz que las películas se muestren en un grid responsive.
- Hacer el fetching de datos a la API

Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automáticamente al escribir.
- Evita que se haga la búsqueda continuamente al escribir (debounce)

- UseMemo: Para memoizar un calculo con las dependencias que usen ese calculo
- UseEffect: hook que te permite cambiar codigo, ejecutar un efecto, llamadas a una api, con las dependencias que lo utilizen
- UseCallback: Utiliza por debajo el useMemo, y se utiliza para las funciones