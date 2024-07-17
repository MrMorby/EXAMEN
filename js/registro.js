//funcion validar registro
function validarReg(){
    var varNombre = false;
    var varCorreo = false;
    var varContraseña = false;
    var varVContraseña = false;
    var varTelefono = false;

    var regNombre = document.getElementById("nombre").value;
    var regCorreo = document.getElementById("correo").value;
    var regContraseña = document.getElementById("contraseña").value;
    var regVContraseña = document.getElementById("vcontraseña").value;
    var regTelefono = document.getElementById("telefono").value

    //comprobar nombre
    if (regNombre ===""){
        document.getElementById("mensaje1").textContent = "Este campo no puede estar vacío.";
    }
    else if (regNombre.length < 3 || regNombre.length > 20){
        document.getElementById("mensaje1").textContent = "El nombre debe tener entre 3 y 20 caracteres."
    }
    else{
        varNombre =true;
        document.getElementById("mensaje1").textContent = ""
    }

    //comprobar correo
    if (regCorreo === "") {
        document.getElementById("mensaje2").textContent = "Debe ingresar un correo ";
    } else if (!regCorreo.includes('@')) {
        document.getElementById("mensaje2").textContent = "Correo no válido";
    } else if (!/@[^\s@]+$/.test(regCorreo)) {
        document.getElementById("mensaje2").textContent = "Correo no válido";
    } else if (!regCorreo.includes('.')) {
        document.getElementById("mensaje2").textContent = "Correo no válido";
    }
     else if (!/\.[^\s@]+$/.test(regCorreo)) {
        document.getElementById("mensaje2").textContent = "Correo no válido";
    }
    else {
        varCorreo = true; 
        document.getElementById("mensaje2").textContent = "";
    }

    //comprobar contraseña
    if (regContraseña === ""){
        document.getElementById("mensaje3").textContent = "Este campo no puede estar vacío.";
    }
    else if (regContraseña.length <8 || regContraseña.length > 20) {
        document.getElementById("mensaje3").textContent = "La contraseña debe tener entre 8 y 20 caracteres.";
    }
    else {
        varContraseña = true;
        document.getElementById("mensaje3").textContent = "";
    }

    //comprobar confirmacion contraseña
    if (regVContraseña ===""){
        document.getElementById("mensaje4").textContent = "Este campo no puede estar vacío.";
    }

    if (regVContraseña !== regContraseña){
        document.getElementById("mensaje4").textContent = "Las contraseñas no coinciden.";
    }
    else{
        varVContraseña = true
        document.getElementById("mensaje4").textContent = "";
    }
    //comprobar numero de teléfono
    if (regTelefono === ""){
        document.getElementById("mensaje5").textContent = "Este campo no puede estar vacío.";
    }
    else if (regTelefono.length<9 || regTelefono.length>9){
        document.getElementById("mensaje5").textContent = "Numero de teléfono no válido.";
    }
    else{
        varTelefono = true;
        document.getElementById("mensaje5").textContent = "";
    }

    //
    if (varNombre && varCorreo && varContraseña && varVContraseña && varTelefono) { 
        // Redirigir a la pagina de login 
        window.location.href = "presentacion.html";
    }
}

//funcion validar inicio sesion
function validarIngreso(){
    var varCorreo = false;
    var varContraseña = false;

    var iniCorreo = document.getElementById("correo").value;
    var iniContraseña = document.getElementById("contraseña").value;

    //comprobacion correo
    if (iniCorreo === "") {
        document.getElementById("mensaje1").textContent = "Debe ingresar un correo ";
    } else if (!iniCorreo.includes('@')) {
        document.getElementById("mensaje1").textContent = "Correo no válido";
    } else if (!/@[^\s@]+$/.test(iniCorreo)) {
        document.getElementById("mensaje1").textContent = "Correo no válido";
    } else if (!iniCorreo.includes('.')) {
        document.getElementById("mensaje1").textContent = "Correo no válido";
    }
     else if (!/\.[^\s@]+$/.test(iniCorreo)) {
        document.getElementById("mensaje1").textContent = "Correo no válido";
    }
    else {
        varCorreo = true; 
        document.getElementById("mensaje1").textContent = "";
    }

    //comprobacion contraseña
    if (iniContraseña === ""){
        document.getElementById("mensaje2").textContent = "Este campo no puede estar vacío.";
    }
    else {
        varContraseña = true;
        document.getElementById("mensaje2").textContent = "";
    }

     //Redirije a la pagina principal 
     if (varCorreo===true && varContraseña===true)
        { 
        window.location.href="presentacion.html";
    }

}