// -- TP4_Lab_Nodemon_Tiago Miceli


// --- EJERCICIO 1: dotenv ---

import dotenv from 'dotenv';
dotenv.config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);



// --- EJERCICIO 2: import/export con math.js ---

import { sumar } from './math.js';
console.log('5 + 3 =', sumar(5, 3));



// --- EJERCICIO 3: readline nombre y edad ---

// import readline from 'readline';
// const readlineInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readlineInterface.question('¿Cuál es tu nombre? ', (nombre) => {
//   readlineInterface.question('¿Cuál es tu edad? ', (edad) => {
//     const añoNacimiento = new Date().getFullYear() - parseInt(edad);
//     console.log(`Hola ${nombre}, tenés ${edad} años. Naciste en el ${añoNacimiento}.`);
//     readlineInterface.close();
//   });
// });



// --- EJERCICIO 4: guardar y leer archivo ---

// import readline from 'readline';
// import fileSystem from 'fs';

// const readlineInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readlineInterface.question('Nombre: ', (nombre) => {
//   readlineInterface.question('Edad: ', (edad) => {
//     readlineInterface.question('Correo electrónico: ', (correo) => {
//       const datosUsuario = `Nombre: ${nombre}\nEdad: ${edad}\nCorreo: ${correo}\n`;

//       fileSystem.writeFile('datos_usuario.txt', datosUsuario, (error) => {
//         if (error) throw error;
//         console.log('Datos guardados.');

//         fileSystem.readFile('datos_usuario.txt', 'utf8', (errorLectura, contenido) => {
//           if (errorLectura) throw errorLectura;
//           console.log('Contenido del archivo:\n' + contenido);
//           readlineInterface.close();
//         });
//       });
//     });
//   });
// });
