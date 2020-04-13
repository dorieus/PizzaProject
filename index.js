const basket = document.querySelector(".basket");
const btns = document.querySelectorAll(".but");
const totalPrice = document.querySelector(".totalPrice");

const btnsArray = Array.from(btns);

class Basket {
  constructor() {
    this.pizzas = [];
    this.totalPrice = 0;
  }
}
class Pizza {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const tortilla = new Basket();
const paperoni = new Pizza("Paperoni", 100, "images/Pepperoni.jpg");
const bavaria = new Pizza("Bavaria", 150, "images/bavarian.jpg");
const carbonara = new Pizza("Carbonara", 130, "images/carbonara.jpg");
const tuna = new Pizza("Tuna", 170, "images/tuna.jpg");
const tehas = new Pizza("Tehas", 140, "images/tehas.jpg");
const hawaiian = new Pizza("Hawaiian", 120, "images/hawaiian.jpg");

const pizzas = [paperoni, bavaria, carbonara, tuna, tehas, hawaiian];

btnsArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    const pizzaName = Array.from(event.target.classList).filter(
      (className) => className !== "but"
    )[0];
    const pizzaEl = pizzas.find((pizza) => {
      return pizza.name === pizzaName;
    });

    const div = document.createElement("div");
    const row = document.createElement("div");
    const pName = document.createElement("p");
    const pPrice = document.createElement("p");
    const img = document.createElement("img");

    pName.innerText = pizzaEl.name;
    pPrice.innerText = pizzaEl.price + "UAH";
    pPrice.className = "text-center";
    row.className = "row";
    img.src = pizzaEl.image;
    img.style.width = "50px";
    img.style.height = "40px";

    tortilla.pizzas.push(pizzaEl);
    tortilla.totalPrice += pizzaEl.price;
    totalPrice.innerText = "Total:" + tortilla.totalPrice + "UAH";
    console.log(tortilla);

    row.appendChild(img);
    row.appendChild(pName);
    div.appendChild(row);
    div.appendChild(pPrice);

    basket.insertBefore(div, totalPrice);
  });
});
