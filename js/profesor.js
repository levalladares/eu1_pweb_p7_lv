
function guardarProfesor() {
    let cedula = document.getElementById('cedulaP').value;
    let nombreP = document.getElementById('nombreP').value;
    let apellidoP = document.getElementById('apellidoP').value;
    console.log(cedula)
    let profesor = {
        nombre: nombreP,
        apellido: apellidoP,
        cedula: cedula
    }
    console.log(profesor);

    
    let jsonInput = document.getElementById('jsonID');
    console.log(jsonInput);
    jsonInput.value = JSON.stringify(profesor);


    console.log("prueba codProfe: "+JSON.stringify(profesor));
 

}


function botonJSON() {
    let json = document.getElementById('jsonID').value;
    console.log(json);
    let jsonParse = JSON.parse(json);
    document.getElementById('cedulaP').value = jsonParse.cedula;
    document.getElementById('nombreP').value = jsonParse.nombre;
    document.getElementById('apellidoP').value = jsonParse.apellido;
}