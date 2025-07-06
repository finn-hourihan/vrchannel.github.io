// components/productDetail.js
export function renderProductDetail(product, container) {
  // Title
  const h1 = document.createElement("h1");
  h1.textContent = product.name;
  container.appendChild(h1);

  // Images
  const imagesDiv = document.createElement("div");
  imagesDiv.className = "product-detail__images";
  product.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = product.name;
    imagesDiv.appendChild(img);
  });
  container.appendChild(imagesDiv);

  // Description bullets
  const ul = document.createElement("ul");
  ul.className = "product-detail__description";
  product.description.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
  container.appendChild(ul);

  // Shopify Buy Button
  const buyDiv = document.createElement("div");
  buyDiv.innerHTML = product.buyButtonHtml;
  container.appendChild(buyDiv);

  // …if Shopify requires an external <script> to render buttons,
  // you can inject it here once per page:
  // const script = document.createElement('script');
  // script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  // document.body.appendChild(script);
}
