import utilShop from "./util.js";
import { products } from "../products/index.js";

console.log("renderCart.js loaded");
// Call the renderCart function to render the buy button
window.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

/**
 * @function renderCart
 * @description renders an invisible buy button using the first product, in p[] and hides the element
 * @param {Array<ProductObject>} products - The array of product objects
 * @returns {HTMLElement} The rendered buy button element but hidden attached to document
 */
const renderCart = () => {
  const firstProduct = products[0];
  if (
    !firstProduct ||
    !firstProduct.buyButtonDiv ||
    !firstProduct.buyButtonPath
  ) {
    console.error("Invalid product data for buy button rendering.");
    return null;
  }
  console.log("renderCart", firstProduct);

  // get the body element
  const body = document.body;
  // create the buy button from util
  const buyButtonDiv = utilShop.newBuyButton(firstProduct);

  // Hide the buy button initially
  buyButtonDiv.style.display = "none"; // Hide the button initially
  body.appendChild(buyButtonDiv);
};
