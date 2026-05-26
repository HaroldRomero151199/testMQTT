require('dotenv').config();

const config = {
  host: process.env.MQTT_HOST || 'localhost',
  port: process.env.MQTT_PORT,
  clientId: process.env.MQTT_CLIENT,
  // username: `${process.env.MQTT_USER}`,
  // password: `${process.env.MQTT_PASS}`,
};

module.exports = config
