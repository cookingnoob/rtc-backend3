
# RTC Recetas y Libros de Cocina API

Bienvenido a la API de RTC (Recetas y Libros de Cocina), una plataforma para gestionar recetas y colecciones de libros de cocina. Esta documentación te ayudará a entender cómo interactuar con la API para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre recetas, libros de cocina y usuarios.

## URL Base

Todas las siguientes endpoints deberían ser precedidas por la URL base: `https://rtc-backend3.onrender.com`

## Endpoints de Usuarios

### Registro de Usuarios

- **Endpoint:** `/user/create-account`
- **Método:** POST
- **Descripción:** Registra un nuevo usuario.
- **Cuerpo de la solicitud:**
  ```json
  {
    "email": "usuario@example.com",
    "password": "tuContraseña"
  }
  ```

### Inicio de Sesión

- **Endpoint:** `/user/login`
- **Método:** POST
- **Descripción:** Inicia sesión y devuelve un token.
- **Cuerpo de la solicitud:**
  ```json
  {
    "email": "usuario@example.com",
    "password": "tuContraseña"
  }
  ```

### Subir Avatar

- **Endpoint:** `/user/upload-avatar`
- **Método:** POST
- **Descripción:** Sube un avatar para el usuario autenticado.
- **Autorización:** Token requerido.

## Endpoints de Recetas

### Obtener Todas las Recetas

- **Endpoint:** `/recipes/`
- **Método:** GET
- **Descripción:** Recupera todas las recetas disponibles.

### Obtener Receta por ID

- **Endpoint:** `/recipes/find/:id`
- **Método:** GET
- **Descripción:** Recupera una receta específica por su ID.

### Agregar Nueva Receta

- **Endpoint:** `/recipes/add`
- **Método:** POST
- **Descripción:** Agrega una nueva receta.
- **Autorización:** Token requerido.
- **Cuerpo de la solicitud:**
  ```json
  {
    "name": "Nombre de la receta",
    "cookbook": "ID del libro de cocina",
    "ingredients": "Ingredientes",
    "steps": ["Paso 1", "Paso 2"]
  }
  ```

### Editar Receta

- **Endpoint:** `/recipes/edit/:id`
- **Método:** PUT
- **Descripción:** Edita una receta existente.
- **Extra:** No puedes editar el libro asociado
- **Autorización:** Token requerido.
  ```json
  {
    "name": "Nombre de la receta",
    "ingredients": "Ingredientes",
    "steps": ["Paso 1", "Paso 2"]
  }
  ```

### Editar Receta

- **Endpoint:** `/recipes/edit/:id`
- **Método:** PUT
- **Descripción:** Edita el libro asociado a receta existente.
- **Extra:** No puedes editar los demas datos de la receta
- **Autorización:** Token requerido.
  ```json
  {
    "cookbook": "nombre del libro de cocina",
  }
  ```
### Eliminar Receta

- **Endpoint:** `/recipes/delete/:id`
- **Método:** DELETE
- **Descripción:** Elimina una receta.
- **Autorización:** Token requerido.


## Endpoints de Libros de Cocina

### Obtener Todos los Libros de cocina

- **Endpoint:** `/cookbooks/`
- **Método:** GET
- **Descripción:** Recupera todos los libros disponibles.

### Obtener Libro por ID

- **Endpoint:** `/cookbooks/:id`
- **Método:** GET
- **Descripción:** Recupera un libro específico por su ID.

### Agregar Nuevo Libro

- **Endpoint:** `/cookbooks/add`
- **Método:** POST
- **Descripción:** Agrega un nuevo libro.
- **Autorización:** Token requerido.
- **Cuerpo de la solicitud:**
  ```json
  {
    "title": "Nombre del libro",
    "price": "Precio del libro ---Number",
    "genre": "Género",
    "recipes": ["Receta 1", "Receta 2"]
  }
  ```
  ### Agregar portada al Libro

- **Endpoint:** `/cookbooks/add`
- **Método:** POST
- **Descripción:** Agrega una portada al libro.
- **Autorización:** Token requerido.
- **Cuerpo de la solicitud:**
  ```json
  {
    "cover": "url de cloudinary la imagen"
  }
  ```

### Editar Libro

- **Endpoint:** `/cookbooks/edit/:id`
- **Método:** PUT
- **Descripción:** Edita un libro existente.
- **Extra:** No se editan recetas
- **Autorización:** Token requerido.
  ```json
  {
    "title": "Nombre del libro",
    "price": "Precio del libro ---Number",
    "genre": "Género",
  }
  ```

  ### Editar Recetas Libro

- **Endpoint:** `/cookbooks//:id/update-recipes`
- **Método:** PUT
- **Descripción:** Edita una receta de un libro existente.
- **Extra:** No se editan otros datos
- **Autorización:** Token requerido.
  ```json
  {
  "recipes": ["Receta 1", "Receta 2"]
  }
  ```

### Eliminar Receta

- **Endpoint:** `/recipes/delete/:id`
- **Método:** DELETE
- **Descripción:** Elimina una receta.
- **Autorización:** Token requerido.


### Nota sobre la Autorización

Para los endpoints que requieren autorización, asegúrate de incluir el token de autorización en la cabecera de tu solicitud como se muestra a continuación:

```
Authorization: Bearer TU_TOKEN_AQUÍ
```