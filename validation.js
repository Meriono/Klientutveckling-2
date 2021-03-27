if (localStorage.length == 0) {
  document.getElementById("greenbox").style.display = "none";
} else {
  document.getElementById("bluebox").style.display = "none";
}

const form = document.getElementById("formSubmit");
form.addEventListener("submit", openModal);

function validateForm() {
  let errors;

  let firstname = document.querySelector("#firstname");
  let lastname = document.querySelector("#lastname");
  let phonenumber = document.querySelector("#phonenumber");
  let email = document.querySelector("#email");
  let address = document.querySelector("#address");
  let city = document.querySelector("#city");
  let zip = document.querySelector("#zip");

  let textValidation = /^[a-z]+$/i;
  let numberValidation = /^[0-9]+$/i;
  let emailValidation = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{2,3}$/i;

  errors = 0;

  textValidation.test(firstname.value) ? valid(firstname) : invalid(firstname);
  textValidation.test(lastname.value) ? valid(lastname) : invalid(lastname);
  numberValidation.test(phonenumber.value)
    ? valid(phonenumber)
    : invalid(phonenumber);
  textValidation.test(address.value) ? valid(address) : invalid(address);
  textValidation.test(city.value) ? valid(city) : invalid(city);
  numberValidation.test(zip.value) ? valid(zip) : invalid(zip);
  emailValidation.test(email.value) ? valid(email) : invalid(email);

  function invalid(element) {
    element.classList.add("is-invalid");
    errors++;
  }
  function valid(element) {
    element.classList.remove("is-invalid");
  }

  return errors > 0 ? false : true;
}

function openModal(event) {
  var myModalEl = document.getElementById("staticBackdrop");
  var modal = new bootstrap.Modal(myModalEl); // Returns a Bootstrap modal instance
  modal.show();
  event.preventDefault();
}

function closeModal() {
  localStorage.clear();
  document.getElementById("greenbox").style.display = "none";
  document.getElementById("bluebox").style.display = "block";
  document.getElementById("varukorgOutput").innerHTML = "";
}
