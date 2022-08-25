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
      loadingContainer: "height: 61vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
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
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
    },
    startech: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.1rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.1rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.1rem;",
      headerTitle:
        "font-size: 1.7rem; margin: 0; font-weight: 700; padding: 8px 0 0 0",
      similarProductDivStyle: "height: 50vh; overflow: auto;",
      resultTitle: "font-size: 1.1rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.1rem; width: auto;",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1.1rem;",
      nextButton: "font-size: 1.1rem;",
      resultButtonTitle: "margin: 0; font-size: 1.1rem;",
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
    },
    pickaboo: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.6rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.6rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.6rem;",
      headerTitle:
        "font-size: 2.7rem; margin: 0; color: #ffffff; font-weight: 800; padding: 8px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1.6rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.6rem; width: auto; color: #ffffff",
      buttonContainerStyle: "padding: 1rem 0",
      previousButton: "font-size: 1.3rem;",
      nextButton: "font-size: 1.3rem;",
      resultButtonTitle: "margin: 0; font-size: 1.6rem;",
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
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
      buttonContainerStyle: "padding: 0.5rem 0",
      previousButton: "font-size: 1rem;",
      nextButton: "font-size: 1rem;",
      resultButtonTitle: "margin: 0; font-size: 1rem;",
      loadingContainer: "height: 61vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
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
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
    },
    chaldal: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "display: flex; padding: 5px;",
      linkStyle: "line-height: 1.3rem; font-size: 1rem;",
      priceStyle: "padding: 0.6rem 0 0 0; font-size: 1rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1rem;",
      headerTitle:
        "font-size: 1.5rem; font-weight: 700; padding:0.6rem 0 0.7rem 0; margin: 0;",
      similarProductDivStyle: "height: 48.5vh; overflow: auto;",
      resultTitle: "font-size: 1rem;",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1rem; color: #ffffff",
      buttonContainerStyle: "padding: 0.8rem 0",
      previousButton: "font-size: 1.1rem;",
      nextButton: "font-size: 1.1rem;",
      resultButtonTitle: "font-size: 1.1rem;",
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
    },
    walcart: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.6rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.6rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.6rem;",
      headerTitle:
        "font-size: 2.7rem; margin: 0; color: #ffffff; font-weight: 800; padding: 8px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1.6rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.6rem; width: auto; color: #ffffff",
      buttonContainerStyle: "padding: 1.5rem 0",
      previousButton: "font-size: 1.7rem;",
      nextButton: "font-size: 1.7rem;",
      resultButtonTitle: "margin: 0; font-size: 1.7rem;",
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
    },
    vision: {
      mainDivStyle: "padding: 0.3rem 0",
      subContainerStyle: "padding: 5px;",
      linkStyle: "line-height: 1.6rem; font-size: 1.6rem",
      priceStyle: "padding:0.6rem 0 0 0; font-size: 1.6rem;",
      shopName: "padding:0.6rem 0 0 0; font-size: 1.6rem;",
      headerTitle:
        "font-size: 2.7rem; margin: 0; color: #ffffff; font-weight: 800; padding: 8px 0 9px 0",
      similarProductDivStyle: "height: 51vh; overflow: auto;",
      resultTitle: "font-size: 1.6rem; margin-bottom: 0; color: #ffffff",
      selectContainerStyle: "padding-bottom: 0.7rem",
      selectStyle: "font-size: 1.6rem; width: auto; color: #ffffff",
      buttonContainerStyle: "padding: 1.5rem 0",
      previousButton: "font-size: 1.7rem;",
      nextButton: "font-size: 1.7rem;",
      resultButtonTitle: "margin: 0; font-size: 1.7rem;",
      loadingContainer: "height: 62vh",
      loadingHeaderContainer: "padding-top: 0.9rem;",
    },
  };

  function loadingInnerHtml(loadingSiteName) {
    return `<div style="${styles[loadingSiteName].loadingContainer}">
            <div style="${styles[loadingSiteName].loadingHeaderContainer}">
                <?xml version="1.0" standalone="no"?>
                <svg width="100%" viewBox="0 0 278 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="278" height="36" fill="none"/>
                <rect x="179.953" y="7" width="97.0473" height="20" fill="url(#pattern0)"/>
                <path d="M8.32 24.14C7.29333 24.14 6.37333 23.9733 5.56 23.64C4.74667 23.3067 4.09333 22.8133 3.6 22.16C3.12 21.5067 2.86667 20.72 2.84 19.8H6.48C6.53333 20.32 6.71333 20.72 7.02 21C7.32667 21.2667 7.72667 21.4 8.22 21.4C8.72667 21.4 9.12667 21.2867 9.42 21.06C9.71333 20.82 9.86 20.4933 9.86 20.08C9.86 19.7333 9.74 19.4467 9.5 19.22C9.27333 18.9933 8.98667 18.8067 8.64 18.66C8.30667 18.5133 7.82667 18.3467 7.2 18.16C6.29333 17.88 5.55333 17.6 4.98 17.32C4.40667 17.04 3.91333 16.6267 3.5 16.08C3.08667 15.5333 2.88 14.82 2.88 13.94C2.88 12.6333 3.35333 11.6133 4.3 10.88C5.24667 10.1333 6.48 9.76 8 9.76C9.54667 9.76 10.7933 10.1333 11.74 10.88C12.6867 11.6133 13.1933 12.64 13.26 13.96H9.56C9.53333 13.5067 9.36667 13.1533 9.06 12.9C8.75333 12.6333 8.36 12.5 7.88 12.5C7.46667 12.5 7.13333 12.6133 6.88 12.84C6.62667 13.0533 6.5 13.3667 6.5 13.78C6.5 14.2333 6.71333 14.5867 7.14 14.84C7.56667 15.0933 8.23333 15.3667 9.14 15.66C10.0467 15.9667 10.78 16.26 11.34 16.54C11.9133 16.82 12.4067 17.2267 12.82 17.76C13.2333 18.2933 13.44 18.98 13.44 19.82C13.44 20.62 13.2333 21.3467 12.82 22C12.42 22.6533 11.8333 23.1733 11.06 23.56C10.2867 23.9467 9.37333 24.14 8.32 24.14ZM26.5647 12.84V24H23.1447V22.48C22.798 22.9733 22.3247 23.3733 21.7247 23.68C21.138 23.9733 20.4847 24.12 19.7647 24.12C18.9114 24.12 18.158 23.9333 17.5047 23.56C16.8514 23.1733 16.3447 22.62 15.9847 21.9C15.6247 21.18 15.4447 20.3333 15.4447 19.36V12.84H18.8447V18.9C18.8447 19.6467 19.038 20.2267 19.4247 20.64C19.8114 21.0533 20.3314 21.26 20.9847 21.26C21.6514 21.26 22.178 21.0533 22.5647 20.64C22.9514 20.2267 23.1447 19.6467 23.1447 18.9V12.84H26.5647ZM33.2613 12.68C34.0479 12.68 34.7346 12.84 35.3213 13.16C35.9213 13.48 36.3813 13.9 36.7013 14.42V12.84H40.1213V23.98C40.1213 25.0067 39.9146 25.9333 39.5013 26.76C39.1013 27.6 38.4813 28.2667 37.6413 28.76C36.8146 29.2533 35.7813 29.5 34.5413 29.5C32.8879 29.5 31.5479 29.1067 30.5213 28.32C29.4946 27.5467 28.9079 26.4933 28.7613 25.16H32.1413C32.2479 25.5867 32.5013 25.92 32.9013 26.16C33.3013 26.4133 33.7946 26.54 34.3813 26.54C35.0879 26.54 35.6479 26.3333 36.0613 25.92C36.4879 25.52 36.7013 24.8733 36.7013 23.98V22.4C36.3679 22.92 35.9079 23.3467 35.3213 23.68C34.7346 24 34.0479 24.16 33.2613 24.16C32.3413 24.16 31.5079 23.9267 30.7613 23.46C30.0146 22.98 29.4213 22.3067 28.9813 21.44C28.5546 20.56 28.3413 19.5467 28.3413 18.4C28.3413 17.2533 28.5546 16.2467 28.9813 15.38C29.4213 14.5133 30.0146 13.8467 30.7613 13.38C31.5079 12.9133 32.3413 12.68 33.2613 12.68ZM36.7013 18.42C36.7013 17.5667 36.4613 16.8933 35.9813 16.4C35.5146 15.9067 34.9413 15.66 34.2613 15.66C33.5813 15.66 33.0013 15.9067 32.5213 16.4C32.0546 16.88 31.8213 17.5467 31.8213 18.4C31.8213 19.2533 32.0546 19.9333 32.5213 20.44C33.0013 20.9333 33.5813 21.18 34.2613 21.18C34.9413 21.18 35.5146 20.9333 35.9813 20.44C36.4613 19.9467 36.7013 19.2733 36.7013 18.42ZM46.8355 12.68C47.6221 12.68 48.3088 12.84 48.8955 13.16C49.4955 13.48 49.9555 13.9 50.2755 14.42V12.84H53.6955V23.98C53.6955 25.0067 53.4888 25.9333 53.0755 26.76C52.6755 27.6 52.0555 28.2667 51.2155 28.76C50.3888 29.2533 49.3555 29.5 48.1155 29.5C46.4621 29.5 45.1221 29.1067 44.0955 28.32C43.0688 27.5467 42.4821 26.4933 42.3355 25.16H45.7155C45.8221 25.5867 46.0755 25.92 46.4755 26.16C46.8755 26.4133 47.3688 26.54 47.9555 26.54C48.6621 26.54 49.2221 26.3333 49.6355 25.92C50.0621 25.52 50.2755 24.8733 50.2755 23.98V22.4C49.9421 22.92 49.4821 23.3467 48.8955 23.68C48.3088 24 47.6221 24.16 46.8355 24.16C45.9155 24.16 45.0821 23.9267 44.3355 23.46C43.5888 22.98 42.9955 22.3067 42.5555 21.44C42.1288 20.56 41.9155 19.5467 41.9155 18.4C41.9155 17.2533 42.1288 16.2467 42.5555 15.38C42.9955 14.5133 43.5888 13.8467 44.3355 13.38C45.0821 12.9133 45.9155 12.68 46.8355 12.68ZM50.2755 18.42C50.2755 17.5667 50.0355 16.8933 49.5555 16.4C49.0888 15.9067 48.5155 15.66 47.8355 15.66C47.1555 15.66 46.5755 15.9067 46.0955 16.4C45.6288 16.88 45.3955 17.5467 45.3955 18.4C45.3955 19.2533 45.6288 19.9333 46.0955 20.44C46.5755 20.9333 47.1555 21.18 47.8355 21.18C48.5155 21.18 49.0888 20.9333 49.5555 20.44C50.0355 19.9467 50.2755 19.2733 50.2755 18.42ZM66.6897 18.24C66.6897 18.56 66.6697 18.8933 66.6297 19.24H58.8897C58.943 19.9333 59.163 20.4667 59.5497 20.84C59.9497 21.2 60.4364 21.38 61.0097 21.38C61.863 21.38 62.4564 21.02 62.7897 20.3H66.4297C66.243 21.0333 65.903 21.6933 65.4097 22.28C64.9297 22.8667 64.323 23.3267 63.5897 23.66C62.8564 23.9933 62.0364 24.16 61.1297 24.16C60.0364 24.16 59.063 23.9267 58.2097 23.46C57.3564 22.9933 56.6897 22.3267 56.2097 21.46C55.7297 20.5933 55.4897 19.58 55.4897 18.42C55.4897 17.26 55.723 16.2467 56.1897 15.38C56.6697 14.5133 57.3364 13.8467 58.1897 13.38C59.043 12.9133 60.023 12.68 61.1297 12.68C62.2097 12.68 63.1697 12.9067 64.0097 13.36C64.8497 13.8133 65.503 14.46 65.9697 15.3C66.4497 16.14 66.6897 17.12 66.6897 18.24ZM63.1897 17.34C63.1897 16.7533 62.9897 16.2867 62.5897 15.94C62.1897 15.5933 61.6897 15.42 61.0897 15.42C60.5164 15.42 60.0297 15.5867 59.6297 15.92C59.243 16.2533 59.003 16.7267 58.9097 17.34H63.1897ZM73.0339 24.16C72.0606 24.16 71.1939 23.9933 70.4339 23.66C69.6739 23.3267 69.0739 22.8733 68.6339 22.3C68.1939 21.7133 67.9472 21.06 67.8939 20.34H71.2739C71.3139 20.7267 71.4939 21.04 71.8139 21.28C72.1339 21.52 72.5272 21.64 72.9939 21.64C73.4206 21.64 73.7472 21.56 73.9739 21.4C74.2139 21.2267 74.3339 21.0067 74.3339 20.74C74.3339 20.42 74.1672 20.1867 73.8339 20.04C73.5006 19.88 72.9606 19.7067 72.2139 19.52C71.4139 19.3333 70.7472 19.14 70.2139 18.94C69.6806 18.7267 69.2206 18.4 68.8339 17.96C68.4472 17.5067 68.2539 16.9 68.2539 16.14C68.2539 15.5 68.4272 14.92 68.7739 14.4C69.1339 13.8667 69.6539 13.4467 70.3339 13.14C71.0272 12.8333 71.8472 12.68 72.7939 12.68C74.1939 12.68 75.2939 13.0267 76.0939 13.72C76.9072 14.4133 77.3739 15.3333 77.4939 16.48H74.3339C74.2806 16.0933 74.1072 15.7867 73.8139 15.56C73.5339 15.3333 73.1606 15.22 72.6939 15.22C72.2939 15.22 71.9872 15.3 71.7739 15.46C71.5606 15.6067 71.4539 15.8133 71.4539 16.08C71.4539 16.4 71.6206 16.64 71.9539 16.8C72.3006 16.96 72.8339 17.12 73.5539 17.28C74.3806 17.4933 75.0539 17.7067 75.5739 17.92C76.0939 18.12 76.5472 18.4533 76.9339 18.92C77.3339 19.3733 77.5406 19.9867 77.5539 20.76C77.5539 21.4133 77.3672 22 76.9939 22.52C76.6339 23.0267 76.1072 23.4267 75.4139 23.72C74.7339 24.0133 73.9406 24.16 73.0339 24.16ZM85.8663 21.1V24H84.1263C82.8863 24 81.9196 23.7 81.2263 23.1C80.5329 22.4867 80.1863 21.4933 80.1863 20.12V15.68H78.8263V12.84H80.1863V10.12H83.6063V12.84H85.8463V15.68H83.6063V20.16C83.6063 20.4933 83.6863 20.7333 83.8463 20.88C84.0063 21.0267 84.2729 21.1 84.6463 21.1H85.8663ZM89.4913 11.68C88.8913 11.68 88.3979 11.5067 88.0113 11.16C87.6379 10.8 87.4513 10.36 87.4513 9.84C87.4513 9.30667 87.6379 8.86667 88.0113 8.52C88.3979 8.16 88.8913 7.98 89.4913 7.98C90.0779 7.98 90.5579 8.16 90.9313 8.52C91.3179 8.86667 91.5113 9.30667 91.5113 9.84C91.5113 10.36 91.3179 10.8 90.9313 11.16C90.5579 11.5067 90.0779 11.68 89.4913 11.68ZM91.1913 12.84V24H87.7713V12.84H91.1913ZM98.7497 24.16C97.6564 24.16 96.6697 23.9267 95.7897 23.46C94.923 22.9933 94.2364 22.3267 93.7297 21.46C93.2364 20.5933 92.9897 19.58 92.9897 18.42C92.9897 17.2733 93.243 16.2667 93.7497 15.4C94.2564 14.52 94.9497 13.8467 95.8297 13.38C96.7097 12.9133 97.6964 12.68 98.7897 12.68C99.883 12.68 100.87 12.9133 101.75 13.38C102.63 13.8467 103.323 14.52 103.83 15.4C104.336 16.2667 104.59 17.2733 104.59 18.42C104.59 19.5667 104.33 20.58 103.81 21.46C103.303 22.3267 102.603 22.9933 101.71 23.46C100.83 23.9267 99.843 24.16 98.7497 24.16ZM98.7497 21.2C99.403 21.2 99.9564 20.96 100.41 20.48C100.876 20 101.11 19.3133 101.11 18.42C101.11 17.5267 100.883 16.84 100.43 16.36C99.9897 15.88 99.443 15.64 98.7897 15.64C98.123 15.64 97.5697 15.88 97.1297 16.36C96.6897 16.8267 96.4697 17.5133 96.4697 18.42C96.4697 19.3133 96.683 20 97.1097 20.48C97.5497 20.96 98.0964 21.2 98.7497 21.2ZM113.204 12.72C114.511 12.72 115.551 13.1467 116.324 14C117.111 14.84 117.504 16 117.504 17.48V24H114.104V17.94C114.104 17.1933 113.911 16.6133 113.524 16.2C113.137 15.7867 112.617 15.58 111.964 15.58C111.311 15.58 110.791 15.7867 110.404 16.2C110.017 16.6133 109.824 17.1933 109.824 17.94V24H106.404V12.84H109.824V14.32C110.171 13.8267 110.637 13.44 111.224 13.16C111.811 12.8667 112.471 12.72 113.204 12.72ZM127.539 14.42C127.859 13.9 128.319 13.48 128.919 13.16C129.519 12.84 130.206 12.68 130.979 12.68C131.899 12.68 132.732 12.9133 133.479 13.38C134.226 13.8467 134.812 14.5133 135.239 15.38C135.679 16.2467 135.899 17.2533 135.899 18.4C135.899 19.5467 135.679 20.56 135.239 21.44C134.812 22.3067 134.226 22.98 133.479 23.46C132.732 23.9267 131.899 24.16 130.979 24.16C130.192 24.16 129.506 24.0067 128.919 23.7C128.332 23.38 127.872 22.96 127.539 22.44V24H124.119V9.2H127.539V14.42ZM132.419 18.4C132.419 17.5467 132.179 16.88 131.699 16.4C131.232 15.9067 130.652 15.66 129.959 15.66C129.279 15.66 128.699 15.9067 128.219 16.4C127.752 16.8933 127.519 17.5667 127.519 18.42C127.519 19.2733 127.752 19.9467 128.219 20.44C128.699 20.9333 129.279 21.18 129.959 21.18C130.639 21.18 131.219 20.9333 131.699 20.44C132.179 19.9333 132.419 19.2533 132.419 18.4ZM149.093 12.84L142.093 29.3H138.413L140.973 23.62L136.433 12.84H140.253L142.833 19.82L145.393 12.84H149.093Z" fill="#F5F5F5"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_5_6" transform="translate(0 -0.0334961) scale(0.000777001 0.00377029)"/>
                </pattern>
                <image id="image0_5_6" width="1287" height="283" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
            </div>
            
              <div style="display: flex; justify-content: center; align-items: center; height: calc(100% - 50px);">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                  <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                  </circle>
                  </svg>
              </div>
        </div>`;
  }
  const loadingScreener = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="18px" height="18px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
      </svg>`;

  // Generate Similar Products
  let sortBy = "";
  let page = 1;
  let perPage = 10;
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
      `https://jo8fa67x1dqtrhm9p-1.a1.typesense.net/collections/products/documents/search?query_by=title&pre_segmented_query=true&exhaustive_search=true&q=${productName}&sort_by=${sortBy}&page=${page}&per_page=${perPage}`,
      requestOptions
    );
    const result = await response.json();
    const posts = result.hits.map((hit) => hit.document);
    const totalProductCount = result.found;
    let pagination = result.page;
    let similarProducts = "";
    posts.forEach((post) => {
      similarProducts += `<div style="margin-bottom: 0.8rem;
      margin-right: 0.3rem; background: #ffffff; border-radius: 3px; ${
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
                            <select id="sortBy" style="border: none; background: none; outline: none; color: #ffffff; ${
                              styles[siteName].selectStyle
                            }">
                              <option style="color: #000; value="" ${
                                !sortBy ? "selected" : ""
                              } >Default</option>
                              <option style="color: #000; value="price:asc" ${
                                sortBy === "price:asc" ? "selected" : ""
                              } >Low to High</option>
                              <option style="color: #000; value="price:desc" ${
                                sortBy === "price:desc" ? "selected" : ""
                              } >High to Low</option>
                            </select>
                        </div>
                        <div style="${styles[siteName].similarProductDivStyle}">
                            ${similarProducts}
                            <p style="text-align: center;
                          ">${
                            totalProductCount == 0 ? "No product found!" : ""
                          }                             </p>
                        </div>
                          <div style="display: flex; justify-content: space-between; align-items: center; ${
                            styles[siteName].buttonContainerStyle
                          }">
                                <button id="previous" style="background: none; color: #ffffff; font-weight: 900; padding: 0; border: none; cursor: pointer; ${
                                  styles[siteName].previousButton
                                }">
                                Previous
                              </button>
                              <p style="color: #ffffff; ${
                                styles[siteName].resultButtonTitle
                              }">Result: ${perPage * (pagination - 1) + 1} - ${
      perPage * pagination
    }</p>
                              <button id="next" style="border: none; color: #ffffff; padding: 0; font-weight: 900; background: none; cursor: pointer; ${
                                styles[siteName].nextButton
                              }">
                                  Next
                              </button>
                          </div>
                    </div>`;

    createDev.innerHTML = innerHtml;

    document
      .querySelector("#next")
      .addEventListener("click", fetchNextProducts);
    document
      .querySelector("#previous")
      .addEventListener("click", fetchPreviousProducts);
    document.querySelector("#sortBy").addEventListener("change", sortByPrice);

    async function sortByPrice(e) {
      const options = {
        "High to Low": "price:desc",
        "Low to High": "price:asc",
        Default: "",
      };
      sortBy = options[e.target.value];
      generateSimilarProducts(siteName, productName, innerHtml, createDev);
    }
    async function fetchNextProducts(e) {
      if (totalProductCount <= perPage * pagination) return;
      page++;
      generateSimilarProducts(siteName, productName, innerHtml, createDev);
      document.querySelector("#next").innerHTML = loadingScreener;
      e.preventDefault();
    }
    async function fetchPreviousProducts(e) {
      if (pagination === 1) return;
      page--;
      generateSimilarProducts(siteName, productName, innerHtml, createDev);
      document.querySelector("#previous").innerHTML = loadingScreener;
      e.preventDefault();
    }
  }

  if (location.href.includes("daraz.com.bd/products/")) {
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
    createDevDaraz.innerHTML = loadingInnerHtml("daraz");
    document.querySelector("#block-zz51KblGtY").appendChild(createDevDaraz);
    const productName = document.querySelector(
      ".pdp-mod-product-badge-title"
    ).innerText;
    generateSimilarProducts(
      "daraz",
      productName,
      loadingInnerHtml("daraz"),
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
      "display: inline-block; width: 22%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; height: 65vh"
    );
    document
      .querySelector(".product-info-section .container .g-2")
      .appendChild(createDevRyans);
    createDevRyans.innerHTML = loadingInnerHtml("ryanscomputers");
    const productName = document.querySelector(".product_content h2").innerText;
    generateSimilarProducts(
      "ryanscomputers",
      productName,
      loadingInnerHtml("ryanscomputers"),
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
      .setAttribute("style", "width: 53%; flex: unset;");

    document.querySelector(
      ".product-details .product-images .thumbnail .main-img"
    ).style.maxWidth = "340px";
    const createDevStartech = document.createElement("div");
    createDevStartech.className = "compare-product-info";
    createDevStartech.innerHTML = loadingInnerHtml("startech");
    createDevStartech.setAttribute(
      "style",
      "display: inline-block; width: 30%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; height: 66vh;"
    );
    document
      .querySelector(".product-details-summary > .container")
      .lastElementChild.appendChild(createDevStartech);
    const productName = document.querySelector(".product-name").innerText;
    generateSimilarProducts(
      "startech",
      productName,
      loadingInnerHtml("startech"),
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
    createDevPickaboo.innerHTML = loadingInnerHtml("pickaboo");
    document.querySelector(".columns ").appendChild(createDevPickaboo);
    const productName = document.querySelector(".base").innerText;
    generateSimilarProducts(
      "pickaboo",
      productName,
      loadingInnerHtml("pickaboo"),
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
    createDevOthoba.innerHTML = loadingInnerHtml("othoba");
    document
      .querySelector(".product-essential  .col-md-eight > .row ")
      .appendChild(createDevOthoba);
    const productName = document.querySelector(".product-name  h1").innerText;
    generateSimilarProducts(
      "othoba",
      productName,
      loadingInnerHtml("othoba"),
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
    createPriyoshop.innerHTML = loadingInnerHtml("priyoshop");
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
      loadingInnerHtml("priyoshop"),
      createPriyoshop
    );
  } else if (location.href.includes("chaldal.com/")) {
    document.querySelector(".product-detail-block .left").style.width = "30%";
    document.querySelector(".product-detail-block .right").style.width = "42%";
    const createChaldal = document.createElement("div");
    createChaldal.className = "compare-product-info";
    createChaldal.innerHTML = loadingInnerHtml("chaldal");
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
    generateSimilarProducts(
      "chaldal",
      productName,
      loadingInnerHtml("chaldal"),
      createChaldal
    );
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
        createChaldal.innerHTML = loadingInnerHtml("chaldal");
        document
          .querySelector(".lightbox .productDetails")
          .appendChild(createChaldal);
        document
          .querySelector(".compare-product-info")
          .setAttribute(
            "style",
            "display: inline-block; width: 90%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; margin-left: 0.5rem;"
          );
        const productName =
          document.querySelector(".nameAndSubtext h1").innerText;
        generateSimilarProducts(
          "chaldal",
          productName,
          loadingInnerHtml("chaldal"),
          createChaldal
        );
        loopCounter++;
      } else {
        loopCounter = 0;
      }
    }
  } else if (location.href.includes("walcart.com/")) {
    document.querySelector(
      ".product-info-main-content .col-xl-5"
    ).style.maxWidth = "40%";
    const selectedWalcartDiv = document.querySelector(
      ".product-info-main-content > .row > .col-xl-3"
    );
    selectedWalcartDiv.innerHTML = loadingInnerHtml("walcart");
    const productName = document.querySelector(".page-title .base").innerText;
    document
      .querySelector(".product-info-main-content > .row > .col-xl-3")
      .setAttribute(
        "style",
        "display: inline-block; width: 27%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; margin-left: 0.5rem; height: 67vh"
      );

    generateSimilarProducts(
      "walcart",
      productName,
      loadingInnerHtml("walcart"),
      selectedWalcartDiv
    );
  } else if (location.href.includes("vision.com.bd/")) {
    document.querySelector(".ty-product-block__img-wrapper").style.maxWidth =
      "34%";

    document.querySelector(".ut2-pb__right").style.maxWidth = "36%";
    const createDevVision = document.createElement("div");

    createDevVision.className = "compare-product-info";

    createDevVision.innerHTML = loadingInnerHtml("vision");

    document.querySelector(".ut2-pb__wrapper").appendChild(createDevVision);

    createDevVision.setAttribute(
      "style",
      "display: inline-block; width: 30%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; height: 67vh"
    );
    const productName = document.querySelector(".ut2-pb__title").innerText;
    generateSimilarProducts(
      "vision",
      productName,
      loadingInnerHtml("vision"),
      createDevVision
    );
  } else if (location.href.includes("bdshop.com/")) {
    document.querySelector(".main-container").style.maxWidth = "1400px";
    document.querySelector(".col-xl-4").style.maxWidth = "25%";
    document.querySelector(".col-xl-5").style.maxWidth = "25%";
    document.querySelector(".col-xl-3").style.maxWidth = "auto";

    const createDevBdShop = document.createElement("div");
    createDevBdShop.className = "compare-product-info";
    createDevBdShop.innerHTML = loadingInnerHtml("vision");
    document
      .querySelector(".product-info-main-content > .row")
      .appendChild(createDevBdShop);
    createDevBdShop.setAttribute(
      "style",
      "display: inline-block; width: 25%; background: linear-gradient(201.76deg, #9E00FF -1.89%, #FE4242 54.02%, rgba(158, 0, 255, 0.9) 108.78%); color: #ffffff; padding: 0 12px; height: 67vh"
    );
    const productName = document.querySelector(".page-title").innerText;
    generateSimilarProducts(
      "vision",
      productName,
      loadingInnerHtml("vision"),
      createDevBdShop
    );
  }
};
