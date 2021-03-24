$(document).ready(function () {
  load();
});
let getFromLS = JSON.parse(localStorage.getItem("Produkter"));
let enProduktArray = [];

function load() {
  if (getFromLS == null) {
    fetch("https://webacademy.se/fakestore/")
      .then((respone) => respone.json())
      .then((data) => render(data))
      .catch((err) => console.error(err));
  } else {
    render(getFromLS);
  }

  function render(data) {
    let output = "";
    let columns = 0;

    data.forEach((product) => {
      if (getFromLS == null) {
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
      }

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
                <button class="btnAdd btn btn-danger" id="a${product.id}">Lägg till</button>
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
    if (getFromLS == null) {
      localStorage.setItem("Produkter", JSON.stringify(enProduktArray));
      addToCart();
    }
  }
}

function addlyssnare() {
  document.querySelectorAll(".btnAdd").forEach((item) => {
    item.addEventListener("click", addProduct);
  });
}

function addProduct() {
  let getMyArray = JSON.parse(localStorage.getItem("Produkter"));

  getMyArray.forEach((element) => {
    var knappID = this.id.substring(1);
    if (element.id == knappID) {
      console.log("Plus ett");

      getMyArray[knappID - 1].amount++;

      localStorage.setItem("Produkter", JSON.stringify(getMyArray));
    }
  });
  addToCart();
}

function addToCart() {
  let getVarukorg = localStorage.getItem("Varukorg");
  if (getVarukorg === null) {
    localStorage.setItem("Varukorg", 0);
    getVarukorg = localStorage.getItem("Varukorg");
  } else {
    getVarukorg++;
    localStorage.setItem("Varukorg", getVarukorg);
  }

  document.getElementById("orderProducts").innerHTML = `
    <h2 class="text-center text">Antal varor du vill beställa: ${getVarukorg}</h2>
    <div class="mx-auto text-center">
    <a href="form.html"><button class="btnOrder btn btn-danger text-center">Se beställning</button></a>
    </div>
      `;
}
