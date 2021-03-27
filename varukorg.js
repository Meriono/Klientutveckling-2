$(document).ready(function () {
  viewOrder();
});

function viewOrder() {
  let output = "";
  let summa = 0;
  let getMyArray = JSON.parse(localStorage.getItem("Produkter"));
  if (getMyArray != null) {
    getMyArray.forEach((produkt) => {
      if (produkt.amount > 0) {
        output += `
          <div class="grid">
          <ul class="ll list-inline">
            <li class="list-inline-item col-3"><p>${produkt.title}</p></li>
            <li class="list-inline-item col-2">
              <input class="inputAmount" id="a${
                produkt.id
              }" type="number" min="1" style="width: 30%" value="${
          produkt.amount
        }" oninput="this.value = Math.abs(this.value)"/>
            </li>
            <li class="list-inline-item col-2"><p>${produkt.price} kr</p></li>
            <li class="list-inline-item col-2"><p>${
              produkt.price * produkt.amount
            } kr</p></li>
            <li class="list-inline-item col-2"><button class="btnDelete btn btn-light btn-sm" id="d${
              produkt.id
            }">Ta bort<br>alla varor</button></li>
          </ul>
        </div>
          `;

        summa += produkt.price * produkt.amount;
      }
    });
  }

  output += `
<h4 class="text-end" id="Totalsumma">Totalsumma: ${summa} kr</h4>
`;

  document.getElementById("varukorgOutput").innerHTML = output;
  addlyssnareKnapp();
  addlyssnareAntal();
}

function addlyssnareKnapp() {
  document.querySelectorAll(".btnDelete").forEach((item) => {
    item.addEventListener("click", deleteAllProducts);
  });
}
function addlyssnareAntal() {
  document.querySelectorAll(".inputAmount").forEach((item) => {
    item.addEventListener("change", updateAmount);
  });
}

function deleteAllProducts() {
  let getFromLS = JSON.parse(localStorage.getItem("Produkter"));

  getFromLS.forEach((element) => {
    var knappID = this.id.substring(1);
    if (element.id == knappID) {
      getFromLS[knappID - 1].amount = 0;

      localStorage.setItem("Produkter", JSON.stringify(getFromLS));
      this.closest(".ll").remove();
    }
  });
  viewOrder();
}

function updateAmount(event) {
  let getFromLS = JSON.parse(localStorage.getItem("Produkter"));

  getFromLS.forEach((element) => {
    var knappID = this.id.substring(1);
    if (element.id == knappID) {
      var input = Number(event.target.value);
      getFromLS[knappID - 1].amount = input;

      localStorage.setItem("Produkter", JSON.stringify(getFromLS));
    }
  });
  updateVarukorgAmount();
  viewOrder();
}

function updateVarukorgAmount() {
  let getMyArray = JSON.parse(localStorage.getItem("Produkter"));
  let summa = 0;
  if (getMyArray != null) {
    getMyArray.forEach((produkt) => {
      if (produkt.amount > 0) {
        summa += produkt.amount;
      }
    });
  }
  localStorage.setItem("Varukorg", summa);
}
