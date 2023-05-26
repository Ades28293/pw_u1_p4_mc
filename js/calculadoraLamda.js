const sumar = (num1, num2) => num1 + num2;

const sumarNumeros = () => {
  var numero1 = convertir("idNum1");
  var numero2 = convertir("idNum2");

  document.getElementById("labelResultado").innerHTML =
    "Resultado=" + sumar(numero1, numero2);
}
//una forma
/*const restar=(num1, num2)=> {

    return num1 - num2;
}*/

const restar = (num1, num2) => num1 - num2;

const restarNumeros = () => {
  var numero1 = convertir("idNum1");
  var numero2 = convertir("idNum2");

  document.getElementById("labelResultado").innerHTML =
    "Resultado=" + restar(numero1, numero2);
}

const dividir = (num1, num2) => num1 / num2;

const dividirNumeros = () => {
  var numero1 = convertir("idNum1");
  var numero2 = convertir("idNum2");

  document.getElementById("labelResultado").innerHTML =
    "Resultado=" + dividir(numero1, numero2);
}

const multiplicar = (num1, num2) => num1 * num2;

const multiplicarNumeros = () => {
  var numero1 = convertir("idNum1");
  var numero2 = convertir("idNum2");

  document.getElementById("labelResultado").innerHTML =
    "Resultado=" + multiplicar(numero1, numero2);
}

const convertir = (idCampo) => {
  console.log("Convertir" + idCampo);
  return parseInt(document.getElementById(idCampo).value);
}

const eliminarElemento = () => {
  document.getElementById("ideliminar").remove();
}

const insertarElemento = () => {
  document.getElementById("elemento").innerHTML = "<strong>Importante</strong>";
}

const conceptosJs = () => {
  //declaracion de variables
  //var (ya no es comunmente utilizada)
  //let
  //const

  var variable1 = "Michael";

  var variable2 = 1;

  let variable3 = "Michael";
  let variable4 = 4;

  const variable5 = "Zhong";
  const variable6 = 8;

  console.log(variable3);

  //Declaración de arreglos

  const diasSemana = ["Lunes", "Martes", "Miercoles"];
  console.log(diasSemana);

  //Imprimir el indice 0 del arreglo
  console.log(diasSemana[0]);

  //Insertar en el arreglo
  diasSemana.push("Jueves");
  diasSemana.push("Viernes");
  console.log(diasSemana);

  //copncatenar dos arreglos
  const diasFinSemana = ["Sabado", "Domingo"];
  console.log(diasSemana.concat(diasFinSemana));
  console.log(diasSemana);

  //utlizamos una variable para imprimir todo
  const diasCompletos = diasSemana.concat(diasFinSemana);
  console.log(diasCompletos);

  //Utilizamos el for para recorrer
  for (const dia of diasCompletos) {
    console.log(dia);
  }

  //Declaración de Objetos

  const persona = {
    nombre: "Michael",
    apellido: "Cen",
    edad: 33,
    ciudad: "Quito",
  }

  console.log(persona);

  //Declarar un objeto dentro de otro objeto
  const persona2 = {
    nombre: "Zhong",
    apellido: "Cen",
    edad: 24,
    ciudad: "Quito",
    vehiculo: {
      marca: "Toyota",
      modelo: "Prius",
      anio: 1989,
    },
  }

  console.log(persona2);

  /* 
   da error al cambiar una constantye
   const test="Juanito";
    test="Pepe";
    console.log(test);

    const test2=['MIchael','Zhong'];
    test=['Pepe','Gaaaa'];
    console.log(test2);

    */
  //Cuando vale cambiar algo por solo una posicion
  //Cuando cambia solo el contenida si vale pero si cambio el vector si 
  //da error si cambia el vector en si
  const tes3 = ["MIchael", "Zhong"];
  tes3[0] = "Pepe";
  console.log(tes3);


  //Desestructuracion de arreglos 
  const dias2=["Lunes", "Martes", "Miercoles","Jueves","Viernes"];
  const [dia1,dia2,dia3,dia4]=dias2;
  console.log(dia2);
  console.log(dia4);


  const [d1,d2,d3,d5]=["Lunes", "Martes", "Miercoles","Jueves","Viernes"];

  console.log(d1);
  console.log(d5);

   //Desestructuracion de objetos 

   const persona3 = {
    nombre: "Michael",
    apellido: "Cen",
    edad: 33,
    ciudad: "Quito",
  }
  //es con llaves
  const {nombre,ciudad}=persona3;

  console.log(nombre);
  console.log(ciudad);

  //Desestructuracion un objeto dentro de otro objeto
  const persona4 = {
    nombre: "Zhong",
    apellido: "Cen",
    edad: 24,
    ciudad: "Quito",
    vehiculo: {
      marca: "Toyota",
      modelo: "Prius",
      anio: 1989,
    },
  }

  const {vehiculo}=persona4;
  console.log(vehiculo.marca);
  
  const{marca,anio}=vehiculo
  console.log(marca);
  console.log(anio);

}


