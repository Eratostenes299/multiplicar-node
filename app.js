//Requires
const { getMultiplicacion } = require('./multiplicar/multiplicar');


let vect = process.argv[2];
let base = parseInt(vect.split('=')[1]); //Esta forma de pasar datos a nuestro servidor usa un vector con url.


getMultiplicacion(base).then((resp) => {
    console.log(`Se ha creado la ${resp}`);
}).catch(err => {
    console.log(err);
});