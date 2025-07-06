(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "3xtmwz-s9.myshopify.com",
      storefrontAccessToken: "a6cc5e11fe8e782b218dd9a368f619bf",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "7959174905913",
        node: document.getElementById("product-component-1751834368190"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Droid Sans, sans-serif",
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                color: "#000000",
                ":hover": {
                  color: "#000000",
                  "background-color": "#d30418",
                },
                "background-color": "#ea041b",
                ":focus": {
                  "background-color": "#d30418",
                },
              },
              quantityInput: {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add to cart",
            },
            googleFonts: ["Droid Sans"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Droid Sans, sans-serif",
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                color: "#000000",
                ":hover": {
                  color: "#000000",
                  "background-color": "#d30418",
                },
                "background-color": "#ea041b",
                ":focus": {
                  "background-color": "#d30418",
                },
              },
              quantityInput: {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
              },
            },
            googleFonts: ["Droid Sans"],
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Droid Sans, sans-serif",
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                color: "#000000",
                ":hover": {
                  color: "#000000",
                  "background-color": "#d30418",
                },
                "background-color": "#ea041b",
                ":focus": {
                  "background-color": "#d30418",
                },
              },
              title: {
                color: "#ea041b",
              },
              header: {
                color: "#ea041b",
              },
              lineItems: {
                color: "#ea041b",
              },
              subtotalText: {
                color: "#ea041b",
              },
              subtotal: {
                color: "#ea041b",
              },
              notice: {
                color: "#ea041b",
              },
              currency: {
                color: "#ea041b",
              },
              close: {
                color: "#ea041b",
                ":hover": {
                  color: "#ea041b",
                },
              },
              empty: {
                color: "#ea041b",
              },
              noteDescription: {
                color: "#ea041b",
              },
              discountText: {
                color: "#ea041b",
              },
              discountIcon: {
                fill: "#ea041b",
              },
              discountAmount: {
                color: "#ea041b",
              },
              cart: {
                "background-color": "#000000",
              },
              footer: {
                "background-color": "#000000",
              },
            },
            text: {
              title: "cart",
              total: "subtotal",
              empty: "empty.",
              button: "checkout",
            },
            contents: {
              note: true,
            },
            popup: false,
            googleFonts: ["Droid Sans"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Droid Sans, sans-serif",
                "background-color": "#ea041b",
                ":hover": {
                  "background-color": "#d30418",
                },
                ":focus": {
                  "background-color": "#d30418",
                },
              },
              count: {
                "font-size": "16px",
                color: "#000000",
                ":hover": {
                  color: "#000000",
                },
              },
              iconPath: {
                fill: "#000000",
              },
            },
            googleFonts: ["Droid Sans"],
          },
          lineItem: {
            styles: {
              variantTitle: {
                color: "#ea041b",
              },
              title: {
                color: "#ea041b",
              },
              price: {
                color: "#ea041b",
              },
              fullPrice: {
                color: "#ea041b",
              },
              discount: {
                color: "#ea041b",
              },
              discountIcon: {
                fill: "#ea041b",
              },
              quantity: {
                color: "#ea041b",
              },
              quantityIncrement: {
                color: "#ea041b",
                "border-color": "#ea041b",
              },
              quantityDecrement: {
                color: "#ea041b",
                "border-color": "#ea041b",
              },
              quantityInput: {
                color: "#ea041b",
                "border-color": "#ea041b",
              },
            },
          },
        },
      });
    });
  }
})();
