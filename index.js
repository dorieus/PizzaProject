const basket = document.querySelector(".basket");
const btns = document.querySelector(".but");
const totalPrice = document.querySelector(".totalPrice");

const btnsArray = Array.from(btns);

class Basket {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }
  getTotalPrice() {
    let total = 0;

    for (let i = 0; i < this.products.length; i++) {
      console.log(total);
      total += this.products[i].price;
    }

    return total;
  }
}
class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const tortilla = new Basket();
const paperoni = new Product("Paperoni", 100, "images/Pepperoni.jpg");
const bavaria = new Product("Bavaria", 150, "images/bavarian.jpg");
const carbonara = new Product("Carbonara", 130, "images/carbonara.jpg");
const tuna = new Product("Tuna", 170, "images/tuna.jpg");
const tehas = new Product("Tehas", 140, "images/tehas.jpg");
const hawaiian = new Product("Hawaiian", 120, "images/hawaiian.jpg");
const tiramisu = new Product("Tiramisu", 90, "images/tiramisu.jpg");
const cheesecakes = new Product("Cheesecakes", 75, "images/cheesecake.jpg");
const pancakes = new Product("Pancakes", 60, "images/pancakes.jpg");

const products = [
  paperoni,
  bavaria,
  carbonara,
  tuna,
  tehas,
  hawaiian,
  tiramisu,
  cheesecakes,
  pancakes,
];

document.body.addEventListener("click", (event) => {
  if (event.target.innerText === "CLICK TO ADD") {
    const basket = document.querySelector(".basket");
    basket.classList.remove("hide");

    console.log("УРААА МЫ НАЖАЛИ КНОПКУ");

    const productName = event.target.value;
    const productEl = products.find((product) => {
      return product.name === productName;
    });

    const div = document.createElement("div");
    const row = document.createElement("div");
    const pName = document.createElement("p");
    const pPrice = document.createElement("p");
    const img = document.createElement("img");
    const delBtn = document.createElement("button");

    pName.innerText = productEl.name;
    pName.className = "ml-2";
    pPrice.innerText = productEl.price + "UAH";
    pPrice.className = "text-center";
    delBtn.className = "del-item";

    delBtn.value = productEl.name;

    div.className = "delete-box";
    row.className = "row";
    img.src = productEl.image;
    img.className = "ml-2";
    img.style.width = "50px";
    img.style.height = "40px";

    tortilla.products.push(productEl);

    totalPrice.innerText = "Total: " + tortilla.getTotalPrice() + "UAH";
    console.log(tortilla);

    row.appendChild(img);
    row.appendChild(pName);
    div.appendChild(row);
    div.appendChild(pPrice);
    row.appendChild(delBtn);

    basket.insertBefore(div, totalPrice);
  }

  if (event.target.className === "del-item") {
    let elementDel = 0;
    for (let i = 0; i < tortilla.products.length; i++) {
      if (tortilla.products[i].name === event.target.value) elementDel = i;
    }

    tortilla.products.splice(elementDel, 1);
    totalPrice.innerText = "Total: " + tortilla.getTotalPrice() + "UAH";

    event.target.parentElement.parentElement.remove();
  }
});

const close = document.querySelector(".close");

close.addEventListener("click", () => {
  close.parentElement.parentElement.classList.add("hide");
});
