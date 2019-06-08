// required
const fs = require('fs');

let listarTabla = (base, limite) => {
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;  
    }
    console.log(data);
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        
        for (let i = 0; i <= limite ; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}