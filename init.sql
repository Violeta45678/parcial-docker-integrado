CREATE TABLE IF NOT EXISTS estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    expediente VARCHAR(50) NOT NULL UNIQUE,
    codigo VARCHAR(50) NOT NULL,
    carrera VARCHAR(100),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO estudiantes (nombre, expediente, codigo, carrera) VALUES
    ('Juan Pérez', 'EXP-2021-001', 'EST-001', 'Ingeniería en Sistemas'),
    ('María García', 'EXP-2021-002', 'EST-002', 'Ingeniería en Sistemas'),
    ('Carlos López', 'EXP-2021-003', 'EST-003', 'Ingeniería en Sistemas'),
    ('Ana Martínez', 'EXP-2021-004', 'EST-004', 'Ingeniería en Sistemas'),
    ('Pedro Rodríguez', 'EXP-2021-005', 'EST-005', 'Ingeniería en Sistemas')
ON CONFLICT (expediente) DO NOTHING;
