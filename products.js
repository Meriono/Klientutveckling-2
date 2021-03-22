$(document).ready(function () {
  console.log("ready!");
  load();
});

function load() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://webacademy.se/fakestore/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const json = JSON.parse(xhr.response);
      render(json);
    }
  };

  function render(json) {
    let output = "";
    let columns = 0;
    json.forEach((product) => {
      if (columns % 3 === 0) {
        output += `
            <div class="row gap-2">
            `;
      }
      output += `
        <div class="col alert alert-danger">
        <h2 class="text-center">${product.title}</h2>
            <div class="mx-auto text-center">
                <img
                    src= "${product.image}"
                    alt=""
                    class="border border-2 border-danger rounded-3 productImage"
                />
            </div>

            <br />

            <p>
                ${product.description}
            </p>
            <p class="fw-bold text-end">${product.price} kr</p>

            <div class="mx-auto text-center">
                <button class="btnAdd btn btn-danger">Lägg till</button>
            </div>
        </div>
        `;

      if (columns % 3 === 2) {
        output += `</div>`;

        console.log("ran at: " + columns);
      }
      columns++;
    });
    document.getElementById("productsView").innerHTML = output;
  }
}

document.getElementById("btnAdd").addEventListener("click", addProduct);
let amountOfProducts = 0;

function addProduct() {
  console.log("Klick");
  amountOfProducts++;
  document.getElementById("orderProducts").innerHTML = `
    <h2 class="text-center text">Antal varor du vill beställa: ${amountOfProducts}</h2>
      `;
}
