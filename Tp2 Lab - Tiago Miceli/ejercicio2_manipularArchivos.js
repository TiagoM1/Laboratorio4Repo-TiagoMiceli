const fs = require('fs');

const archivo = 'datos.txt';
const nuevoArchivo = 'informacion.txt';

// 1. Crear y escribir en datos.txt
fs.writeFileSync(archivo, 'Nombre: Juan\nEdad: 25\nCarrera: Ingeniería\n');

// 2. Leer e imprimir el contenido
const contenido = fs.readFileSync(archivo, 'utf8');
console.log(contenido);

// 3. Agregar fecha de modificación
const fecha = `Fecha de modificación: ${new Date().toISOString().replace('T', ' ').substring(0, 19)}\n`;
fs.appendFileSync(archivo, fecha);

// 4. Renombrar archivo
fs.renameSync(archivo, nuevoArchivo);

// 5. Eliminar después de 10 segundos
setTimeout(() => {
    fs.unlinkSync(nuevoArchivo);
    console.log('Archivo eliminado.');
}, 10000);
