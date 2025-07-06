/**
 * @exports @const {ProductObject} vrTee
 */
const vrTee = {
  id: "vr-tee-1",
  name: "VR Tee",
  images: [
    `shop\products\product-1\tee maybe.png`, // main picture on card
    // '',
  ],

  buyButtonPath: "shop/products/vr-tee-1/buy-button.js",
  buyButtonHtml: `
    <div id='product-component-1751834784986'></div>
    <script 
    src=${vrTee.buyButtonPath} type="text/javascript"> 
    </script>
  `,

  description: [
    "Precision-machined steel gears",
    "Water-resistant up to 30 m",
    "Lasts 48 h on a single charge",
  ],
};

export default vrTee;
