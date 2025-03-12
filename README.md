# Sistema de Gestión de Reservas de Vuelos ✈️

Este es un backend desarrollado en **Node.js** y **Express** para gestionar reservas de vuelos.

## Características Principales 🚀

- **Registro e Inicio de Sesión de Usuarios**: Autenticación segura usando JWT.
- **Búsqueda de Vuelos**: Permite buscar vuelos por origen, destino y fecha.
- **Reservas de Vuelos**: Los usuarios pueden reservar y cancelar vuelos.
- **Base de Datos con Datos Reales**: Usa una API pública para llenar la base de datos con información de vuelos.

## Requisitos Previos 📋

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) 
- [Postman](https://www.postman.com/)

  ## Instalación y Configuración ⚙️
  ### 1. Clonar el Repositorio

Clona el repositorio en tu máquina local:


git clone git@github.com:Lamilla19/PruebaTecnicaLamillaVera.git

Instalar Dependencias

npm install

Configurar Variables de Entorno

PORT = 3000
MONGODB_URI = 'mongodb://adminUser:AdminPassword123@localhost:27017/reserva_vuelo?authSource=admin'
JWT_SECRET=4f7a8b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5
AVIATIONSTACK_API_KEY=f25024f396e2140167a60570c907705e

Llenar la base de datos con los vuelos de la API

$ node servidor/datos_iniciales_prueba/bs_script_Vuelos.js

Iniciar el Servidor


node servidor/index.js


## Endpoints de la API

## Autenticación

Registro de Usuario:
Método: POST
URL: /api/registro

![image](https://github.com/user-attachments/assets/4190f723-fef7-4105-898a-b964fd0fd855)


## Inicio de Sesión:
Método: POST
URL: /api/login

![image](https://github.com/user-attachments/assets/d7ad5727-4432-41a7-ae00-03080d8e154d)


Vuelos

## Buscar Vuelos:
Método: GET
URL: /api/vuelos

## Parámetros:

origen: Lugar de origen ciudad o pais.

destino: Lugar de destino ciudad o pais.

fecha: Fecha del vuelo (formato: YYYY-MM-DD).

![image](https://github.com/user-attachments/assets/4391f3a9-376f-42cf-8a00-11ccc4611021)


##Reservas

Crear Reserva:
Método: POST
URL: /api/reservas

![image](https://github.com/user-attachments/assets/02073163-1ffa-46f7-b71f-a9eaab723618)

Cancelar Reserva:
Método: DELETE
URL: /api/reservas/:id

![image](https://github.com/user-attachments/assets/d4162da8-ebcc-4eaa-a85b-7f83faa7d1ae)


Listar Reservas de Usuario:
Método: GET
URL: /api/usuarios/:usuarioId/reservas


![image](https://github.com/user-attachments/assets/65befd5c-f086-4354-8ffa-e6fb0f39c1eb)




Contacto 📧
Nombre: Kevin Javier Lamilla Vera
Email: kevinlamilla16@gmail.com
