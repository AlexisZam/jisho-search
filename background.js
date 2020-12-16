chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    contexts: ["selection"],
    id: "jisho-search",
    title: "Search Jisho for “%s”",
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "jisho-search")
    chrome.tabs.create({
      url: "https://jisho.org/search/" + info.selectionText,
    });
});
