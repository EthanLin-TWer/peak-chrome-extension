"use strict";

console.log('content script is working')

let entryOfToday // initialized after getting data from local storage
let activeTabUrl = window.location.href
let landTime = new Date()

chrome.storage.local.get(null, (data) => {
   "use strict";
   entryOfToday = data[today(landTime)] ? data[today(landTime)] : {}
   console.log(entryOfToday)
})

if (activeTabUrl.includes('https://mail.google.com/mail/u/') ||
   activeTabUrl.includes('https://github.com/linesh-simplicity') ||
   activeTabUrl.includes('https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues')) {
   console.log('Welcome to ' + activeTabUrl)
}

window.onbeforeunload = () => {
   "use strict";
   let leaveTime = new Date()
   let data = {
      activeTabUrl, landTime, leaveTime, 
      duration: leaveTime - landTime
   }
   entryOfToday[today(landTime)] = data
   chrome.storage.local.set(entryOfToday , () => {
      console.log(entryOfToday)
   })
}

function today(time) {
   return time.toLocaleDateString()
}