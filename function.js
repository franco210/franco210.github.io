
function bigImg(x) {
    x.style.height = "350px";
    x.style.width = "350px";
  }

function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
  }

function captura(){
  var nombre=document.getElementById("nombre").value;
  var apellido=document.getElementById("apellido").value;
  var email=document.getElementById("email").value;
  var motivo=document.getElementById("motivo").value;

  if (nombre=="" || email=="" || apellido==""){

    if (nombre==""){
      alert("El nombre es obligatorio");
      document.getElementById("nombre").focus();
      document.getElementById('nombre').style.backgroundColor= 'red';
    }

    if(email==""){
      alert("El email es obligatorio");
    document.getElementById("email").focus();
    document.getElementById('email').style.backgroundColor= 'red';
    }

    if(apellido==""){
      alert("El apellido es obligatorio");
    document.getElementById("apellido").focus();
    document.getElementById('apellido').style.backgroundColor= 'red';
    }

  }
  else{
  console.log( "Nombre:" + nombre + "   Apellido:" + apellido + "   Email:" + email + "   Motivo:" +motivo)
  document.getElementById('change').innerHTML="Gracias por contactarte";
  document.getElementById('send').style.backgroundColor = 'green';
  document.getElementById('nombre').style.backgroundColor= 'white';
  document.getElementById('email').style.backgroundColor= 'white';
  document.getElementById('apellido').style.backgroundColor= 'white';
  }
}