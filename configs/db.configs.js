const moongoose = require('mongoose');

require('dotenv')

const DB_NAME = 'userpet'
const MONGODB_URI = process.env.MONGO_URI;

moongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then(() => {
console.info(`Nos hemos conectado a la base de datos ${MONGODB_URI}`)
})
.catch(error => {
  console.error('Error de conexión en la base de datos: ', error);
});

