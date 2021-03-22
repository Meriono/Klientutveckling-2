// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

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
          // Open modal after success validation, reset the form and noValidate so the form appears emtpy and no errors
          openModal();
          form.reset();
          event.preventDefault();
          event.stopPropagation();
          form.noValidate();
          localStorage.clear();
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
