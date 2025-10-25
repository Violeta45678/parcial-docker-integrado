cat > server.js << 'EOF'
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    nombre: "Viole Sofia Martinez Puente",
    expediente: "EXP-12345",
    codigo_estudiantil: "COD-6789",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
EOF
