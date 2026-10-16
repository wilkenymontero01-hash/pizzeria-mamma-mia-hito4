# 🍕 Pizzería Mamma Mía! - Hito 5

Este proyecto corresponde al **Hito 5** del desarrollo web con React, enfocado en la implementación de un sistema de enrutamiento dinámico utilizando **React Router**.

## 🚀 Tecnologías utilizadas
* **React** (Biblioteca de JavaScript)
* **Vite** (Entorno de desarrollo rápido)
* **React Router DOM** (Manejo de rutas y navegación)
* **Bootstrap / React Bootstrap** (Diseño y componentes estilizados)

---

## 📋 Requerimientos implementados (Hito 5)

1. **Configuración de React Router**: Instalación y configuración de `BrowserRouter` en el punto de entrada de la aplicación (`main.jsx`).
2. **Estructura de Páginas**: Organización de los componentes principales dentro de la carpeta `src/pages/`:
   * `Home.jsx`
   * `Register.jsx`
   * `Login.jsx`
   * `Cart.jsx`
   * `Pizza.jsx`
   * `Profile.jsx`
   * `NotFound.jsx`
3. **Definición de Rutas (`App.jsx`)**:
   * `/` ➔ Muestra el componente **Home**
   * `/register` ➔ Muestra el componente **Register**
   * `/login` ➔ Muestra el componente **Login**
   * `/cart` ➔ Muestra el componente **Cart**
   * `/pizza/p001` ➔ Muestra el componente **Pizza**
   * `/profile` ➔ Muestra el componente **Profile**
   * `*` (Comodín) ➔ Muestra el componente **NotFound** para rutas inexistentes.
4. **Componente NotFound (404)**: Vista personalizada con un diseño limpio y un botón/enlace de redirección de regreso al inicio (`/`).
5. **Componente Profile**: Vista que muestra un correo electrónico de usuario estático y un botón para cerrar sesión.
6. **Navbar Interactivo**: Barra de navegación adaptada con componentes `Link` de React Router y un botón de acceso directo al carrito (`/cart`).

---

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/pizzeria-mamma-mia-hito5.git](https://github.com/tu-usuario/pizzeria-mamma-mia-hito5.git)
