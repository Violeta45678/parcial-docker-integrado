const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'parcial_db'
});

app.use(express.json());

// Endpoint raíz - Información del estudiante
app.get('/', (req, res) => {
  res.json({
    estudiante: {
      nombre: "Violeta Sofia Martinez Puente",
      expediente: "25419",
      codigo: "MP21-i04-001"
    },
    mensaje: "API del Segundo Parcial - Implantación de Sistemas",
    endpoints: ["/", "/health", "/db-test", "/estudiantes"]
  });
});

// Endpoint de salud
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Endpoint para probar conexión con DB
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as time, version() as version');
    res.json({
      status: 'Database connected',
      timestamp: result.rows[0].time,
      version: result.rows[0].version
    });
  } catch (error) {
    res.status(500).json({
      status: 'Database error',
      error: error.message
    });
  }
});

// Endpoint para obtener estudiantes
app.get('/estudiantes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM estudiantes ORDER BY id');
    res.json({
      count: result.rows.length,
      estudiantes: result.rows
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 Endpoints disponibles:`);
  console.log(`   - http://localhost:${PORT}/`);
  console.log(`   - http://localhost:${PORT}/health`);
  console.log(`   - http://localhost:${PORT}/db-test`);
  console.log(`   - http://localhost:${PORT}/estudiantes`);
});
