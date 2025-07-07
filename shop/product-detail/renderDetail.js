// productDetail.js
import { products } from "../products/index.js";
import renderDetailHTML from "./renderDetailHtml.js";

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = products.find((p) => p.id === id);

  console.log("product-detail/renderDetail.js render", { params, id, product });

  if (!product) {
    document.getElementById("product-detail-container").textContent =
      "Sorry, product not found.";
    return;
  }

  renderDetailHTML(
    product,
    document.getElementById("product-detail-container")
  );
});
