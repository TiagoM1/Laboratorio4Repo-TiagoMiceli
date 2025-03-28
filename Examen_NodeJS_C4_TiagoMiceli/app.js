const fs = require("fs/promises");
const readline = require("readline");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).option("file", {
  alias: "f",
  type: "string",
  description: "Nombre del archivo JSON",
  default: "productos.json",
}).argv;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const preguntar = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => resolve(respuesta));
  });
};

async function main() {
  const nombre = await preguntar("Producto: ");
  const precioStr = await preguntar("Precio: ");
  const cantidadStr = await preguntar("Cantidad: ");

  const precio = parseFloat(precioStr);
  const cantidad = parseInt(cantidadStr);

  // Validaciones

  // Valida que el nombre no esté vacío
  if (!nombre.trim()) {
    console.log("El producto no puede estar vacío.");
    rl.close();
    return;
  }

  // Valida que el precio sea un número positivo
  if (isNaN(precio) || precio < 0) {
    console.log("El precio no puede ser negativo.");
    rl.close();
    return;
  }

  // Valida que la cantidad sea un número entero positivo
  if (!Number.isInteger(cantidad) || cantidad < 0) {
    console.log("La cantidad debe ser un número entero y positivo.");
    rl.close();
    return;
  }

  // Valida que el archivo tenga la extensión .json

  const nuevoProducto = { nombre, precio, cantidad };
  let productos = [];

  try {
    const datos = await fs.readFile(argv.file, "utf-8");
    productos = JSON.parse(datos);
  } catch (err) {
    console.log(" --- Archivo no encontrado, se creará uno nuevo ---");
  }
  productos.push(nuevoProducto);

  await fs.writeFile(argv.file, JSON.stringify(productos, null, 2));

  console.log("\n --- Producto guardado correctamente ---");
  console.log("\n Contenido del archivo:");
  const resultadoFinal = await fs.readFile(argv.file, "utf-8");
  console.log(resultadoFinal);

  rl.close();
}

main();
