import express from "express"; // framework para crear APIs(ENDPOINTS,RUTAS,MIDDLEWARES)
import mongoose from "mongoose"; // libreria para conectarse y trabajar con MongoDB
import dotenv from "dotenv"; // permite usar variables de entorno desde un archivo .env
import cors from "cors"; // permite que tu API sea consumida desde otro dominios (tu front React etc..)
import res from "express/lib/response";

dotenv.config(); // carga configuracion del archivo .env - lee el archivo .env, carga las variables (como MONGODB_URU y PORT)
const app = express(); // inicia el servidor web que va a recibir las solicitudes HTTP (gep post, put, delete)
app.use(cors()) //  permite que clientes accedan a tu API
app.use(express.json()) // le dice a mi servidor cuando venga un JSON en el body, parsealo automaticamente - sin esto no podria leer req.body en un POST

mongoose
   .connect(process.env.MONGODB.URI)
   .then(() => console.log("Conectado a MongoDB"))
   .catch((err) => console.log("Error",err));
/* 1-Toma la cadena de conexion del archivo .env 
   2- Intenta conectarse
   3- si conecta -> mensaje de exito
   5- si falla -> imprime error 
   */


app.get("/", (rez,res) => {
    res.send("API funcionando")
});
/* sirve para comprobar que express esta funcionando y el servidor responde si voy a host 4000 me deveria salir el mensaje API funcionando*/

app.listen(process.env.PORT,() => {
console.log("Servidor en puerto"+ process.env.PORT); // levanta el servidor en un puerto - PORT = 4000 puerto
});

