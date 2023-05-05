let form = document.getElementById("formulario")

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let contra = document.getElementById("contra");

let info = document.getElementById("info");
let recordar = document.getElementById("recordar");


nombre.value = localStorage.getItem("nombre")
email.value = localStorage.getItem("email")
contra.value = sessionStorage.getItem("contrasena")

form.addEventListener("change",() => {
    if(recordar.checked){
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("email",email.value);
        sessionStorage.setItem("contrasena",contra.value);
    }
})

recordar.addEventListener("click",() => {
    recordar.checked ? info.innerHTML = `¡Tus datos se guardaran automaticamente!<br>
                                        <span class="warn">(La contraseña se eliminará al cerrar la página)</span>` : info.innerHTML = ""
})