const yargs = require("yargs");
const fs = require("fs");


// --- Comandos ---
// Saludar
// node index.js saludar --nombre="Mario"

// Despedir
// node index.js despedir --nombre="Julia"`

// Sumar n1 y n2
// node index.js sumar --n1=8 --n2=15

// Leer archivo JSON
// node index.js leer --archivo=archivo.json



const argv = yargs
  .command("saludar", "Muestra un saludo", {
    nombre: {
      describe: "Nombre de la persona",
      demandOption: true,
      type: "string",
    },
  })
  .command("despedir", "Muestra una despedida", {
    nombre: {
      describe: "Nombre de la persona",
      demandOption: true,
      type: "string",
    },
  })
  .command("sumar", "Suma dos números", {
    n1: {
      describe: "Primer número",
      demandOption: true,
      type: "number",
    },
    n2: {
      describe: "Segundo número",
      demandOption: true,
      type: "number",
    },
  })
  .command("leer", "Lee un archivo JSON", {
    archivo: {
      describe: "Ruta del archivo JSON",
      demandOption: true,
      type: "string",
    },
  })
  .help().argv;


if (argv._.includes("saludar")) {
  console.log(`Hola, ${argv.nombre}!`);
}

if (argv._.includes("despedir")) {
  console.log(`Adiós, ${argv.nombre}!`);
}

if (argv._.includes("sumar")) {
  const resultado = argv.n1 + argv.n2;
  console.log(`Resultado: ${resultado}`);
}

if (argv._.includes("leer")) {
  try {
    const contenido = fs.readFileSync(argv.archivo, "utf-8");
    const json = JSON.parse(contenido);
    console.log(json);
  } catch (error) {
    console.log("Error al leer el archivo:", error.message);
  }
}
