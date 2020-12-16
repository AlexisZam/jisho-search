chrome.contextMenus.create({
  contexts: ["selection"],
  onclick: (info) => {
    chrome.tabs.create({
      url: "https://jisho.org/search/" + info.selectionText,
    });
  },
  title: "Search Jisho for “%s”",
});
