$(document).ready(function () {
  load();
});
let enProduktArray = [];

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
      const enProduktTillArray = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        category: product.category,
        amount: 0,
      };
      enProduktArray.push(enProduktTillArray);

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
                <button class="btnAdd btn btn-danger" id="${product.id}">Lägg till</button>
            </div>
        </div>
        `;

      if (columns % 3 === 2) {
        output += `</div>`;
      }
      columns++;
    });
    document.getElementById("productsView").innerHTML = output;
    addlyssnare();
    localStorage.setItem("Produkter", JSON.stringify(enProduktArray));
  }
}

function addlyssnare() {
  document.querySelectorAll(".btnAdd").forEach((item) => {
    item.addEventListener("click", addProduct);
  });
}

let amountOfProducts = 0;

function addProduct() {
  amountOfProducts++;
  document.getElementById("orderProducts").innerHTML = `
    <h2 class="text-center text">Antal varor du vill beställa: ${amountOfProducts}</h2>
    <div class="mx-auto text-center">
    <a href="form.html"><button class="btnOrder btn btn-danger text-center">Se beställning</button></a>
    </div>
      `;

  enProduktArray.forEach((element) => {
    if (element.id == this.id) {
      let getMyArray = JSON.parse(localStorage.getItem("Produkter"));

      if (enProduktArray[this.id - 1].amount == 0) {
        getMyArray[this.id - 1].amount++;
      } else {
        getMyArray[this.id - 1].amount = element.amount++;
      }
      localStorage.setItem("Produkter", JSON.stringify(getMyArray));
    }
  });
}




/*
id
title
description
image
price
category
amount
*/
