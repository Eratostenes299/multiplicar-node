const fs = require('fs');
let data = '';

let getMultiplicacion = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero'); //Esta es la validacion para un numero.
            return; //Esto es para parar la ejecuion
        }

        for (let i = 1; i < 13; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tablas-${base}.txt`, data, (err) => {
            if (err) {
                throw reject;
            } else {
                resolve(`tablas-${base}.txt`);

            }

        });
    });
}

//Esta parte permite exportar los modulos correspondientes hacia otras partes de mi aplicacion.
module.exports = {
    getMultiplicacion
}