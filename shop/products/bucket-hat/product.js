/**
 * @exports @const {ProductObject} product
 * @typedef {Object} ProductObject
 */
const bucketHatProduct = {
  id: "bucket-hat",
  name: "VR Bucket Hat",
  images: [
    // paths relative to your site root (or use absolute `/shop/...`)
    /**
     * @description first image in the images array is the card image
     */
    "shop/products/bucket-hat/bucket-hat-1.png", // main picture on card
  ],
  buyButtonPath: "shop/products/bucket-hat/buy-button.js",
  buyButtonHtml: `
    <div id='product-component-1751834368190'></div>
    <script src=${buyButtonPath} > </script>    
  `,
  description: ["~ swag", "~ style", "~ comfort"],
};

export default bucketHatProduct;
