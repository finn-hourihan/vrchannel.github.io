/**
 * @typedef {Object} ProductObject
 * @property {string} id Unique identifier for the product
 * @property {string} name Display Text of the product
 * @property {string[]} images Array of image paths for the product @note first image is card image
 * @property {string} buyButtonHtml HTML snippet for the Shopify Buy Button
 * @property {string[]} description Array of strings for product description bullets
 */

/**
 * @exports @const {ProductObject} product
 */
export default {
  id: "vr-product-1",
  name: "", // title of the product
  images: [
    // paths relative to your site root (or use absolute `/shop/...`)
    /**
     * @description first image in the images array is the card image
     */
    "shop/products/widget-001/widget-001-1.jpg",
    "shop/products/widget-001/widget-001-2.jpg",
  ],
  buyButtonHtml: `
    <div id="widget-001-buy-button">
      <!-- your Shopify “Buy Button” snippet here -->
    </div>
  `,
  description: [
    "⚙️ Precision-machined steel gears",
    "💧 Water-resistant up to 30 m",
    "🔋 Lasts 48 h on a single charge",
  ],
};
