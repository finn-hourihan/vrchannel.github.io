/**
 * @module utilShop
 * @description Utility functions for the shop module
 */
const utilShop = {
  /**
   * @function newBuyButton
   * @description Renders the buy button for a product
   * @param {Object} product product object containing buy button details
   * @returns {HTMLElement} The rendered buy button element
   */
  newBuyButton: (product) => {
    console.log("newBuyButton", product);
    if (!product || !product?.buyButtonDiv || !product?.buyButtonPath) {
      console.error("Invalid product data for buy button rendering.");
      return null;
    }

    // Create a container for the buy button
    const buyContainer = document.createElement("div");
    buyContainer.id = `buy-button-container-${product.id}`; // Optional: set an ID for styling or targeting
    buyContainer.innerHTML = product?.buyButtonDiv;

    // Create a script tag to load the buy button
    const script = document.createElement("script");
    script.src = product?.buyButtonPath;
    script.async = false; // preserve execution order if you need it
    buyContainer.appendChild(script);

    return buyContainer;
  },

  injectShopifyMetaContentPolicy: () => {
    console.log("utilShop.injectShopifyMetaContentPolicy()");

    const meta = document.createElement("meta");
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = `
         default-src 'self';
        script-src  'self'
                    https://sdks.shopifycdn.com
                    https://ajax.googleapis.com
                    'unsafe-inline';
        connect-src 'self'
                    https://3xtmwz-s9.myshopify.com
                    https://monorail-edge.shopifysvc.com;
        style-src   'self'
                    'unsafe-inline'
                    http://fonts.googleapis.com
                    https://fonts.googleapis.com;
        font-src    'self'
                    http://fonts.gstatic.com
                    https://fonts.gstatic.com;
        img-src     'self' data:;
      `;
    document.head.appendChild(meta);
  },
};

export default utilShop;
