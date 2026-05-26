# testMKTT 📡 - Ingesta de Telemetría IoT con MQTT y MongoDB

Este proyecto es una plataforma ligera para la ingesta de telemetría y gestión de configuración de dispositivos IoT utilizando **MQTT** y **MongoDB**.

---

## 🛠️ Requisitos Previos

*   **Node.js** (v16+)
*   **MongoDB** (Local o MongoDB Atlas)
*   **Broker MQTT** (como FlashMQ o Mosquitto)

---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```ini
DB_CONNECTION=mongodb
DB_HOST=localhost          # Host de MongoDB
DB_PORT=27017              # Puerto de MongoDB
DB_DATABASE=kryosMQTT      # Base de datos

MQTT_CLIENT=serverMQTTjs
MQTT_HOST=localhost        # Host del Broker MQTT
MQTT_PORT=1883             # Puerto MQTT
```

---

## 📡 Tópicos MQTT Principales

*   `{empresa}/sensors/{sensorId}/data`: Ingesta de telemetría periódica.
*   `{empresa}/sensors/{sensorId}/config`: Envío de parámetros de configuración al sensor.
*   `{empresa}/sensors/{sensorId}/updated`: Confirmación de configuración por parte del sensor.
*   `{empresa}/sensors/{sensorId}/conexion`: Estado de conexión (con LWT para caídas).

---

## 🚀 Instalación y Uso

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Ejecutar los Componentes

*   **Servidor Principal (Ingesta de datos a MongoDB):**
    ```bash
    npm start
    ```
*   **Simulador de Sensor / Cliente (`client.js`):**
    ```bash
    npm run client
    ```
*   **Enviar Configuración a un Sensor (`configMQTT.js`):**
    ```bash
    npm run config
    ```

---

## 📂 Estructura del Proyecto

*   `src/index.js`: Escucha telemetría en MQTT y la guarda en MongoDB.
*   `client.js` / `client2.js`: Simuladores de dispositivos IoT.
*   `configMQTT.js`: Envía parámetros a los sensores y actualiza su estado en la base de datos al recibir confirmación.
*   `src/models/`: Modelos de Mongoose (`Company` y `Sensor`).
*   `src/logger.js`: Logs rotativos con Winston (guardados en `logs/warn-error.log`).
