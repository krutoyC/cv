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
  } else {
    input.className = "form-control is-valid";
  }
}

function validarEmail(input) {
  let expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
  if (input.value !== "" && expresionRegular.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

let checkBox = document.getElementById("terminos");
function validarCheckBox() {
  if (checkBox.checked) {
    checkBox.className = "form-control is-valid";
  } else {
    checkBox.className = "form-control is-invalid";
  }
}

checkBox.addEventListener("change",validarCheckBox)