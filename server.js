const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Permitir leer JSON desde el frontend
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'frontend')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
});

// Ruta de login
app.post('/login', (req, res) => {
  const { usuario, password } = req.body;

  // Usuarios reales
  const usuarios = [
    { usuario: 'carlos', password: 'capurra3' },
    { usuario: 'maritza', password: '3333' }
  ];

  // Verificar credenciales
  const valido = usuarios.find(
    u => u.usuario === usuario && u.password === password
  );

  if (valido) {
    res.json({
      success: true,
      message: `Bienvenido ${usuario}`
    });
  } else {
    res.json({
      success: false,
      message: 'Usuario o contraseña incorrectos'
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
