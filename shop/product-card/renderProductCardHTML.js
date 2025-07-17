// fill in HTML
function renderCard(product) {
  return `
      
      <div class="product-card__content">
        <h2 class="product-card__title">${product.name}</h2>
        <img 
          class="product-card__image"
          src="${product.images[0]}"
          alt="${product.name}"
        >
        <h3 class="product-card__price">${product.price}</h3>
      </div>
    `;
}

/**
 * @function renderProductCardHTML()
 * @description Creates a product card element for a given product
 * @param {Object} product
 * @returns {HTMLElement} The created product card element
 */
export function renderProductCardHTML(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = renderCard(product);

  // // fill in HTML
  // card.innerHTML = `
  //   <img class="product-card__image" src="${product.images[0]}" alt="${product.name}">
  //   <h2 class="product-card__title">${product.name}</h2>
  // `;

  // when clicked, go to product.html?id=<product.id>
  card.addEventListener("click", () => {
    window.location.href = `/shop/item/?id=${encodeURIComponent(product.id)}`;
  });

  return card;
}
