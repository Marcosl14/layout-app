const express = require('express');
const process = require('process');


const app = express();
const port = process.env.PORT || 3000;

// Configura el middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('dist'));

// Ruta de ejemplo para devolver un mensaje
app.get('/api/message', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

// Inicia el servidor
app.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Servidor escuchando en el puerto ${port}`);
});
