

let edades = [];

for (let i = 0; i < 10; i++) {
  let edad = prompt('Ingrese la edad de la persona'+ i + 1 );

  while (isNaN(edad) || parseInt(edad) < 1 || parseInt(edad) > 120) {
    edad = prompt('Ingrese una edad válida para la persona '+ i + 1);
  }

  edades.push(parseInt(edad));
}

let menores_de_edad = 0;
let mayores_de_edad = 0;
let adultos_mayores = 0;
let edad_mas_baja = Infinity;
let edad_mas_alta = -Infinity;
let suma_edades = 0;

for (let i = 0; i < edades.length; i++) {
  let edad = edades[i];

  if (edad < 18) {
    menores_de_edad++;
  } else if (edad >= 18 && edad < 60) {
    mayores_de_edad++;
  } else {
    adultos_mayores++;
  }

  if (edad < edad_mas_baja) {
    edad_mas_baja = edad;
  }

  if (edad > edad_mas_alta) {
    edad_mas_alta = edad;
  }

  suma_edades += edad;
}

let promedio_edades = suma_edades / edades.length;

console.log('Menores de edad: ' + menores_de_edad);
console.log('Mayores de edad: ' + mayores_de_edad);
console.log('Adultos mayores: ' + adultos_mayores);
console.log('Edad más baja: ' + edad_mas_baja);
console.log('Edad más alta: ' + edad_mas_alta);
console.log('Promedio de edades: ' + promedio_edades);

