let output = "";
let summa = 0;
let getMyArray = JSON.parse(localStorage.getItem("Produkter"));
if (getMyArray != null) {
  getMyArray.forEach((produkt) => {
    if (produkt.amount > 0) {
      output += `
          <div class="grid">
          <ul class="list-inline">
            <li class="list-inline-item col-3"><p>${produkt.title}</p></li>
            <li class="list-inline-item col-2">
              <input type="number" min="1" style="width: 30%" value="${
                produkt.amount
              }" />
            </li>
            <li class="list-inline-item col-2"><p>${produkt.price} kr</p></li>
            <li class="list-inline-item col-2"><p>${
              produkt.price * produkt.amount
            } kr</p></li>
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
