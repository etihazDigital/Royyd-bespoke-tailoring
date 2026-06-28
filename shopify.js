console.log("SHOPIFY JS LOADED");

const SHOPIFY_STORE =
  "https://royyd-3.myshopify.com/api/2026-04/graphql.json";

const SHOPIFY_TOKEN =
  "36f2b6c740d7b7a4ca7494e08b176887";

async function getProducts() {

    try {

        const response =
            await fetch(
                "http://localhost:3000/api/products"
            );

        const data =
            await response.json();

        console.log(
            "BACKEND PRODUCTS:",
            data
        );

        return data.data.products.edges;

    }

    catch(error){

        console.error(error);

        return [];

    }

}
async function getBestSellerProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                {
                  collection(handle:"best-sellers") {

                    products(first:10) {

                      edges {

                        node {

                          id
                          title

                          featuredImage {
                            url
                          }

                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}

                        }

                      }

                    }

                  }

                }
                `
      })
    }
  );

  const data = await response.json();

  console.log("BEST SELLERS:", data);

  return data.data.collection.products.edges;
}


async function getNewArrivalProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                {
                  collection(handle:"new-arrivals") {

                    products(first:10) {

                      edges {

                        node {

                          id
                          title

                          featuredImage {
                            url
                          }

                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}

                        }

                      }

                    }

                  }

                }
                `
      })
    }
  );

  const data = await response.json();

  console.log("NEW ARRIVALS:", data);

  return data.data.collection.products.edges;
}


window.getProducts = getProducts;



async function getShirtProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                {
                  collection(handle:"shirts") {

                    products(first:20) {

                      edges {

                        node {

                          id
                          title

                          featuredImage {
                            url
                          }

                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}

                        }

                      }

                    }

                  }

                }
                `
      })
    }
  );

  const data = await response.json();

  console.log("SHIRTS:", data);

  return data.data.collection.products.edges;
}

async function getTrouserProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                {
                  collection(handle:"trousers") {

                    products(first:20) {

                      edges {

                        node {

                          id
                          title

                          featuredImage {
                            url
                          }

                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}

                        }

                      }

                    }

                  }

                }
                `
      })
    }
  );

  const data = await response.json();

  console.log("TROUSERS:", data);

  return data.data.collection.products.edges;
}

async function renderShirts() {

  const products = await getShirtProducts();

  const container =
    document.getElementById("shirtsContainer");

  if (!container) return;

  let html = "";

  products.forEach(product => {

    html += `
        <div class="product-card">

            <div class="product-image">

                <img src="${product.node.featuredImage?.url || ''}">

                <a href="product-customize.html
?id=${encodeURIComponent(product.node.id)}
&sizeType=full
&category=royyd-edit"
class="customize-btn">

                    View Product

                </a>

            </div>

            <div class="product-content">

                <h3>${product.node.title}</h3>

                <p class="price">

                    ₹ ${product.node.variants.edges[0].node.price.amount}

                </p>

            </div>

        </div>
        `;

  });

  container.innerHTML = html;
}


async function renderTrousers() {

  const products = await getTrouserProducts();

  const container =
    document.getElementById("trousersContainer");

  if (!container) return;

  let html = "";

  products.forEach(product => {

    html += `
        <div class="product-card">

            <div class="product-image">

                <img src="${product.node.featuredImage?.url || ''}">

                <a href="product-customize.html?id=${encodeURIComponent(product.node.id)}"
                   class="customize-btn">

                    View Product

                </a>

            </div>

            <div class="product-content">

                <h3>${product.node.title}</h3>

                <p class="price">
                    ₹ ${product.node.variants.edges[0].node.price.amount}
                </p>

            </div>

        </div>
        `;
  });

  container.innerHTML = html;
}



async function renderSuits() {

  const products = await getSuitProducts();

  const container =
    document.getElementById("suitsContainer");

  if (!container) return;

  let html = "";

  products.forEach(product => {

    html += `
        <div class="product-card">

            <div class="product-image">

                <img src="${product.node.featuredImage?.url || ''}">

                <a href="product-customize.html?id=${encodeURIComponent(product.node.id)}"
                   class="customize-btn">

                    View Product

                </a>

            </div>

            <div class="product-content">

                <h3>${product.node.title}</h3>

                <p class="price">
                    ₹ ${product.node.variants.edges[0].node.price.amount}
                </p>

            </div>

        </div>
        `;
  });

  container.innerHTML = html;
}



