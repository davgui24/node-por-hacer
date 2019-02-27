const opcionesCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const opcionesActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Marca como completado o como pendiente la tarea'
    }
}

const opcionesBorrar = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opcionesCrear)
    .command('actualizar', 'actualiza el estado de una tarea', opcionesActualizar)
    .command('borrar', 'Borra una tarea', opcionesBorrar)
    .help()
    .help()
    .argv;

module.exports = {
    argv
}