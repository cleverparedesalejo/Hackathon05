// Función para agregar un nuevo teléfono
function agregarTelefono(numeroSerie, imei, marca) {
    // Obtener la lista actual de teléfonos desde localStorage
    let telefonos = JSON.parse(localStorage.getItem('telefonos')) || [];
  
    // Crear un nuevo objeto de teléfono
    const nuevoTelefono = {
      numeroSerie: numeroSerie,
      imei: imei,
      marca: marca
    };
  
    // Agregar el nuevo teléfono a la lista
    telefonos.push(nuevoTelefono);
  
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('telefonos', JSON.stringify(telefonos));
  
    console.log('Teléfono agregado correctamente.');
  }
  
  // Función para obtener la lista de teléfonos
  function obtenerTelefonos() {
    // Obtener la lista de teléfonos desde localStorage
    const telefonos = JSON.parse(localStorage.getItem('telefonos')) || [];
  
    // Mostrar la lista en la consola
    console.log('Lista de Teléfonos:');
    console.log(telefonos);
  }
  
  // Función para borrar todos los teléfonos almacenados
  function borrarTodosLosTelefonos() {
    // Borrar la clave 'telefonos' de localStorage
    localStorage.removeItem('telefonos');
  
    console.log('Todos los teléfonos han sido borrados.');
  }
  
  // Ejemplos de uso
  agregarTelefono('12345', 'IMEI123', 'Samsung');
  agregarTelefono('67890', 'IMEI456', 'iPhone');
  obtenerTelefonos();
  borrarTodosLosTelefonos();
  obtenerTelefonos();