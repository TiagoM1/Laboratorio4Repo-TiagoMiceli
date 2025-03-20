const contactosFile = 'contactos.json';

// Crear archivo inicial si no existe
if (!fs.existsSync(contactosFile)) {
    fs.writeFileSync(contactosFile, JSON.stringify([], null, 4));
}

// Función para agregar contacto
function agregarContacto(nombre, telefono, email) {
    const contactos = JSON.parse(fs.readFileSync(contactosFile, 'utf8'));
    contactos.push({ nombre, telefono, email });
    fs.writeFileSync(contactosFile, JSON.stringify(contactos, null, 4));
}

// Función para mostrar contactos
function mostrarContactos() {
    const contactos = JSON.parse(fs.readFileSync(contactosFile, 'utf8'));
    console.log(contactos);
}

// Función para eliminar contacto por nombre
function eliminarContacto(nombre) {
    let contactos = JSON.parse(fs.readFileSync(contactosFile, 'utf8'));
    contactos = contactos.filter(c => c.nombre !== nombre);
    fs.writeFileSync(contactosFile, JSON.stringify(contactos, null, 4));
}

// Código de prueba
agregarContacto('Carlos López', '987-654-3210', 'carlos@example.com');
mostrarContactos();
eliminarContacto('Juan Pérez');
mostrarContactos();
