CREATE TABLE IF NOT EXISTS estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    expediente VARCHAR(50) NOT NULL UNIQUE,
    codigo VARCHAR(50) NOT NULL,
    carrera VARCHAR(100),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO estudiantes (nombre, expediente, codigo, carrera) VALUES
    ('Juan Pérez', '25645', 'mm22-i04-001', 'Ingeniería en Sistemas'),
    ('María García', '58624', 'xc22-i04-001', 'Ingeniería en Sistemas'),
    ('Carlos López', '85598', 'sd22-i04-001', 'Ingeniería en Sistemas'),
    ('Ana Martínez', '85274', 'mp22-o04-001', 'Ingeniería en Sistemas'),
    ('Pedro Rodríguez', '51784', 'gp22-i04-001', 'Ingeniería en Sistemas');
