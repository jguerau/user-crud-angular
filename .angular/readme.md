# User CRUD Application - Angular 19

Aplicación web desarrollada con Angular 19 que implementa operaciones CRUD (Create, Read, Update, Delete) conectándose a una API externa.

## Características

- **Framework**: Angular 19 con standalone components
- **API Externa**: https://peticiones.online/api/users
- **Estilos**: Bootstrap 5 para diseño responsivo
- **Formularios**: Reactive Forms con validaciones
- **Routing**: Sistema de navegación completo

## Funcionalidades

- ✅ Listado de usuarios con paginación
- ✅ Vista detalle de usuario individual
- ✅ Crear nuevos usuarios
- ✅ Editar usuarios existentes
- ✅ Eliminar usuarios con confirmación
- ✅ Validaciones de formularios
- ✅ Manejo de estados de carga y errores

## Requisitos

- Node.js 18 o superior
- Angular CLI 19
- npm 9 o superior

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/TU_USUARIO/user-crud-angular.git
cd user-crud-angular
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar la aplicación:
```bash
ng serve
```

4. Abrir en el navegador: `http://localhost:4200`

## Rutas de la aplicación

- `/home` - Listado de usuarios
- `/user/:id` - Detalle de usuario
- `/newuser` - Crear nuevo usuario
- `/updateuser/:id` - Editar usuario

## Estructura del proyecto

```
src/app/
├── interfaces/user.interface.ts    # Definición de tipos
├── services/user.service.ts        # Comunicación con API
├── pages/
│   ├── home/                      # Listado de usuarios
│   ├── user-detail/               # Detalle de usuario
│   └── user-form/                 # Formularios crear/editar
├── app.config.ts                  # Configuración
├── app.routes.ts                  # Definición de rutas
└── app.ts                         # Componente raíz
```

## Tecnologías utilizadas

- Angular 19
- TypeScript 5.6
- Bootstrap 5.3
- RxJS (Observables)
- Angular Reactive Forms

## Autor

Desarrollado como proyecto académico para el curso FullStack Developer.
