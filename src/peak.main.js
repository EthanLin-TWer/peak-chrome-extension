console.log('content script is working')
chrome.runtime.onMessage.addListener(request => {
   "use strict";
   console.log('received message from browser action');
   console.log(request.currentURL);
})