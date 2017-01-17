"use strict";

console.log('content script is working')

chrome.storage.local.get(null, (data) => {
   "use strict";
   chrome.storage.local.clear()
   console.log('storage read')
   console.log(data)
})
let activeTabUrl = window.location.href
let landTime = new Date()

if (activeTabUrl.includes('https://mail.google.com/mail/u/') ||
   activeTabUrl.includes('https://github.com/linesh-simplicity') ||
   activeTabUrl.includes('https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues')) {
   console.log('Welcome to ' + activeTabUrl)
}

window.onbeforeunload = () => {
   "use strict";
   let leaveTime = new Date()
   let data = {
      landTime, leaveTime, activeTabUrl,
      duration: leaveTime - landTime
   }
   let tem = {}
   tem[today(landTime)] = data
   chrome.storage.local.set(tem , () => {
      console.log(tem)
   })
}

console.log(activeTabUrl)
console.log('land time: ' + landTime)

function today(time) {
   return time.toLocaleDateString()
}