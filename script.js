
// Pedimos los datos
function ejecutarPrograma(){
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    const opcion = Number(prompt("Ingrese una opcion para ver la informacion del producto \n1. Cintos Homologados\n2. Buso Homologado\n3. Casco Homologado\n4. Ropa Interior Homologada"))

    const usuario = nombre + " " + apellido

    // transladamos todo a otra funcion para que se ejecute el programa
    return buscador(usuario, opcion)
}

// Proceso critico
function buscador(usuario, opcion){
    // si es un numero, ejecuta lo demas, si no es un numero, muestra el error
    if (opcion >= 1 && opcion <= 4) {
        console.log("Bienvenido", usuario, "a nuestro sitio web!")
        switch (opcion) {
          case 1:
            console.log("Cintos Homologados\nSin stock");
            break;
          case 2:
            console.log("Buso Antiflama OMP Homologado\n$120.000");
            break;
          case 3:
            console.log("Casco Cerrado Homologado\n$200.000");
            break;
          case 4:
            console.log("Pack de Ropa Interior Homologada\n$40.000");
            break;
        }
    }else{
        if (opcion > 1 || opcion < 4){
            alert("Error: Opcion Incorrecta")
            console.warn("Error: Opcion Incorrecta, ingrese otra opcion");
        }else{
            alert("Error: No ingresaste una opcion valida")
        }
    };
}

console.log(ejecutarPrograma())