async function renderRoyydEdit() {

  const products = await getRoyydEditProducts();

  const container =
    document.getElementById("royydEditContainer");

  if (!container) return;

  let html = "";

  products.forEach(product => {

    html += `
        <div class="product-card">

            <div class="product-image">

                <img src="${product.node.featuredImage?.url || ''}">

                <a href="product-customize.html?id=${encodeURIComponent(product.node.id)}"
                   class="customize-btn">

                    View Product

                </a>

            </div>

            <div class="product-content">

                <h3>${product.node.title}</h3>

                <p class="price">
                    ₹ ${product.node.variants.edges[0].node.price.amount}
                </p>

            </div>

        </div>
        `;
  });

  container.innerHTML = html;
}

async function getTrouserProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN
      },
      body: JSON.stringify({
        query: `
                {
                  collection(handle:"trousers") {
                    products(first:20) {
                      edges {
                        node {
                          id
                          title
                          featuredImage {
                            url
                          }
                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}
                        }
                      }
                    }
                  }
                }
                `
      })
    }
  );

  const data = await response.json();

  return data.data.collection.products.edges;
}

async function getSuitProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN
      },
      body: JSON.stringify({
        query: `
                {
                  collection(handle:"suits") {
                    products(first:20) {
                      edges {
                        node {
                          id
                          title
                          featuredImage {
                            url
                          }
                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}
                        }
                      }
                    }
                  }
                }
                `
      })
    }
  );

  const data = await response.json();

  return data.data.collection.products.edges;
}

async function getRoyydEditProducts() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN
      },
      body: JSON.stringify({
        query: `
                {
                  collection(handle:"royyd-edit") {
                    products(first:20) {
                      edges {
                        node {
                          id
                          title
                          featuredImage {
                            url
                          }
                          variants(first:1) {
  edges {
    node {
      id

      price {
        amount
      }
    }
  }
}
                        }
                      }
                    }
                  }
                }
                `
      })
    }
  );

  const data = await response.json();

  return data.data.collection.products.edges;
}


async function renderHomepageProducts() {

  const products = await getBestSellerProducts();

  console.log("RENDER PRODUCTS:", products);

  const container =
    document.getElementById("shopifyProducts");

  if (!container) return;

  container.style.display = "flex";
  container.style.flexWrap = "nowrap";
  container.style.gap = "30px";
  container.style.overflowX = "auto";

  let html = "";

  products.forEach(product => {

    html += `
<div class="product-card home-product"
     onclick="openProduct('${product.node.id}')">

    <img src="${product.node.featuredImage?.url || ''}">

    <h3>${product.node.title}</h3>

    <span class="customize-link">
        Customize
    </span>

</div>
`;

  });

  container.innerHTML = html;


}
renderHomepageProducts();

function openProduct(productId) {

  window.location.href =
    `product-customize.html?id=${encodeURIComponent(productId)}`;

}

window.openProduct = openProduct;


