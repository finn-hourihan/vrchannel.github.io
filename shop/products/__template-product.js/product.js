/**
 * @typedef {Object} ProductObject
 * @property {string} id Unique identifier for the product
 * @property {string} name Display Text of the product
 * @property {string[]} description Array of strings for product description bullets
 * @property {string[]} images Array of image paths for the product @note first image is card image
 *  @note image paths must have a leading slash so they are not relative to the location of use
 *
 * @property {string} buyButtonPath Path to the script generated from Shopify
 * @property {string} buyButtonDiv string literal for the buy div as generated from Shopify
 */

const buyButtonPath = "/shop/products/THIS_PRODUCT/buy-button.js"; // replace with product dir name for actual path to buy button script
const shopifyID = "ADD_SHOPIFY_ID"; // ID for the product in Shopify

/**
 * @exports @const {ProductObject} product
 */
const PRODUCT_NAME = {
  id: "SOME_UNIQUE_ID", // unique identifier for the product
  name: "", // display text title of the product
  description: [
    "ADD_DESCRIPTION", // description bullet 1
  ],
  images: [
    "/shop/products/THIS_PRODUCT/IMAGE_NAME", // main picture on card
  ],
  buyButtonPath: buyButtonPath, // replace with actual path to buy button script
  buyButtonDiv: `<div id='product-component-${shopifyID}'></div>`,
};

export default PRODUCT_NAME;
