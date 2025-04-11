# 🚀 Proyecto XYZ

Este proyecto utiliza **Docker** para facilitar el desarrollo y despliegue. Incluye una estructura modular por funcionalidades (features) y una interfaz construida con **Atomic Design** + **TailwindCSS**.

---

## 🐳 Cómo correr el proyecto

Asegurate de tener Docker instalado. Luego, en la raíz del proyecto, ejecutá:

```bash
docker compose up
```

Una vez levantado, la terminal mostrará la URL para acceder a la aplicación. Generalmente es:

```bash
http://localhost:3000
```

---

## 👤 Usuarios predefinidos

Podés ingresar al sistema con alguno de los siguientes usuarios de prueba:

```ts
export const USERS: User[] = [
  {
    username: "admin",
    password: "admin123",
    role: UserRole.ADMIN,
  },
  {
    username: "ejecutivo",
    password: "negocio456",
    role: UserRole.BUSINESS_EXECUTIVE,
  },
  {
    username: "servicio",
    password: "cliente789",
    role: UserRole.CUSTOMER_SERVICE,
  },
] as const;
```

---

## 🧩 Estructura del proyecto

El proyecto está organizado por **features**. Cada funcionalidad tiene su propia carpeta, y dentro incluye:

- `components/`: Componentes específicos de esa feature
- `pages/`: Páginas relacionadas
- `utils/`: Utilidades y funciones auxiliares

Esto permite un desarrollo modular, escalable y fácil de mantener.

---

## 🎨 Componentes UI

Estamos utilizando el enfoque de **Atomic Design** con **TailwindCSS**. Todos los componentes compartidos se encuentran en:

```bash
/components
```

Incluye átomos, moléculas y organismos reutilizables en toda la aplicación.

---

## 📦 Dependencias clave

- **Docker** para entorno de ejecución
- **TailwindCSS** para estilos
- **Atomic Design** para estructura de componentes
- **TypeScript** para tipado fuerte
