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
  styleDiv.height = "56vh";
  styleDiv.overflowY = "auto";
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
        similarProducts += `<div style="margin-bottom: 0.8rem; border: 1px solid #ffffff; borderRadius: 10px;">
                               <div style="display: flex; padding: 5px;">
                                  <img src="${
                                    post.image
                                  }" style="width: 70px; object-fit: cover;">
                                <div style="margin-left: 0.8rem;"> 
                                  <a   onMouseOver="this.style.color='#F6F1F0'" onMouseOut="this.style.color='#ffffff'"
                                   href="${
                                     post.link
                                   }" target="_blank" style="line-height: 1.5rem; font-size: 1.2rem; color: #ffffff; cursor: pointer;  ">${
          post.title.slice(0, 50) + "…"
        }</a>
                                  <p style="padding-bottom: 0.7rem; padding-top: 1rem;">${
                                    post.price
                                  } TK  &nbsp;&nbsp;${
          post.shop.charAt(0).toUpperCase() + post.shop.slice(1)
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
                            <div style=" ">
                              ${similarProducts}
                            </div>
                          </div>`;
    }
    createDev.innerHTML = darazInnerHTML;
  }
};
