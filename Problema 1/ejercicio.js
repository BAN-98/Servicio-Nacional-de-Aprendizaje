let figura = prompt(
  "Ingrese la figura a la cual desea encontrar su area o perimetro (1.tringulo, 2.rectangulo, 3.cuadrado, 4.circulo)");
let operacion;
let perimetro = 0 
let radio = 0
let pi = Math.PI;
switch (figura) {
  case "1":
    operacion = prompt(
      "Ingresa que operacion desas hacer (1. Buscar perimetro, 2. Buscar area)");
    let lados = Array();
    if (operacion == "1") {
      for (let i = 0; i <= 2; i++) {
        lados[i] = Number(prompt("Ingrese el lado"));
        perimetro += lados[i];
      }
      document.write(
        "<h1>El perimetro para el triangulo es : " + perimetro + " centimetros cuadrados </h1>"
      );
      alert(
        "El perimetro para el triangulo es : " + perimetro + " centimetros cuadrados"
      );
    } else {
      let b = Number(prompt("Ingrese la Base del triangulo"));
      let h = Number(prompt("Ahora ingrese la altura del triangulo"));

      area = (b * h) / 2;
      document.write("<h1>El area del triangulo es : " + area + " centrimetros cuadrados</h1>");
      alert("El area del triangulo es : " + area + " centrimetros cuadrados");
    }
        break;
    case "2" :
        operacion = prompt("Ingresa que operacion desas hacer (1. Buscar perimetro, 2. Buscar area)");
        if (operacion == "1"){
        let base = Number(prompt('Ingrese porfavor la base del rectangulo'));
        let lado = Number(prompt('Ahora Ingrese porfavor el lado del rectangulo'));
        perimetro = 2*(base + lado);
        document.write("<h1>El perimetro para el rectangulo es : " + perimetro + " centimetros cuadrados </h1>");
          alert("El perimetro para el rectangulo es : " + perimetro + " centimetros cuadrados");
        }else{
            base = Number(prompt('Ingrese porfavor la base del rectangulo'));
            lado = Number(prompt('Ahora Ingrese porfavor el lado del rectangulo'));

            area = base * lado;

            document.write("<h1>El area del rectangulo es : " + area + " centrimetros cuadrados</h1>");
            alert("El area del rectangulo es : " + area + " centrimetros cuadrados");
        }
        break
    case "3" :
        operacion = prompt("Ingresa que operacion desas hacer (1. Buscar perimetro, 2. Buscar area)");
        if (operacion == "1"){
            lado = Number(prompt('Ahora Ingrese porfavor el lado del rectangulo'));
            perimetro = 4 * lado;
            document.write("<h1>El perimetro para el cuadrado es : " + perimetro + " centimetros cuadrados </h1>");
            alert("El perimetro para el cuadrado es : " + perimetro + " centimetros cuadrados");
        }else{
            lado = Number(prompt('Ahora Ingrese porfavor el lado del rectangulo'));
            area = lado ** 2;
            document.write("<h1>El area del cuadrado es : " + area + " centrimetros cuadrados</h1>");
            alert("El area del cuadrado es : " + area + " centrimetros cuadrados");
        }
        break;
    case "4" :
        operacion = prompt("Ingresa que operacion desas hacer (1. Buscar perimetro, 2. Buscar area)");
        if (operacion == "1"){
            
            radio = Number(prompt('Ingrese el radio del circulo'));

            perimetro = 2 * pi * (radio**2);

            document.write("<h1>El perimetro para el circulo es : " + perimetro + " centimetros cuadrados </h1>");
            alert("El perimetro para el circulo es : " + perimetro + " centimetros cuadrados");
        }else{

            radio = Number(prompt('Ingrese el radio del circulo'));
            area = pi * (radio**2) ;
            document.write("<h1>El area del circulo es : " + area + " centrimetros cuadrados</h1>");
            alert("El area del circulo es : " + area + " centrimetros cuadrados");
        }
        break;
}
