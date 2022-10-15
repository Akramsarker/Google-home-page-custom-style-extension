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
  if (location.href.includes("/www.google.com")) {
    document.querySelector(".qarstb");
    const createElement = document.createElement("h1");
    createElement.setAttribute(
      "style",
      "max-width: 400px; margin: auto; background: linear-gradient(201.76deg, #4285F4 -1.89%, #FE4242 54.02%, #34A853 108.78%); color: #ffffff; padding: 12px; text-align: center"
    );
    createElement.innerHTML = "My Name Is Akram Sheikh???";
    document.querySelector(".qarstb").appendChild(createElement);
  }
};
