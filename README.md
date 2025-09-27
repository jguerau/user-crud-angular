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
- ✅ Crear nuevos usuarios con validaciones
- ✅ Editar usuarios existentes
- ✅ Eliminar usuarios con confirmación
- ✅ Validaciones de formularios (email, campos obligatorios)
- ✅ Manejo de estados de carga y errores
- ✅ Diseño responsivo para dispositivos móviles

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
- `/user/:id` - Detalle de usuario específico
- `/newuser` - Formulario para crear nuevo usuario
- `/updateuser/:id` - Formulario para editar usuario

## Estructura del proyecto

```
src/app/
├── interfaces/user.interface.ts    # Definición de tipos TypeScript
├── services/user.service.ts        # Comunicación con API externa
├── pages/
│   ├── home/                      # Listado de usuarios
│   ├── user-detail/               # Detalle de usuario
│   └── user-form/                 # Formularios crear/editar
├── app.config.ts                  # Configuración de providers
├── app.routes.ts                  # Definición de rutas
└── app.ts                         # Componente raíz
```

## Tecnologías utilizadas

- Angular 19 (standalone components)
- TypeScript 5.6
- Bootstrap 5.3
- RxJS (Observables)
- Angular Reactive Forms

## Características técnicas destacadas

- **Sintaxis moderna Angular 19**: Uso de @if, @for en lugar de *ngIf, *ngFor
- **Standalone Components**: Sin necesidad de NgModules
- **Lazy Loading**: Carga dinámica de componentes
- **Type Safety**: Interfaces TypeScript para todas las estructuras de datos
- **Reactive Programming**: Manejo asíncrono con Observables

## Autor

Desarrollado como proyecto académico para el curso FullStack Developer - UNIR

## Estado del proyecto

Proyecto completado y funcional con todas las operaciones CRUD implementadas y probadas.
