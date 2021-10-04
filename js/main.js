let ver=document.getElementById("ver");
let clave=document.getElementById("clave")
let icono=document.getElementById("icono")
let con=true

ver.addEventListener("click", function(){
    if (con==true) {
        clave.type="text"
        icono.classList.add("fa-eye-slash")
        con=false
    } else {
        clave.type="password"
        icono.classList.remove("fa-eye-slash")
        con=true
    }
})


function ir(){
    var c=12345;
    var u="prada";
    if(document.form.clave.value==c && document.form.usuario.value==u){
        alert("Inicio sesion correctamente");
        window.location="index.html";}

        else{
            alert("Ingrese usuario y contraseña correcta");
        }



}