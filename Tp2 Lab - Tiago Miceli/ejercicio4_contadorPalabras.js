const archivo = process.argv[2];
const palabra = process.argv[3];

if (!archivo || !palabra) {
    console.error('Uso: node contadorPalabras.js <archivo> <palabra>');
    process.exit(1);
}

const contenido = fs.readFileSync(archivo, 'utf8').toLowerCase();
const palabras = contenido.split(/\W+/);
const contador = palabras.filter(p => p === palabra.toLowerCase()).length;

console.log(`La palabra "${palabra}" aparece ${contador} veces en el archivo "${archivo}".`);
