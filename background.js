chrome.runtime.onInstalled.addListener(() => {
  // Context menu for selected text
  chrome.contextMenus.create({
    id: "generateQRText",
    title: "Share this text as QR code",
    contexts: ["selection"]
  });

  // Context menu for links
  chrome.contextMenus.create({
    id: "generateQRLink",
    title: "Share this link as QR code",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "generateQRText" && info.selectionText) {
    const popupUrl = chrome.runtime.getURL(`popup.html?text=${encodeURIComponent(info.selectionText)}`);

    chrome.windows.create({
      url: popupUrl,
      type: "popup",
      width: 300,
      height: 300
    });
  } else if (info.menuItemId === "generateQRLink" && info.linkUrl) {
    const popupUrl = chrome.runtime.getURL(`popup.html?text=${encodeURIComponent(info.linkUrl)}`);

    chrome.windows.create({
      url: popupUrl,
      type: "popup",
      width: 300,
      height: 300
    });
  }
});
