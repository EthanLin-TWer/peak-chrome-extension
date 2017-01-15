console.log('background script is working')
// templates here, not used.
chrome.browserAction.onClicked.addListener(function(tab) {
   console.log('clicked')
   // Send a message to the active tab
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "currentURL": activeTab });
   });
});

