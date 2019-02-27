// node app crear -d "Pasear al perro"
// node app listar
// node app actualizar -d "Pasear al perro" -c true

const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.table(tarea);
        break;

    case "listar":
        let listado = porHacer.getListado();
        listado.forEach(tareas => {
            console.log('==========Por Hacer=========='.green);
            console.log(tareas.descripcion);
            console.log('Estado: ', tareas.completado);
            console.log('============================='.green);
        });
        break;

    case "actualizar":
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.table(actualizar);
        break;

    case "borrar":
        let borrar = porHacer.borrar(argv.descripcion);
        console.table(borrar);
        break;


    default:
        console.log('El comando es desconocido');
        break;
}