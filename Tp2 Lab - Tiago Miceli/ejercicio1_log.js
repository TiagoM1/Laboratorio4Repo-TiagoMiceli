const fs = require('fs');

const logFile = 'log.txt';
const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

fs.appendFileSync(logFile, `[${timestamp}] - Inicio del programa\n`);

console.log('Ejecutando tarea...');
fs.appendFileSync(logFile, `[${timestamp}] - Ejecutando tarea...\n`);

setTimeout(() => {
    const endTimestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    fs.appendFileSync(logFile, `[${endTimestamp}] - Tarea completada\n`);
    console.log('Tarea completada.');
}, 5000);