async function loadSingleProduct() {

  const params =
    new URLSearchParams(window.location.search);

  const productId =
    params.get("id");

  if (!productId) return;

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                {
                  product(id:"${productId}") {

                    id
                    title
                    description
                    productType

                    featuredImage {
                      url
                    }

                    images(first:10) {
  edges {
    node {
      url
    }
  }
}

                    variants(first:1) {
  edges {
    node {
      id
      price {
        amount
      }
    }
  }
}

                  }
                }
                `
      })
    }
  );

  const data =
    await response.json();

  console.log("SINGLE PRODUCT:", data);

  const product =
    data.data.product;


  localStorage.setItem(
    "shopifyVariantId",
    product.variants.edges[0].node.id
  );

  localStorage.setItem(
    "productTitle",
    product.title
  );

  localStorage.setItem(
    "productPrice",
    product.variants.edges[0].node.price.amount
  );

  localStorage.setItem(
    "productImage",
    product.featuredImage?.url || ""
  );

  console.log("PRODUCT LOADED:", product.title);
  console.log("SIZE BEFORE SAVE:",
    localStorage.getItem("productSizeType")
  );

  console.log("SHOPIFY PRODUCT TYPE:", product.productType);

  console.log("RAW PRODUCT TYPE =", product.productType);
  console.log("RAW TITLE =", product.title);
  console.log("SHOPIFY PRODUCT TYPE VALUE =", product.productType);
  console.log("PRODUCT TITLE =", product.title);



  const productTitle = product.title.toLowerCase();

  let sizeType = "full";

  if (productTitle.includes("trouser")) {
    sizeType = "trouser";
  }

  else if (
    productTitle.includes("suit") ||
    productTitle.includes("blazer")
  ) {
    sizeType = "full";
  }

  else if (
    productTitle.includes("shirt")
  ) {
    sizeType = "shirt";
  }

  console.log("TITLE:", productTitle);
  console.log("FINAL SIZE TYPE:", sizeType);

  localStorage.setItem(
    "productSizeType",
    sizeType
  );

  const drawer =
    document.getElementById("customizerDrawer");

  if (drawer) {

    drawer.classList.remove("active");

    requestAnimationFrame(() => {

      document.dispatchEvent(
        new CustomEvent("sizeTypeLoaded")
      );

    });

  }


  console.log(
    "SIZE AFTER SAVE:",
    localStorage.getItem("productSizeType")
  );


  console.log(
    "FINAL SIZE TYPE:",
    sizeType
  );

  document.dispatchEvent(
    new CustomEvent("sizeTypeLoaded")
  );

  setTimeout(() => {
    document.dispatchEvent(
      new CustomEvent("sizeTypeLoaded")
    );
  }, 100);


  console.log(
    "SIZE TYPE SAVED:",
    localStorage.getItem("productSizeType")
  );




  const images =
    product.images.edges;

  console.log(images);

  if (!product) return;

  const titleElement =
    document.getElementById("productTitle");

  const price =
    document.getElementById("productPrice");

  const image =
    document.getElementById("mainProductImage");

  if (titleElement)
    titleElement.innerText = product.title;

  if (price)
    price.innerText =
      "₹ " +
      product.variants.edges[0].node.price.amount;

  if (image)
    image.src =
      product.featuredImage?.url || "";

  const thumb1 =
    document.getElementById("thumb1");

  const thumb2 =
    document.getElementById("thumb2");

  const thumb3 =
    document.getElementById("thumb3");


  if (thumb1 && images[1]) {

    thumb1.src =
      images[1].node.url;

    thumb1.setAttribute(
      "data-image",
      images[1].node.url
    );

  }

  if (thumb2 && images[2]) {

    thumb2.src =
      images[2].node.url;

    thumb2.setAttribute(
      "data-image",
      images[2].node.url
    );

  }

  if (thumb3 && images[3]) {

    thumb3.src =
      images[3].node.url;

    thumb3.setAttribute(
      "data-image",
      images[3].node.url
    );

  }
}


console.log("LOAD SINGLE PRODUCT STARTED");

loadSingleProduct().then(() => {

  renderCompleteLook();

  renderYouMayAlsoLike();

});

async function renderNewArrivals() {

  const products = await getNewArrivalProducts();

  const container =
    document.getElementById("newArrivalSlider");

  if (!container) return;

  container.style.display = "flex";
  container.style.flexWrap = "nowrap";
  container.style.gap = "30px";
  container.style.overflowX = "auto";

  let html = "";

  products.forEach(product => {

    html += `
        <div class="product-card home-product"
             onclick="openProduct('${product.node.id}')">

            <img src="${product.node.featuredImage?.url || ''}">

            <h3>${product.node.title}</h3>

            <span class="customize-link">
                Customize
            </span>

        </div>
        `;

  });

  container.innerHTML = html;

}

renderNewArrivals();

renderShirts();
renderTrousers();
renderSuits();
renderRoyydEdit();
window.getShirtProducts = getShirtProducts;
window.getTrouserProducts = getTrouserProducts;
window.getSuitProducts = getSuitProducts;
window.getProducts = getProducts;

async function renderYouMayAlsoLike() {

  const container =
    document.getElementById("youMayLikeSlider");

  if (!container) return;

  const products =
    await getProducts();

  const params =
    new URLSearchParams(window.location.search);

  const currentProductId =
    params.get("id");

  const filteredProducts =
    products.filter(product =>
      product.node.id !== currentProductId
    );

  const shuffled =
    filteredProducts.sort(() => 0.5 - Math.random());

  const selected =
    shuffled.slice(0, 8);

  let html = "";

  selected.forEach(product => {

    html += `

      <div class="look-card"

           onclick="openProduct('${product.node.id}')">

          <img src="${product.node.featuredImage?.url || ''}">

          <h4>${product.node.title}</h4>

          <p>
            ₹ ${product.node.variants.edges[0].node.price.amount}
          </p>

      </div>

    `;

  });

  container.innerHTML = html;

}



async function renderCompleteLook() {

  const container =
    document.getElementById("completeLookSlider");

  if (!container) return;

  const currentType =
    localStorage.getItem("productSizeType");

  let products = [];

  if (currentType === "shirt") {

    const suits =
      await getSuitProducts();

    const trousers =
      await getTrouserProducts();

    products = [
      ...suits,
      ...trousers
    ];

  }

  else if (currentType === "trouser") {

    const shirts =
      await getShirtProducts();

    const suits =
      await getSuitProducts();

    products = [
      ...shirts,
      ...suits
    ];

  }

  else {

    const shirts =
      await getShirtProducts();

    const trousers =
      await getTrouserProducts();

    products = [
      ...shirts,
      ...trousers
    ];

  }

  let html = "";

  products.slice(0, 8).forEach(product => {

    html += `

      <div class="look-card"
           onclick="openProduct('${product.node.id}')">

        <img
          src="${product.node.featuredImage?.url || ''}"
        >

        <h4>${product.node.title}</h4>

        <p>
          ₹ ${product.node.variants.edges[0].node.price.amount}
        </p>

      </div>

    `;

  });

  container.innerHTML = html;

}

async function createShopifyCart() {

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                mutation {

                  cartCreate {

                    cart {
                      id
                      checkoutUrl
                    }

                  }

                }
                `
      })
    }
  );

  const data =
    await response.json();

  console.log(
    "SHOPIFY CART CREATED:",
    data
  );

  const cartId =
    data.data.cartCreate.cart.id;

  const checkoutUrl =
    data.data.cartCreate.cart.checkoutUrl;

  localStorage.setItem(
    "shopifyCartId",
    cartId
  );

  localStorage.setItem(
    "shopifyCheckoutUrl",
    checkoutUrl
  );

  return cartId;
}

