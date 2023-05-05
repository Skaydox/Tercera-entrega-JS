let form = document.getElementById("formulario")

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let contra = document.getElementById("contra");

let info = document.getElementById("info");
let recordar = document.getElementById("recordar");
let eliminar = document.getElementById("eliminar");

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
                                        <span class="warn">(La contraseña se eliminará al cerrar la página)</span>` : info.innerHTML = "";
})