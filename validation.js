if (localStorage.length == 0) {
  document.getElementById("greenbox").style.display = "none";
} else {
  document.getElementById("bluebox").style.display = "none";
}

function validateForm() {
  let errors;

  // Form Elements
  let firstname = document.querySelector("#firstname");
  let lastname = document.querySelector("#lastname");
  let phonenumber = document.querySelector("#phonenumber");
  let email = document.querySelector("#email");
  let address = document.querySelector("#address");
  let city = document.querySelector("#city");
  let zip = document.querySelector("#zip");

  // Regular Expressions
  let alpha = /^[a-z]+$/i;
  let emailValidation = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{2,3}$/i;

  errors = 0;

  // Textboxes
  alpha.test(firstname.value) ? valid(firstname) : invalid(firstname);
  alpha.test(lastname.value) ? valid(lastname) : invalid(lastname);
  alpha.test(phonenumber.value) ? valid(phonenumber) : invalid(phonenumber);
  alpha.test(address.value) ? valid(address) : invalid(address);
  alpha.test(city.value) ? valid(city) : invalid(city);
  alpha.test(zip.value) ? valid(zip) : invalid(zip);
  emailValidation.test(email.value) ? valid(email) : invalid(email);

  // Validation Helpers
  function invalid(element) {
    element.classList.add("is-invalid");
    errors++;
  }
  function valid(element) {
    element.classList.remove("is-invalid");
  }
  return errors > 0 ? false : true;
}

function openModal() {
  var myModalEl = document.getElementById("staticBackdrop");
  var modal = new bootstrap.Modal(myModalEl); // Returns a Bootstrap modal instance
  modal.show();
}

function closeModal() {
  localStorage.clear();
  document.getElementById("greenbox").style.display = "none";
  document.getElementById("bluebox").style.display = "block";
  document.getElementById("varukorgOutput").innerHTML = "";
}
