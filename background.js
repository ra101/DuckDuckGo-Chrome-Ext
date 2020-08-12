function ddg() {
  console.log(chrome.tabs.url)
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    address = tabs[0].url.split('?q=')
    if (address.length == 2) {
      chrome.tabs.update({ url: "http://duckduckgo.com/?q=" + address[1].split('&')[0] });
    }
  })
}

chrome.browserAction.onClicked.addListener(ddg);
chrome.commands.onCommand.addListener(function (command) {
  if (command == "ddg") {
    ddg()
  }
});
