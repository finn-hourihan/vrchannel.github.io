/** @const {String} buyButtonPath path to the script generated from shopify */
const buyButtonPath = "/shop/products/bucket-hat/buy-button.js";

/** @const {String} shopifyID id generated from shopify for the product */
const shopifyID = "1751834368190"; // This is the ID for the product in Shopify

/**
 * @exports @const {ProductObject} product
 * @typedef {Object} ProductObject
 */
const bucketHatProduct = {
  id: "bucket-hat",
  name: "Bucket Hat",
  images: [
    // paths relative to your site root (or use absolute `/shop/...`)
    /**
     * @description first image in the images array is the card image
     */
    "/shop/products/bucket-hat/bucket-hat-1.png", // main picture on card
  ],

  buyButtonPath: buyButtonPath,
  buyButtonDiv: `<div id='product-component-${shopifyID}'></div>`,

  /* 
  buyButtonHtml: `
    <div id='product-component-1751834368190'></div>
    <script src=${buyButtonPath} > </script>    
  `, */
  price: [
    "$9,999.99", //price
  ],
  description: ["~ swag", "~ style", "~ comfort", "~ bucket hat"],
};

export default bucketHatProduct;
