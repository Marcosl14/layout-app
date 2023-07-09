// import * as express from 'express'
// import { env } from 'process'

// const app = express();
// const port = env.PORT || 3000;

// // Configura el middleware para servir archivos estáticos desde la carpeta 'public'
// app.use(express.static('dist'));

// // Ruta de ejemplo para devolver un mensaje
// app.get('/api/message', (req, res) => {
//   res.send('¡Hola desde el servidor!');
// });

// // Inicia el servidor
// app.listen(port, () => {
//   // eslint-disable-next-line no-undef
//   console.log(`Servidor escuchando en el puerto ${port}`);
// });

// export default app;


import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

export const handler = serverless(api);
