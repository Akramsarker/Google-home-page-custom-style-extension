chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
  if (frameId !== 0) return;
  console.log(tabId, frameId);
  chrome.scripting.executeScript({
    target: {
      tabId,
    },
    function: newPageLoad,
  });
});

const newPageLoad = async () => {
  // All Styles
  const styles = {
    daraz: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.3rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.3rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.3rem;",
      headerTitle:
        "font-size: 2rem; margin: 0; font-weight: 700; padding: 10px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1.3rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.3rem;",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1.3rem;",
      nextButton: "font-size: 1.3rem;",
      resultButtonTitle: "margin: 0; font-size: 1.3rem;",
    },
    ryanscomputers: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1rem;",
      headerTitle:
        "font-size: 1.5rem; margin: 0; font-weight: 700; padding: 10px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1rem;",
      buttonContainerStyle: "padding: 0.8rem 0",
      previousButton: "font-size: 1rem;",
      nextButton: "font-size: 1rem;",
      resultButtonTitle: "margin: 0; font-size: 1rem;",
    },
    startech: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1rem;",
      headerTitle:
        "font-size: 1.6rem; margin: 0; font-weight: 700; padding: 8px 0 9px 0",
      similarProductDivStyle: "height: 50vh; overflow: auto;",
      resultTitle: "font-size: 1rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1rem; width: auto;",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1rem;",
      nextButton: "font-size: 1rem;",
      resultButtonTitle: "margin: 0; font-size: 1rem;",
    },
    pickaboo: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.5rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.5rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.5rem;",
      headerTitle:
        "font-size: 2.6rem; margin: 0; color: #ffffff; font-weight: 800; padding: 8px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1.5rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.3rem; width:auto; color: #ffffff",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1.3rem;",
      nextButton: "font-size: 1.3rem;",
      resultButtonTitle: "margin: 0; font-size: 1.5rem;",
    },
    othoba: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1rem;",
      headerTitle:
        "font-size: 1.6rem; margin: 0; color: #ffffff; font-weight: 700; padding: 10px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1rem; width: auto; color: #ffffff;",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1rem;",
      nextButton: "font-size: 1rem;",
      resultButtonTitle: "margin: 0; font-size: 1rem;",
    },
    priyoshop: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1rem;",
      headerTitle:
        "font-size: 1.5rem; margin: 0; font-weight: 700; padding: 10px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1rem; color: #ffffff",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1rem;",
      nextButton: "font-size: 1rem; padding: 0;",
      resultButtonTitle: "margin: 0; font-size: 1rem;",
    },
    chaldal: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "display: flex; padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.3rem;",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.3rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.3rem;",
      headerTitle:
        "font-size: 2rem; margin: 0; font-weight: 700; padding: 10px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1.3rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.3rem; color: #ffffff",
      buttonContainerStyle: "padding: 1rem 0;",
      previousButton: "font-size: 1.3rem;",
      nextButton: "font-size: 1.3rem;",
      resultButtonTitle: "margin: 0; font-size: 1.3rem;",
    },
  };

  let darazInnerHTML = `<div style="height: 62vh">
                            <h1 style="font-size: 2rem; margin: 0; font-weight: 700;
                            padding: 10px 0 6px 0;">
                              Similar Products  
                            </h1>
                          <div style="">
                            <h3>Loading... </h3>
                          </div>
                        </div>`;
  let ryansInnerHTML = `<div style="height: 62vh">
                        <h1 style="font-size: 1.5rem; margin: 0; font-weight: 700;
                        padding: 10px 0 6px 0;">
                          Similar Products  
                        </h1>
                            <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                        </div>`;

  let startechInnerHTML = `<div style="height: 62vh">
                            <h1 style="font-size: 1.5rem; margin: 0; font-weight: 700;
                            padding: 10px 0 6px 0;">
                              Similar Products  
                            </h1>
                            <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                        </div>`;

  let othobaInnerHTML = `<div style="height: 61.5vh">
                        <h1 style="font-size: 1.5rem; color: #ffffff; margin: 0; padding: 10px 0;">
                          Similar Products
                        </h1>
                          <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                      </div>`;

  let priyoShopInnerHTML = `<div style="height: 62vh">
                              <h1 style="font-size: 1.5rem; margin: 0; font-weight: 700;
                              padding: 10px 0 6px 0;">
                                Similar Products  
                              </h1>
                              <p style="font-size: 0.9rem; color: #ffffff;">Loading... </p>
                          </div>`;

  let pickabooInnerHTML = `<div style="height: 62vh">
                          <h1 style="font-size: 2.3rem; color: #ffffff; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                            <p style="font-size: 1.5rem; color: #ffffff;">Loading... </p>
                        </div>`;

  let chaldalInnerHTML = `<div style="height: 62vh">
                              <h1 style="font-size: 1.5rem; color: #ffffff; margin: 0; padding: 10px 0;">
                                Similar Products
                              </h1>
                                <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                          </div>`;

  let chaldalModalInnerHTML = `<div style="height: 62vh">
                            <h1 style="font-size: 1.5rem; color: #ffffff; margin: 0; padding: 10px 0;">
                              Similar Products
                            </h1>
                              <p style="font-size: 1rem; color: #ffffff;">Loading... </p>
                          </div>`;

  // Generate Similar Products
  let sortBy = "price:asc";
  async function generateSimilarProducts(
    siteName,
    productName,
    innerHtml,
    createDev
  ) {
    const myHeaders = new Headers();
    myHeaders.append("X-TYPESENSE-API-KEY", "PWycI0o5aA9sthIiSFYm3rhpjEV13JmQ");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://jo8fa67x1dqtrhm9p-1.a1.typesense.net/collections/products/documents/search?query_by=title&pre_segmented_query=true&exhaustive_search=true&q=${productName}`,
      requestOptions
    );
    const result = await response.json();
    const posts = result.hits.map((hit) => hit.document);
    console.log(posts);
    const totalProductCount = result.found;
    let pagination = result.page;
    let similarProducts = "";
    posts.forEach((post) => {
      similarProducts += `<div style="margin-bottom: 0.8rem; margin-right: 0.3rem; background: #ffffff; border-radius: 3px; ${
        styles[siteName].mainDivStyle
      }">
                            <div style="display: flex; ${
                              styles[siteName].subContainerStyle
                            }">
                                <img src="${
                                  post.image
                                }" style="width: 70px; object-fit: cover;">
                              <div style="margin-left: 0.8rem;"> 
                                <a onMouseOver="this.style.color='#4D0097'"; onMouseOut="this.style.color='#4D0067'"
                                  href="${
                                    post.link
                                  }" target="_blank" style="color: #4D0097; text-decoration: none; cursor: pointer; ${
        styles[siteName].linkStyle
      }">${
        post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
      }</a>                     <div style="display: flex; align-items: center;">
                                  <p style="margin-right: 3rem; margin-bottom: 0; text-transform: capitalize; color: rgba(50, 59, 255, 0.9); ${
                                    styles[siteName].priceStyle
                                  }">TK ${post.price}
                                  </p>
                                    <p style="margin-bottom: 0; text-transform: capitalize; color: rgba(255, 0, 0, 0.83); ${
                                      styles[siteName].shopName
                                    }">${post.shop}</p>
                                </div>
                            </div>
                          </div>
                        </div>`;
    });

    innerHtml = `<div>
                        <h1 style="${styles[siteName].headerTitle}">
                          Similar Products
                        </h1>
                        <div style="display: flex; justify-content: space-between; align-items: center; ${
                          styles[siteName].selectContainerStyle
                        }">
                          <p style="${
                            styles[siteName].resultTitle
                          }">Total Result:
                            ${totalProductCount}</p>
                            <select id="cars" style="border: none; background: none; outline: none; color: #ffffff; ${
                              styles[siteName].selectStyle
                            }" onchange="onSortChange()">
                              <option style="color: #000;
                               value="price:asc" selected>Default</option>
                              <option style="color: #000; value="price:asc">Low to High</option>
                              <option style="color: #000; value="price:desc">High to Low</option>
                            </select>
                        </div>
                        <div style="${styles[siteName].similarProductDivStyle}">
                            ${similarProducts}
                        </div>
                          <div style="display: flex; justify-content: space-between; align-items: center; ${
                            styles[siteName].buttonContainerStyle
                          }">
                              <button style="background: none; color: #ffffff; padding: 0; border: none; cursor: pointer; ${
                                styles[siteName].previousButton
                              }">
                                Previous
                              </button>
                              <p style="${
                                styles[siteName].resultButtonTitle
                              }">Result: ${
      totalProductCount * (pagination - 1) + 1
    } - ${totalProductCount * pagination}</p>
                              <button onclick="this.innerText = 'Hello world'" style="border: none; color: #ffffff; padding: 0; background: none; cursor: pointer; ${
                                styles[siteName].nextButton
                              }">
                                  Next
                              </button>
                          </div>
                    </div>`;
    createDev.innerHTML = innerHtml;
    async function onSortChange() {
      pagination++;
      const myHeaders = new Headers();
      myHeaders.append(
        "X-TYPESENSE-API-KEY",
        "PWycI0o5aA9sthIiSFYm3rhpjEV13JmQ"
      );
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `https://jo8fa67x1dqtrhm9p-1.a1.typesense.net/collections/products/documents/search?query_by=title&pre_segmented_query=true&exhaustive_search=true&q=${productName}`,
        requestOptions
      );
      const result = await response.json();
      const posts = result.hits.map((hit) => hit.document);
      console.log(posts);
      const totalProductCount = result.found;
      let pagination = result.page;
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<div style="margin-bottom: 0.8rem; margin-right: 0.3rem; background: #ffffff; border-radius: 3px; padding: 0.3rem 0">
                              <div style="display: flex; padding: 5px;">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a onMouseOver="this.style.color='#4D0097'"; onMouseOut="this.style.color='#4D0067'"
                                    href="${
                                      post.link
                                    }" target="_blank" style="line-height: 1.3rem; text-decoration: none; font-size: 1.4rem; color: #4D0097; cursor: pointer;">${
          post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
        }</a>                     <div style="display: flex; align-items: center;">
                                    <p style="padding:0.6rem 0 0 0; font-size: 1.3rem; margin-right: 3rem; margin-bottom: 0; text-transform: capitalize; color: rgba(50, 59, 255, 0.9); 
                                    ">TK ${post.price}
                                    </p>
                                      <p style="padding:0.6rem 0 0 0; font-size: 1.3rem; margin-bottom: 0; text-transform: capitalize; color: rgba(255, 0, 0, 0.83);">${
                                        post.shop
                                      }</p>
                                  </div>
                              </div>
                            </div>
                          </div>`;
      });
      innerHtml = `<div>
                              <h1 style="font-size: 1.5rem; margin: 0; font-weight: 700;
                              padding: 10px 0 6px 0;">
                                Similar Products
                              </h1>
                              <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.5rem">
                                <p style="font-size: 1rem; margin-bottom: 0; color: #ffffff;">Total Result:
                                ${totalProductCount}</p>
                                <select id="cars" style="background: none; border: none; outline: none; color: #ffffff;" onchange="onSortChange()">
                                  <option style="color: #000; value="price:asc" selected>Default</option>
                                  <option style="color: #000; value="price:asc">Low to High</option>
                                  <option style="color: #000; value="price:desc">High to Low</option>
                                </select>
                              </div>
                              <div style="height: 51vh; overflow: auto;" >
                                ${similarProducts}
                              </div>
                              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0">
                                  <button style="font-size: 1.1rem; background: none; padding: 0; border: none; color: #ffffff;
                                    cursor: pointer;">
                                    Previous
                                  </button>
                                  <p style="margin: 0; font-size: 1.1rem;">Result: ${
                                    totalProductCount * (pagination - 1) + 1
                                  } - ${totalProductCount * pagination}</p>
                                  <button onclick="this.innerText = 'Hello world'" style="font-size: 1.1rem; border: none; padding: 0; background: none; color: #ffffff; cursor: pointer;">
                                      Next
                                  </button>
                              </div>
                            </div>`;
      createDev.innerHTML = innerHtml;
    }
    // async function fetchPreviousProducts() {
    //   pagination--;
    //   const response = await fetch(
    //     encodeURI(
    //       `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=${limit}&pagination=${pagination}`
    //     )
    //   );
    //   const { success, posts, total } = await response.json();
    // }
  }

  if (location.href.includes("https://www.daraz.com.bd/products/")) {
    document.querySelector("#root").style.width = "1380px";
    document.querySelector(".pdp-block__product-detail").style.width =
      "calc(100% - 674px)";
    document.querySelector(".pdp-block__main-information-detail").style.width =
      "calc(100% - 340px)";
    const createDevDaraz = document.createElement("div");
    createDevDaraz.setAttribute("class", "compare-product-info");
    createDevDaraz.setAttribute(
      "style",
      "display: inline-block; width: 320px; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px;"
    );
    createDevDaraz.innerHTML = darazInnerHTML;
    document.querySelector("#block-7S7Xc8ZF40").appendChild(createDevDaraz);
    const productName = document.querySelector(
      ".pdp-mod-product-badge-title"
    ).innerText;
    generateSimilarProducts(
      "daraz",
      productName,
      darazInnerHTML,
      createDevDaraz
    );
  } else if (location.href.includes("ryanscomputers.com/")) {
    document.querySelector(
      ".product-info-section .image-detail-column"
    ).style.width = "39%";
    document.querySelector(
      ".product-info-section .info-detail-column"
    ).style.width = "39%";
    const createDevRyans = document.createElement("div");
    createDevRyans.className = "compare-product-info";
    createDevRyans.setAttribute(
      "style",
      "display: inline-block; width: 22%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px;"
    );
    document
      .querySelector(".product-info-section .container .g-2")
      .appendChild(createDevRyans);
    createDevRyans.innerHTML = ryansInnerHTML;
    const productName = document.querySelector(".product_content h2").innerText;
    generateSimilarProducts(
      "ryanscomputers",
      productName,
      ryansInnerHTML,
      createDevRyans
    );
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
      .setAttribute("style", "width: 46%; flex: unset;");

    document.querySelector(
      ".product-details .product-images .thumbnail .main-img"
    ).style.maxWidth = "300px";
    const createDevStartech = document.createElement("div");
    createDevStartech.className = "compare-product-info";
    createDevStartech.innerHTML = startechInnerHTML;
    createDevStartech.setAttribute(
      "style",
      "display: inline-block; width: 30%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; height: 66vh;"
    );
    document
      .querySelector(".product-details-summary > .container")
      .lastElementChild.appendChild(createDevStartech);
    createDevStartech.innerHTML = startechInnerHTML;
    const productName = document.querySelector(".product-name").innerText;
    generateSimilarProducts(
      "startech",
      productName,
      startechInnerHTML,
      createDevStartech
    );
  } else if (location.href.includes("pickaboo.com/")) {
    document.querySelector(".main-wrapper").style.maxWidth = "1445px";
    document.querySelector(".column").style.width = "55%";
    document.querySelector(".sidebar-additional").style.float = "left";
    const createDevPickaboo = document.createElement("div");
    createDevPickaboo.className = "compare-product-info";
    createDevPickaboo.setAttribute(
      "style",
      "display: inline-block; width: 24%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px;"
    );
    createDevPickaboo.innerHTML = pickabooInnerHTML;
    document.querySelector(".columns ").appendChild(createDevPickaboo);
    const productName = document.querySelector(".base").innerText;
    generateSimilarProducts(
      "pickaboo",
      productName,
      pickabooInnerHTML,
      createDevPickaboo
    );
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
      "display: inline-block; width: 30%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px;"
    );
    createDevOthoba.innerHTML = othobaInnerHTML;
    document
      .querySelector(".product-essential  .col-md-eight > .row ")
      .appendChild(createDevOthoba);
    const productName = document.querySelector(".product-name  h1").innerText;
    generateSimilarProducts(
      "othoba",
      productName,
      othobaInnerHTML,
      createDevOthoba
    );
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
      "display: inline-block; width: 22%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px;"
    );
    document
      .querySelector(".product-essential > :nth-child(2)")
      .after(createPriyoshop);
    const productName = document.querySelector(".product-name").innerText;
    generateSimilarProducts(
      "priyoshop",
      productName,
      priyoShopInnerHTML,
      createPriyoshop
    );
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
        "display: inline-block; width: 27%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; margin-left: 0.5rem;"
      );

    const productName = document.querySelector(".nameAndSubtext h1").innerText;
    const myHeaders = new Headers();
    myHeaders.append("X-TYPESENSE-API-KEY", "PWycI0o5aA9sthIiSFYm3rhpjEV13JmQ");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://jo8fa67x1dqtrhm9p-1.a1.typesense.net/collections/products/documents/search?query_by=title&pre_segmented_query=true&exhaustive_search=true&q=${productName}`,
      requestOptions
    );
    const result = await response.json();
    const posts = result.hits.map((hit) => hit.document);
    const totalProductCount = result.found;
    let pagination = result.page;
    let similarProducts = "";
    posts.forEach((post) => {
      similarProducts += `<div style="margin-bottom: 0.8rem;margin-right: 0.3rem; background: #ffffff; border-radius: 3px; padding: 0.3rem 0">
                              <div style="display: flex; padding: 5px;">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a onMouseOver="this.style.color='#4D0097'"; onMouseOut="this.style.color='#4D0067'"
                                    href="${
                                      post.link
                                    }" target="_blank" style="line-height: 1.3rem; text-decoration: none; font-size: 1rem; color: #4D0097; cursor: pointer;">${
        post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title
      }</a>                     <div style="display: flex; align-items: center;">
                                    <p style="padding:0.6rem 0 0 0; font-size: 1rem; margin-right: 3rem; margin-bottom: 0; text-transform: capitalize; color: rgba(50, 59, 255, 0.9); 
                                    ">TK ${post.price}
                                    </p>
                                      <p style="padding:0.6rem 0 0 0; font-size: 1rem; margin-bottom: 0; text-transform: capitalize; color: rgba(255, 0, 0, 0.83);">${
                                        post.shop
                                      }</p>
                                  </div>
                              </div>
                            </div>
                          </div>`;
    });
    chaldalInnerHTML = `<div>
                            <h1 style="font-size: 1.5rem; margin: 0; font-weight: 700;
                            padding: 10px 0 6px 0;">
                              Similar Products
                            </h1>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.5rem">
                              <p style="font-size: 1rem; margin-bottom: 0; color: #ffffff;">Total Result:
                              ${totalProductCount}</p>
                              <select id="cars" style="background: none; border: none; outline: none; color: #ffffff;">
                                <option style="color: #000; value="opel">Default</option>
                                <option style="color: #000; value="volvo">Low to High</option>
                                <option style="color: #000; value="saab">High to Low</option>
                              </select>
                            </div>
                            <div style="height: 51vh; overflow: auto;" >
                              ${similarProducts}
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0">
                                <button style="font-size: 1.1rem; background: none; padding: 0; border: none; color: #ffffff;
                                  cursor: pointer;">
                                  Previous
                                </button>
                                <p style="margin: 0; font-size: 1.1rem;">Result: ${
                                  totalProductCount * (pagination - 1) + 1
                                } - ${totalProductCount * pagination}</p>
                                <button onclick="this.innerText = 'Hello world'" style="font-size: 1.1rem; border: none; padding: 0; background: none; color: #ffffff; cursor: pointer;">
                                    Next
                                </button>
                            </div>
                          </div>`;
    createChaldal.innerHTML = chaldalInnerHTML;
    let loopCounter = 0;
    setInterval(myCallback, 5000);
    async function myCallback() {
      console.log("looped", loopCounter);
      if (document.querySelector(".lightbox")) {
        if (loopCounter >= 1) return;
        document.querySelector(".left").style.width = "28%";
        document.querySelector(".right").style.width = "39%";
        const createChaldal = document.createElement("div");
        createChaldal.className = "compare-product-info";
        createChaldal.innerHTML = chaldalModalInnerHTML;
        document
          .querySelector(".lightbox .productDetails")
          .appendChild(createChaldal);
        document
          .querySelector(".compare-product-info")
          .setAttribute(
            "style",
            "display: inline-block; width: 290px; background-color: #26ACD5; margin-top: 2rem; margin-left: 1rem; padding: 0 10px; color: white; height: 100%;"
          );

        const productName =
          document.querySelector(".nameAndSubtext h1").innerText;
        const myHeaders = new Headers();
        myHeaders.append(
          "X-TYPESENSE-API-KEY",
          "PWycI0o5aA9sthIiSFYm3rhpjEV13JmQ"
        );

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          `https://jo8fa67x1dqtrhm9p-1.a1.typesense.net/collections/products/documents/search?query_by=title&pre_segmented_query=true&exhaustive_search=true&q=${productName}`,
          requestOptions
        );
        const result = await response.json();
        const posts = result.hits.map((hit) => hit.document);
        const totalProductCount = result.found;
        let pagination = result.page;
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
        chaldalModalInnerHTML = `<div>
                          <h1 style="font-size: 1.5rem; margin: 0; padding: 10px 0;">
                            Similar Products
                          </h1>
                          <p style="font-size: 1rem; padding-bottom: 0.6rem; color: #ffffff;">Showing ${
                            totalProductCount * (pagination - 1) + 1
                          } - ${totalProductCount * pagination} of total
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
        createChaldal.innerHTML = chaldalModalInnerHTML;
        loopCounter++;
      } else {
        loopCounter = 0;
      }
    }
  }
};
