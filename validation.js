// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  if (localStorage.length == 0) {
    document.getElementById("greenbox").style.display = "none";
  }
  else{
    document.getElementById("bluebox").style.display = "none";

  }
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Open modal after success validation
          openModal();
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function openModal() {
  var myModalEl = document.getElementById("staticBackdrop");
  var modal = new bootstrap.Modal(myModalEl); // Returns a Bootstrap modal instance
  modal.show();
}

function closeModal() {
  localStorage.clear();
  form.reset();
  document.getElementById("greenbox").style.display = "none";
  document.getElementById("bluebox").style.display = "block";
  document.getElementById("varukorgOutput").innerHTML = "";
}
