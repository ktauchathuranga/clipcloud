chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "generateQR",
      title: "Share this text as QR code",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "generateQR" && info.selectionText) {
      // Get the URL for the popup.html page using chrome.runtime.getURL
      const popupUrl = chrome.runtime.getURL(`popup.html?text=${encodeURIComponent(info.selectionText)}`);
  
      chrome.windows.create({
        url: popupUrl,
        type: "popup",
        width: 300,
        height: 300
      });
    }
  });
  