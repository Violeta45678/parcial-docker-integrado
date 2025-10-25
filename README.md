# Parcial 2 - Implantación de Sistemas

## Información del estudiante
- **Nombre:** Violeta Sofía Martínez Puente
- **Expediente:** 254131
- **Código estudiantil:** MP21-I04-001
- **Repositorio:** [parcial-docker-integrado](https://github.com/Violeta45678/parcial-docker-integrado)

## Descripción del proyecto
Este proyecto corresponde al **Parcial 2 de Implantación de Sistemas**, donde se integran servicios usando **Node.js, Express, PostgreSQL y Docker**.  
El objetivo es demostrar la correcta creación de contenedores, persistencia de datos y orquestación con Docker Compose.

## Ejercicios realizados

### Ejercicio 1 – Servicio Node.js con Dockerfile
- Servicio **Node.js** con **Express**.
- Dockerfile funcional para crear la imagen del servicio.
- Endpoints disponibles:
  - `/` → Devuelve datos del estudiante.
  - `/health` → Devuelve `{ "status": "OK" }`.

### Ejercicio 2 – PostgreSQL con volumen persistente
- Contenedor **PostgreSQL** con **volumen `db_data`**.
- Se asegura que los datos no se pierdan al reiniciar el contenedor.
- Tabla `estudiantes` creada automáticamente mediante `init.sql`.

### Ejercicio 3 – Integración con Docker Compose
- Orquestación completa de los servicios **API** y **DB**.
- Red interna `app_net` y volumen `db_data`.
- Healthcheck de DB (`pg_isready`) configurado.
- API depende de la DB y valida la conexión correctamente.

## Tecnologías utilizadas
- Node.js  
- Express  
- PostgreSQL  
- Docker & Docker Compose  

## Ejecución del proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/Violeta45678/parcial-docker-integrado.git
cd parcial-docker-integrado
