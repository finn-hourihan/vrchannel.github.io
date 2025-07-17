/** @const buyButtonPath */
const buyButtonPath = `/shop/products/vr-tee-1/buy-button.js`;

const shopifyID = "1751834784986"; // This is the ID for the product in Shopify

/**
 * @exports @const {ProductObject} vrTee
 */
const vrTee = {
  id: "vr-tee-1",
  name: "VR-T0",
   price: [
    "$0.17", //price
  ],
  description: [
    "thick asl",
    "Water-resistant up to 30 m",
    "Lasts 48 h on a single charge",
  ],
  images: [
    `/shop/products/vr-tee-1/tee maybe.png`,
    `/shop/products/vr-tee-1/tee maybe1.png`, // main picture on card
    // '',
  ],

  // buy button
  buyButtonPath: buyButtonPath,
  buyButtonDiv: `<div id='product-component-${shopifyID}'></div>`,

  /* 
  buyButtonHtml: `
    <div id='product-component-1751834784986'></div>
    <script src=${buyButtonPath}> </script>
  `,
 */
};

export default vrTee;