window.createShopifyCart =
  createShopifyCart;


async function addToShopifyCart(variantId) {

  let cartId =
    localStorage.getItem(
      "shopifyCartId"
    );

  if (!cartId) {

    cartId =
      await createShopifyCart();

  }

  const response =
    await fetch(
      SHOPIFY_STORE,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          "X-Shopify-Storefront-Access-Token":
            SHOPIFY_TOKEN
        },

        body: JSON.stringify({

          query: `
                    mutation cartLinesAdd(
                        $cartId: ID!,
                        $lines: [CartLineInput!]!
                    ) {

                      cartLinesAdd(
                        cartId: $cartId,
                        lines: $lines
                      ) {

                        cart {

                          id

                          lines(first: 10) {

                            edges {

                              node {

    id

    quantity

    merchandise {

        ... on ProductVariant {

            id

            title

            product {

                title

            }

        }

    }

}

                            }

                          }

                        }

                      }

                    }
                    `,

          variables: {

            cartId: cartId,

            lines: [
              {
                merchandiseId: variantId,

                quantity: 1,

                attributes: [

                  {
                    key: "Product Type",
                    value: localStorage.getItem("productSizeType") || ""
                  },

                  {
                    key: "Selected Size",
                    value: localStorage.getItem("selectedSize") || ""
                  },

                  {
                    key: "Collar",
                    value: localStorage.getItem("collarResult") || ""
                  },

                  {
                    key: "Cuff",
                    value: localStorage.getItem("cuffResult") || ""
                  },

                  {
                    key: "Sleeve",
                    value: localStorage.getItem("sleeveResult") || ""
                  },

                  {
                    key: "Pocket",
                    value: localStorage.getItem("pocketResult") || ""
                  },

                  {
                    key: "Buttons",
                    value: localStorage.getItem("buttonResult") || ""
                  },

                  {
                    key: "Pleat",
                    value: localStorage.getItem("pleatResult") || ""
                  },

                  {
                    key: "Waist Style",
                    value: localStorage.getItem("waistResult") || ""
                  },

                  {
                    key: "Bottom",
                    value: localStorage.getItem("bottomResult") || ""
                  },

                  {
                    key: "Lapel",
                    value: localStorage.getItem("lapelResult") || ""
                  },

                  {
                    key: "Configuration",
                    value: localStorage.getItem("configurationResult") || ""
                  },

                  {
                    key: "Vent",
                    value: localStorage.getItem("ventResult") || ""
                  }

                ]
              }
            ]
          }
        })
      }
    );

  const data =
    await response.json();

  console.log(
    "FULL SHOPIFY RESPONSE",
    JSON.stringify(
      data,
      null,
      2
    )
  );

  console.log(
    "SHOPIFY LINES AFTER ADD:",
    JSON.stringify(
      data.data.cartLinesAdd.cart.lines.edges,
      null,
      2
    )
  );

  console.log(
    "SHOPIFY ADD RESULT:",
    data
  );

  console.log(
    "ALL CART LINES:",
    data.data.cartLinesAdd.cart.lines.edges
  );

 const cart =
    data.data.cartLinesAdd.cart;

