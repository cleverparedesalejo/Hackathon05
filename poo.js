class Cliente {
    constructor(firstname, lastname, numerocelular){
      this.firstname=firstname;
      this.lastname=lastname;
      this.numerocelular=numerocelular;
    }
    ingresartelefono(revision){
      this.revision=revision;
      console.log(`El cliente ${this.lastname} ingreso su equipo numero ${this.numerocelular} para ser evaluado por servicio tecnico`);
    }
  }
  
  class Telefono {
    constructor(numeroSerie, imei, marca) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.diagnostico = '';
      this.autorizacion = false;
      this.abono = 0;
    }
  
    pasarPrimeraRevision(diagnostico) {
      this.diagnostico = diagnostico;
      console.log(`El teléfono ${this.numeroSerie} ha pasado la primera revisión. Diagnóstico: ${this.diagnostico}`);
    }
  
    obtenerAutorizacion(abono) {
      if (abono >= 0.5 * this.reparacionTotal) {
        this.autorizacion = true;
        this.abono = abono;
        console.log(`Autorización obtenida para el teléfono ${this.numeroSerie}. Abono realizado: ${this.abono}`);
      } else {
        console.log('Se requiere un abono del 50% para obtener autorización.');
      }
    }
  
    get reparacionTotal() {
      // Lógica para calcular el costo total de la reparación basado en los repuestos, mano de obra, etc.
      return 100; // Ejemplo de costo total
    }
  }
  
  // Clase para representar a un Técnico
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    revisarTelefono(telefono) {
      // Lógica para revisar el teléfono y aplicar las habilidades del técnico
      console.log(`El técnico ${this.nombre} está revisando el teléfono ${telefono.numeroSerie}.`);
    }
  }
  
  // Instanciar objetos
  let cliente1 = new Cliente('Eloy', 'Paredes', ' 988756352')
  let telefono1 = new Telefono('123456', 'IMEI1235', 'Samsung');
  let tecnico1 = new Tecnico('Clever', ['Samsung']);
  
  // Simulación de proceso
  cliente1.ingresartelefono('reparar');
  tecnico1.revisarTelefono(telefono1);
  telefono1.pasarPrimeraRevision('Problema en la pantalla');
  
  // Obtener autorización y realizar abono
  telefono1.obtenerAutorizacion(50);
  
  // Mostrar estado del teléfono
  console.log(`El cliente ${cliente1.lastname} abono el 50%`);
  console.log(`Estado del teléfono ${telefono1.numeroSerie}:`);
  console.log(`Diagnóstico: ${telefono1.diagnostico}`);
  console.log(`Autorización: ${telefono1.autorizacion ? 'Sí' : 'No'}`);
  console.log(`Abono: ${telefono1.abono}`);