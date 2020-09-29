$("#exampleModal").on("show.bs.modal", function (event) {
  let button = $(event.relatedTarget); // Button that triggered the modal
  let recipient = button.data("whatever"); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  let modal = $(this);
  modal.find(".modal-title").text("New message to " + recipient);
  modal.find(".modal-body input").val(recipient);
});

function revisar(input) {
  console.log("ejecutando la funcion revisar");

  // let elemento=document.getElementById("nombre")
  if (input.value === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}

function validarEmail(input) {
  let expresionRegular = /\w+@\w+\.[a-z]{2,}$/;
  if (input.value !== "" && expresionRegular.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

let checkBox = document.getElementById("terminos");
function validarCheckBox() {
  if (checkBox.checked) {
    checkBox.className = "form-control is-valid";

    return true;
    
  } else {
    checkBox.className = "form-control is-invalid";
    return false;
  }
 
}

checkBox.addEventListener("change",validarCheckBox)

function validarGeneral(event){
event.preventDefault();
console.log("validarGeneral");

if(revisar(document.getElementById("nombre"))&& revisar(document.getElementById("apellido"))&& validarEmail(document.getElementById("email"))&& revisar(document.getElementById("mensaje"))&& validarCheckBox()){
  
  alert("Consulta lista para ser enviada");
  enviarEmail();
}else{
  alert("Error en el formulario");
}
}

function enviarEmail(){
  let templateParams = {
    name:"De: "+ document.getElementById("nombre").value+document.getElementById("apellido").value,
    notes: "Email: "+document.getElementById("email").value+"Mensaje: "+document.getElementById("mensaje").value
};
 console.log("eviar email")
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}