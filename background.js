chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
  if (frameId !== 0) return;
  console.log(tabId, frameId);
  chrome.scripting.executeScript({
    target: { tabId },
    function: newPageLoad,
  });
});

const newPageLoad = async () => {
  let darazInnerHTML = `<div>
                          <h1 style="font-size: 2rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <div style="">
                            <h3>Loading... </h3>
                          </div>
                        </div>`;
  let ryansInnerHTML = `<div >
                        <h1 style="font-size: 1.5rem; margin: 0; padding: 10px 0;">
                          Similar Products
                        </h1>
                        <div style="font-size: 1rem">
                          <p>Loading... </p>
                        </div>
                      </div>`;

  let startechInnerHTML = `<div>
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 5px 0;">
                            Similar Products
                          </h1>
                            <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                        </div>`;

  let othobaInnerHTML = `<div>
                        <h1 style="font-size: 1.5rem; color: #ffffff; margin: 0; padding: 10px 0;">
                          Similar Products
                        </h1>
                          <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                      </div>`;

  let priyoShopInnerHTML = `<div>
                            <h1 style="font-size: 1.4rem; color: #ffffff; margin: 0; padding: 10px 0;">
                              Similar Products
                            </h1>
                              <p style="font-size: 0.9rem; color: #ffffff;">Loading... </p>
                          </div>`;

  let pickabooInnerHTML = `<div>
                          <h1 style="font-size: 2rem; color: #ffffff; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                            <p style="font-size: 1.5rem; color: #ffffff;">Loading... </p>
                        </div>`;

  let chaldalInnerHTML = `<div>
                              <h1 style="font-size: 1.5rem; color: #ffffff; margin: 0; padding: 10px 0;">
                                Similar Products
                              </h1>
                                <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                          </div>`;

  if (location.href.includes("/products")) {
    document.querySelector("#root").style.width = "1500px";
    document.querySelector(".pdp-block__product-detail").style.width =
      "calc(100% - 665px)";
    const createDev = document.createElement("div");
    createDev.setAttribute("class", "compare-product-info");
    createDev.setAttribute(
      "style",
      "display: inline-block; width: 315px; background-color: #26ACD5; color: #ffffff; padding: 0 10px; height: 61vh;"
    );
    createDev.innerHTML = darazInnerHTML;
    document.querySelector("#block-3FfF28kZyT").appendChild(createDev);

    const productName = document.querySelector(
      ".pdp-mod-product-badge-title"
    ).innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;">
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.5rem; font-size: 1.2rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-bottom: 0.7rem; padding-top: 1rem; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      darazInnerHTML = `<div>
                          <h1 style="font-size: 2rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1.2rem; padding-bottom: 0.8rem">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${limit * pagination} of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; margin-bottom: 0.7rem; padding-top: 0.5rem">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; margin-right: 0.8rem; font-size: 1.2rem;  background-color:  #ffffff; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; font-size: 1.2rem; border-radius: 0.3rem; border: 1px solid transparent;
                                  background-color: #ffffff; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createDev.innerHTML = darazInnerHTML;
    async function fetchNextProducts() {
      pagination++;
      const response = await fetch(
        encodeURI(
          `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
        )
      );
      const { success, posts, total } = await response.json();
      if (success) {
        let totalProductCount = 0;
        let similarProducts = "";
        posts.forEach((post) => {
          similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                                 <div style="display: flex; padding: 5px; ">
                                    <img src="${
                                      post.image
                                    }" style="width: 70px; object-fit: cover;">
                                  <div style="margin-left: 0.8rem;"> 
                                    <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                     href="${
                                       post.link
                                     }" target="_blank" style="line-height: 1.5rem; font-size: 1.2rem; color: #ffffff; cursor: pointer;  ">${
            post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
          }</a>
                                    <p style="padding-bottom: 0.7rem; padding-top: 1rem; text-transform: capitalize;
                                    ">${post.price} TK  &nbsp;&nbsp;${
            post.shop
          }</p>
                                    </div>
                                  </div>
                              </div>`;
        });
        console.log(similarProducts);
        darazInnerHTML = `<div>
                            <h1 style="font-size: 2rem; margin: 0; padding: 10px 0;">
                              Similar Products
                            </h1>
                            <p style="font-size: 1.2rem; padding-bottom: 0.8rem">Showing ${
                              limit * (pagination - 1) + 1
                            } - ${
          limit * pagination > totalProductCount
            ? totalProductCount
            : limit * pagination
        } of total
                            ${total} Products</p>
                            <div style="height: 48.5vh; overflow: auto;" >
                              ${similarProducts}
                            </div>
                          </div>`;
      }
    }

    async function fetchPreviousProducts() {
      pagination--;
      const response = await fetch(
        encodeURI(
          `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
        )
      );
      const { success, posts, total } = await response.json();
    }
  } else if (location.href.includes("ryanscomputers.com/")) {
    document.querySelector(
      ".tab-product-info-wrapper > .container"
    ).style.width = "1400px";
    document.querySelector(".tab-product-info-wrapper .col-md-6").style.width =
      "39%";
    document.querySelector(
      ".tab-product-info-wrapper .col-md-6:nth-child(2)"
    ).style.width = "38%";

    const createDevRyans = document.createElement("div");
    createDevRyans.className = "compare-product-info";
    createDevRyans.setAttribute(
      "style",
      "display: inline-block; width: 315px; background-color: #26ACD5; color: #ffffff; padding: 0 10px; height: 62.5vh;"
    );

    createDevRyans.innerHTML = ryansInnerHTML;
    document.querySelector(".row").appendChild(createDevRyans);
    document
      .querySelector(".tab-product-info-wrapper > .container")
      .firstElementChild.appendChild(createDevRyans);
    document.body.style.backgroundColor = "#26ACD5";
    const productName = document.querySelector(".title").innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let totalProductCount = 0;
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.3rem; font-size: 0.9rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-bottom: 0.6rem; padding-top: 0.8rem; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      ryansInnerHTML = `<div>
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1rem; padding-bottom: 0.7rem">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${
        limit * pagination > totalProductCount
          ? totalProductCount
          : limit * pagination
      } of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; margin-bottom: 0.7rem;">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; margin-right: 0.8rem;  background-color:  #ffffff; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; border: 1px solid transparent;  
                                  background-color: #ffffff; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createDevRyans.innerHTML = ryansInnerHTML;
  } else if (location.href.includes("startech.com.bd/")) {
    document.querySelector(
      ".product-details-summary > .container"
    ).style.width = "1500px";
    document.querySelector(".basic").style.flexWrap = "unset";
    document
      .querySelector(".product-details-summary .col-md-5")
      .setAttribute("style", "width: 27%; flex: unset;");
    document
      .querySelector(".product-details-summary .col-md-7")
      .setAttribute("style", "width: 47%; flex: unset;");
    const createDevStartech = document.createElement("div");
    createDevStartech.className = "compare-product-info";
    createDevStartech.innerHTML = startechInnerHTML;
    createDevStartech.setAttribute(
      "style",
      "display: inline-block; width: 340px; background-color: #26ACD5; padding: 0 10px; color: white; height: 62vh;"
    );
    document
      .querySelector(".product-details-summary > .container")
      .lastElementChild.appendChild(createDevStartech);
    const productName = document.querySelector(".product-name").innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.3rem; font-size: 0.9rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-top: 0.5rem; font-size: 0.8rem; color: #ffffff; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      startechInnerHTML = `<div>
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 6px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1rem; padding-bottom: 0; color: #ffffff;">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${limit * pagination} of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; padding: 0.6rem 0">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; margin-right: 0.8rem; background-color:  #ffffff; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; border: 1px solid transparent;  
                                  background-color: #ffffff; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createDevStartech.innerHTML = startechInnerHTML;
  } else if (location.href.includes("pickaboo.com/")) {
    document.querySelector(".main-wrapper").style.maxWidth = "1445px";
    document.querySelector(".column").style.width = "55%";
    document.querySelector(".sidebar-additional").style.float = "left";
    const createDevPickaboo = document.createElement("div");
    createDevPickaboo.className = "compare-product-info";
    createDevPickaboo.setAttribute(
      "style",
      "display: inline-block; width: 340px; background-color: #26ACD5; padding: 0 10px; color: white; height: 62vh;"
    );
    createDevPickaboo.innerHTML = pickabooInnerHTML;
    document.querySelector(".columns ").appendChild(createDevPickaboo);

    const productName = document.querySelector(".base").innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;">
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.5rem; font-size: 1.5rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-bottom: 0.7rem; padding-top: 1rem; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      pickabooInnerHTML = `<div>
                          <h1 style="font-size: 2.5rem; color: #ffffff; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1.5rem; padding-bottom: 0">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${limit * pagination} of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; padding: 0.5rem 0;">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; font-size: 1.2rem; border-radius: 0.3rem; margin-right: 0.8rem;  background-color:  #ffffff; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; font-size: 1.2rem; border-radius: 0.3rem; border: 1px solid transparent;
                                  background-color: #ffffff; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createDevPickaboo.innerHTML = pickabooInnerHTML;
  } else if (location.href.includes("othoba.com/")) {
    document.querySelector(".product-essential  .row").style.display = "flex";
    document.querySelector(".product-essential  .col-md-four").style.width =
      "23%";
    document.querySelector(".product-essential  .col-sm-six").style.width =
      "31%";
    document.querySelector(".product-essential  .divDeliveryInfo").style.width =
      "38%";
    document.querySelector(".product-essential  .col-md-eight").style.width =
      "unset";

    const createDevOthoba = document.createElement("div");
    createDevOthoba.className = "compare-product-info";
    createDevOthoba.setAttribute(
      "style",
      "display: inline-block; width: 335px; background-color: #26ACD5; padding: 0 10px; color: white; height: 61.5vh;"
    );
    createDevOthoba.innerHTML = othobaInnerHTML;

    document
      .querySelector(".product-essential  .col-md-eight > .row ")
      .appendChild(createDevOthoba);
    const productName = document.querySelector(".product-name  h1").innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.3rem; font-size: 0.9rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-bottom: 0.6rem; padding-top: 0.7rem; font-size: 0.8rem; color: #ffffff; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      othobaInnerHTML = `<div>
                          <h1 style="font-size: 1.4rem; margin: 0; color: #ffffff; padding: 9px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 0.9rem; padding-bottom: 0.5rem; color: #ffffff;">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${limit * pagination} of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; padding: 0.5rem;">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; margin-right: 0.8rem;  background:  #ffffff; font-size: 0.9rem; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; border: 1px solid transparent;  
                                  background: #ffffff; font-size: 0.9rem; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createDevOthoba.innerHTML = othobaInnerHTML;
  } else if (location.href.includes("priyoshop.com/")) {
    document.querySelector(".product-essential");
    document.querySelector(".details-picture-wrapper").style.width = "26%";
    document
      .querySelector(".product-essential  .overview")
      .setAttribute("style", "width: 43%; float: left; margin-left: 1rem;");

    const createPriyoshop = document.createElement("div");
    createPriyoshop.className = "compare-product-info";
    createPriyoshop.innerHTML = priyoShopInnerHTML;
    createPriyoshop.setAttribute(
      "style",
      "display: inline-block; width: 340px; background-color: #26ACD5; padding: 0 10px; color: white; height: 62vh;"
    );
    document
      .querySelector(".product-essential > :nth-child(2)")
      .after(createPriyoshop);
    const productName = document.querySelector(".product-name").innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.3rem; font-size: 0.9rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-bottom: 0.5rem; padding-top: 0.6rem; font-size: 0.8rem; color: #ffffff; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      priyoShopInnerHTML = `<div>
                          <h1 style="font-size: 1.4rem; margin: 0; padding: 7px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 0.9rem; padding-bottom: 0.5rem; color: #ffffff;">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${limit * pagination} of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; margin-bottom: 0.7rem; padding-top: 0.5rem;">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; margin-right: 0.8rem;  background-color:  #ffffff; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; border: 1px solid transparent;  
                                  background-color: #ffffff; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createPriyoshop.innerHTML = priyoShopInnerHTML;
  } else if (location.href.includes("chaldal.com/")) {
    document.querySelector(".product-detail-block .left").style.width = "30%";
    document.querySelector(".product-detail-block .right").style.width = "42%";
    const createChaldal = document.createElement("div");
    createChaldal.className = "compare-product-info";
    createChaldal.innerHTML = chaldalInnerHTML;
    document
      .querySelector(".product-detail-block .productDetails")
      .appendChild(createChaldal);

    document
      .querySelector(".compare-product-info")
      .setAttribute(
        "style",
        "display: inline-block; width: 340px; background-color: #26ACD5; padding: 0 10px; margin-left: 1rem; color: white; height: 62vh;"
      );
    let loopCounter = 0;
    setInterval(myCallback, 1000);
    function myCallback() {
      console.log("looped", loopCounter);
      if (document.querySelector(".lightbox")) {
        if (loopCounter >= 1) return;
        document.querySelector(".left").style.width = "28%";
        document.querySelector(".right").style.width = "39%";
        const createChaldal = document.createElement("div");
        createChaldal.className = "compare-product-info";
        createChaldal.innerHTML = chaldalInnerHTML;
        document
          .querySelector(".lightbox .productDetails")
          .appendChild(createChaldal);
        document
          .querySelector(".compare-product-info")
          .setAttribute(
            "style",
            "display: inline-block; width: 290px; background-color: #26ACD5; margin-top: 2rem; margin-left: 1rem; padding: 0 10px; color: white; height: 62vh;"
          );
        createChaldal.innerHTML = chaldalInnerHTML;
        loopCounter++;
      } else {
        loopCounter = 0;
      }
    }
    const productName = document.querySelector(".nameAndSubtext h1").innerText;
    let pagination = 1;
    let limit = 10;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; margin-right: 0.5rem; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px; ">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.3rem; text-decoration: none; font-size: 0.9rem; color: #ffffff; cursor: pointer;  ">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>
                                  <p style="padding-bottom: 0.6rem; padding-top: 0.7rem; font-size: 0.8rem; color: #ffffff; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      chaldalInnerHTML = `<div>
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1rem; padding-bottom: 0.6rem; color: #ffffff;">Showing ${
                            limit * (pagination - 1) + 1
                          } - ${limit * pagination} of total
                          ${total} Products</p>
                          <div style="height: 48.5vh; overflow: auto;" >
                            ${similarProducts}
                          </div>
                          <div style="display: flex; justify-content: center; padding: 0.5rem 0;">
                              <button onclick="fetchPreviousProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; margin-right: 0.8rem;  background-color:  #ffffff; color: #000000; border: 1px solid transparent;
                                cursor: pointer;">
                                Previous
                              </button>
                              <button onclick="fetchNextProducts()" style="padding: 0.5rem 0.75rem; border-radius: 0.3rem; border: 1px solid transparent;  
                                  background-color: #ffffff; color: #000000; cursor: pointer;">
                                  Next
                              </button>
                          </div>
                        </div>`;
    }
    createChaldal.innerHTML = chaldalInnerHTML;
  }
};
