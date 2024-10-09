//Importamos Express
import express from 'express';
import helmet from 'helmet';    //Importamos Helmet para proteger nuestra app de ataques comunes
import morgan from 'morgan';    //Importamos Morgan para ver los request que llegan a nuestro servidor, en otras palabras, tener un historial de peticiones

//Requerimos el uso de 'Dotenv' para poder usar las variables de entorno (el archivo .env)
import dotenv from 'dotenv';
dotenv.config();

//Creamos una instancia de Express
const app = express();

//Definimos el puerto
const port = process.env.PORT || 8193;

//Se define un archivo estático para servir, esta ruta se puede acceder sin necesidad de un controlador, pueden netamente acceder a los archivos que se encuentran en la carpeta 'public'
app.use(express.static('public'));



//Usamos Helmet para que el servidor no se quede colgado
app.use(helmet());

//Usamos Morgan Tiny para ver los request que llegan a nuestro servidor
app.use(morgan('tiny'));

//Permitimos el uso de JSON en las peticiones
app.use(express.json());






//Usamos el middleware para interceptar todas las peticiones
import Authenticate from './src/middlewares/Authenticate.js';
app.use(Authenticate)

//Importamos las rutas que se usarán en el proyecto
import mainRutes from './src/routes/main.routes.js';

//usamos las rutas del Ruteador
app.use('/', mainRutes);



//Importamos las rutas para los usuarios
import userRutes from './src/routes/user.routes.js';

app.use('/users', userRutes);



//Iniciamos el servidor
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})