/**
 * @function renderCart
 * @description renders an invisible buy button using the first product, in p[] and hides the element
 * @param {Array<ProductObject>} products - The array of product objects
 * @returns {HTMLElement} The rendered buy button element but hidden attached to document
 */
const renderCart = (products) => {
  const firstProduct = products[0];
  const buyButtonDiv = document.createElement("div");
  buyButtonDiv.innerHTML = firstProduct.buyButtonDiv;
  buyButtonDiv.style.display = "none"; // Hide the button initially
  document.body.appendChild(buyButtonDiv);
  return buyButtonDiv;
};
