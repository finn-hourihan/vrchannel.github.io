// shop.js
import { products } from "../products/index.js";
import { renderProductCardHTML } from "./renderProductCardHTML.js";

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products-container");
  products.forEach((prod) => {
    container.appendChild(renderProductCardHTML(prod));
  });
});
