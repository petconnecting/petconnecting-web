const moongoose = require('mongoose');

const DB_NAME = 'user'
const MONGODB_URI = `mongodb://127.0.0.1:27017/${DB_NAME}`

moongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then(() => {
console.info(`Nos hemos conectado a la base de datos ${MONGODB_URI}`)
})
.catch(error => {
  console.error('Error de conexión en la base de datos: ', error);
});

