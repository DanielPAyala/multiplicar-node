const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
            crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`), err => console.log(err));
            break;
    default:
        console.log('Comando no reconocido');
        break;
}


let argv2 = process.argv;
// console.log(argv2);
// console.log(argv);
//let base = agrv[2];
// let parametro = agrv[2];
// let base = parametro.split('=')[1];

