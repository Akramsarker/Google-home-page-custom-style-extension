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
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                            <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                        </div>`;
  if (location.href.includes("/products")) {
    document.querySelector("#root").style.width = "1500px";
    document.querySelector(".pdp-block__product-detail").style.width =
      "calc(100% - 665px)";
    const createDev = document.createElement("div");
    createDev.className = "compare-product-info";
    createDev.innerHTML = darazInnerHTML;
    document.querySelector("#block-3FfF28kZyT").appendChild(createDev);
    const styleDiv = document.querySelector(".compare-product-info").style;
    styleDiv.display = "inline-block";
    styleDiv.width = "315px";
    styleDiv.backgroundColor = "#26ACD5";
    styleDiv.padding = "0 10px";
    styleDiv.color = "white";
    styleDiv.height = "60vh";
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
    createDevRyans.innerHTML = ryansInnerHTML;
    document.querySelector(".row").appendChild(createDevRyans);
    document
      .querySelector(".tab-product-info-wrapper > .container")
      .firstElementChild.appendChild(createDevRyans);

    const styleDiv = document.querySelector(".compare-product-info").style;
    styleDiv.display = "inline-block";
    styleDiv.width = "320px";
    styleDiv.backgroundColor = "#26ACD5";
    styleDiv.padding = "0 10px";
    styleDiv.color = "white";
    styleDiv.height = "62.5vh";
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
      .setAttribute("style", "width: 31%; flex: unset;");
    document
      .querySelector(".product-details-summary .col-md-7")
      .setAttribute("style", "width: 50%; flex: unset;");
    const createDevStartech = document.createElement("div");
    createDevStartech.className = "compare-product-info";
    createDevStartech.innerHTML = startechInnerHTML;
    document
      .querySelector(".product-details-summary > .container")
      .lastElementChild.appendChild(createDevStartech);
    const styleDiv = document.querySelector(".compare-product-info").style;
    styleDiv.display = "inline-block";
    styleDiv.width = "315px";
    styleDiv.backgroundColor = "#26ACD5";
    styleDiv.padding = "0 10px";
    styleDiv.color = "white";
    styleDiv.height = "62.5vh";

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
                                  <p style="padding-bottom: 0.6rem; padding-top: 0.7rem; font-size: 0.8rem; color: #ffffff; text-transform: capitalize;
                                  ">${post.price} TK  &nbsp;&nbsp;${
          post.shop
        }</p>
                                  </div>
                                </div>
                            </div>`;
      });
      console.log(similarProducts);
      startechInnerHTML = `<div>
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1rem; padding-bottom: 0.6rem; color: #ffffff;">Showing ${
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
    createDevStartech.innerHTML = startechInnerHTML;
  }
};
