class Persona {
    constructor(nombre, identificacion, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen) {
      this.nombre = nombre;
      this.identificacion = identificacion;
      this.fechaNacimiento = fechaNacimiento;
      this.correoElectronico = correoElectronico;
      this.ciudadResidencia = ciudadResidencia;
      this.ciudadOrigen = ciudadOrigen;
      this.cancionesFavoritas = [];
    }
  }
  
  let personas = [];
  
  for (let i = 1; i <= 6; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i}`);
    let identificacion = prompt(`Ingrese el número de identificación de la persona ${i}`);
    let fechaNacimiento = prompt(`Ingrese la fecha de nacimiento de la persona ${i}`);
    let correoElectronico = prompt(`Ingrese el correo electrónico de la persona ${i}`);
    let ciudadResidencia = prompt(`Ingrese la ciudad de residencia de la persona ${i}`);
    let ciudadOrigen = prompt(`Ingrese la ciudad de origen de la persona ${i}`);
  
    let persona = new Persona(nombre, identificacion, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen);
  
    for (let j = 1; j <= 3; j++) {
      let artista = prompt(`Ingrese el artista de la canción favorita ${j} de la persona ${i}`);
      let titulo = prompt(`Ingrese el título de la canción favorita ${j} de la persona ${i}`);
      persona.cancionesFavoritas.push({artista, titulo});
    }
  
    personas.push(persona);
  }
  
  console.log(personas);
  