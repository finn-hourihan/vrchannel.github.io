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

const buyButtonPath = "/shop/products/vr-pullover/buy-button.js"; // replace with product dir name for actual path to buy button script
const shopifyID = "7961166807097"; // ID for the product in Shopify

/**
 * @exports @const {ProductObject} vrPullover
 */
const vrPullover = {
  id: "vr-pullover", // unique identifier for the product
  name: "Pullover", // display text title of the product
  price: [
    "5.99", //price
  ],
  description: [
    "it is cool, asnd red", "design is placeholder", // description bullet 1
  ],
  images: [
    "/shop/products/vr-pullover/pullover no.png", // main picture on card
  ],
  buyButtonPath: buyButtonPath, // replace with actual path to buy button script
  buyButtonDiv: `<div id='product-component-${shopifyID}'></div>`,
};

export default vrPullover;
