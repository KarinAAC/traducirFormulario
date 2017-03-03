
var title    = document.getElementById("form-signin-heading");
var email    = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button   = document.getElementsByClassName("btn")[0];
var records  = document.getElementById('records');

function translate (){
  title.innerHTML      = "Por favor inicia sesión";
  email.placeholder    = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML   = "Recordar datos";
  button.innerHTML     = "Iniciar sesión";
}
  translate();

button.addEventListener('click', function datos(event){
  event.preventDefault();

  records.innerHTML = "<ul class='form-signin'><li>" + "El correo electrónico ingresado es: " + email.value     +  "</li>"
                        + "<li>" + "La clave ingresada es: "              + password.value  + "</li>"
                        + "</li></ul>";

});
