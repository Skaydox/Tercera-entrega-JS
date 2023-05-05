let form = document.getElementById("formulario")

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let contra = document.getElementById("contra");

let info = document.getElementById("info");
let recordar = document.getElementById("recordar");
let eliminar = document.getElementById("eliminar");

let botonJson = document.getElementById("botonJson")
let array = [];

//Carga todos los datos si existen
nombre.value = localStorage.getItem("nombre")
email.value = localStorage.getItem("email")
contra.value = sessionStorage.getItem("contrasena")

//Guarda la información a la hora de cambiar de input
form.addEventListener("change",() => {
    if(recordar.checked){
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("email",email.value);
        sessionStorage.setItem("contrasena",contra.value);
    }
})

eliminar.addEventListener("click",(event) => {
    event.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    nombre.value = "";
    email.value = "";
    contra.value = "";
})

//Modificación del DOM mediante el innterHTML para que te indique que es lo que va a suceder
recordar.addEventListener("click",() => {
    
    recordar.checked ? info.innerHTML = `¡Tus datos se guardaran automaticamente!<br>
                                        <span class="warn">(La contraseña se eliminará al cerrar la página)</span>` : info.innerText = "";
})

botonJson.addEventListener("click",(event) => {
    event.preventDefault();
    for(let i = 0; i < 3; i++){array.pop()}
    array.push(nombre.value);
    array.push(email.value);
    array.push(contra.value);
    console.log("Original: "+array);
    let enJson = JSON.stringify(array);
    console.log("En JSON.stringify: "+enJson);
    let sinJson = JSON.parse(enJson);
    console.log("En JSON.parse: "+sinJson);
    recordar.checked ? info.innerText = `datos actualizados en la consola` : info.innerText = "";
})