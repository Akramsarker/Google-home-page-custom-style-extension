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
                          <h1 style="font-size: 2rem; margin-top: 1rem; margin-bottom: 1rem;">
                            Similar Products
                          </h1>
                          <div style="margin-top: 1rem; margin-bottom: 1rem;">
                            <h3>Loading... </h3>
                          </div>
                        </div>`;
  document.querySelector("#root").style.width = "1450px";
  document.querySelector(".pdp-block__product-detail").style.width =
    "calc(100% - 615px)";
  const createDev = document.createElement("div");
  createDev.className = "compare-product-info";
  createDev.innerHTML = darazInnerHTML;
  document.querySelector("#block-3FfF28kZyT").appendChild(createDev);
  const styleDiv = document.querySelector(".compare-product-info");
  styleDiv.style.display = "inline-block";
  styleDiv.style.width = "262px";
  styleDiv.style.backgroundColor = "#26ACD5";
  styleDiv.style.padding = "10px";
  styleDiv.style.color = "white";
  styleDiv.style.height = "56vh";
  styleDiv.style.overflowY = "scroll";
  if (location.href.includes("/products")) {
    const productName = document.querySelector(
      ".pdp-mod-product-badge-title"
    ).innerText;
    const response = await fetch(
      encodeURI(
        `https://mullojachai.herokuapp.com/api/v1/products?search=${productName}&limit=10&pagination=1`
      )
    );
    const { success, posts, total } = await response.json();
    if (success) {
      let similarProducts = "";
      posts.forEach((post) => {
        similarProducts += `<a href="${
          post.link
        }" target="_blank" style="color: #fff; cursor: pointer; ">
                              <div style="margin-bottom: 0.8rem; border: 1px solid #D0611E;">
                                <div style="display: flex; padding: 5px;">
                                   <img src="${
                                     post.image
                                   }" style="width: 70px;">
                                   <div style="margin-left: 0.8rem;">
                                     <p style="line-height: 1.5rem; font-size: 1.2rem;">${
                                       post.title.slice(0, 35) + "…"
                                     }</p>
                                     <p style="padding-bottom: 0.7rem; padding-top: 1rem;">Price: ${
                                       post.price
                                     } TK</p>
                                     <p>Shop Name: ${post.shop}</p>
                                   </div>
                                </div>
                              </div>
                            </a>`;
      });
      console.log(similarProducts);
      darazInnerHTML = `<div>
                            <h1 style="font-size: 2rem; margin-top: 1rem; margin-bottom: 1rem;">
                             Similar Products
                            </h1>
                            <div style="margin-top: 1rem; ">
                              ${similarProducts}
                            </div>
                          </div>`;
    }
    createDev.innerHTML = darazInnerHTML;
  }
};