const addedLine =
    cart.lines.edges.find(edge => {

        return (
            edge.node.merchandise.id === variantId &&
            edge.node.quantity === 1
        );

    });

if (!addedLine) {

    throw new Error("Unable to locate Shopify cart line.");

}

return addedLine.node.id;

  console.log(
    "ADDED LINE ID:",
    addedLineId
  );

  return addedLineId;

  console.log(
    "SAVED LINE IDS:",
    lineIds
  );

  return data;
}

window.addToShopifyCart =
  addToShopifyCart;

async function removeFromShopifyCart(lineId) {

  const cartId =
    localStorage.getItem("shopifyCartId");

  if (!cartId || !lineId) {
    console.log("Missing cartId or lineId");
    return;
  }

  console.log(
    "SHOPIFY WILL REMOVE:",
    lineId
  );

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                mutation cartLinesRemove(
                    $cartId: ID!,
                    $lineIds: [ID!]!
                ) {

                  cartLinesRemove(
                    cartId: $cartId,
                    lineIds: $lineIds
                  ) {

                    cart {
                      id

                      lines(first: 20) {
                        edges {
                          node {
                            id
                          }
                        }
                      }
                    }

                  }

                }
                `,

        variables: {
          cartId: cartId,
          lineIds: [lineId]
        }

      })

    }
  );

  const data =
    await response.json();

  //alert("SHOPIFY REMOVE FINISHED");

  console.log(
    "SHOPIFY REMOVE RESULT:",
    data
  );

  console.log(
    "SHOPIFY REMAINING LINES:",
    data.data.cartLinesRemove.cart.lines.edges
  );

  return data;
}

window.removeFromShopifyCart =
  removeFromShopifyCart;

async function updateShopifyCartQuantity(lineId, quantity) {

  const cartId =
    localStorage.getItem("shopifyCartId");

  if (!cartId || !lineId) {
    console.log("Missing cartId or lineId");
    return;
  }

  const response = await fetch(
    SHOPIFY_STORE,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          SHOPIFY_TOKEN
      },

      body: JSON.stringify({

        query: `
                mutation cartLinesUpdate(
                    $cartId: ID!,
                    $lines: [CartLineUpdateInput!]!
                ) {

                    cartLinesUpdate(
                        cartId: $cartId,
                        lines: $lines
                    ) {

                        cart {

                            id

                            lines(first:20) {

                                edges {

                                    node {

                                        id
                                        quantity

                                    }

                                }

                            }

                        }

                    }

                }
                `,

        variables: {

          cartId: cartId,

          lines: [
            {
              id: lineId,
              quantity: quantity
            }
          ]

        }

      })

    }
  );

  const data =
    await response.json();

  console.log(
    "SHOPIFY QUANTITY UPDATED:",
    data
  );

  return data;

}

window.updateShopifyCartQuantity =
  updateShopifyCartQuantity;