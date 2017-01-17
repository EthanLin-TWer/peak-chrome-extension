"use strict";

console.log('content script is working')

var entryOfToday // initialized after getting data from local storage
let activeTabUrl = window.location.href
let landTime = new Date()

chrome.storage.local.get(null, (data) => {
   "use strict";
   entryOfToday = data[today(landTime)] ? data[today(landTime)] : newEntry(landTime)
   console.log('entry of today:')
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
   let visit = {
      landTime: landTime.toISOString(),
      leaveTime: leaveTime.toISOString(),
      duration: leaveTime - landTime
   }  

   let key = today(landTime)
   console.log('key: ' + key)
   console.log(entryOfToday)
   console.log('entryoftoday: ' + entryOfToday)
   let found = entryOfToday.find(entry => entry.activeTabUrl === activeTabUrl)
   if (found) {
      found.visits.push(visit)
      found.totalVisitCounts = found.visits.length
      
      console.log('entry of today exists already, printing...')
      console.log(found)
   } else {
      entryOfToday.push({
         activeTabUrl,
         visits: [ ],
         totalVisitCounts: 1
      })
      entryOfToday[0].visits.push(visit)
      
      console.log('entry of today not exists, printing...')
      console.log(entryOfToday[0])
   }

   chrome.storage.local.set(entryOfToday, () => {
      console.log('local storage set:')
      console.log(entryOfToday)
   })
}

function newEntry(time) {
   let newEntry = {}
   let keyToday = today(time)

   newEntry[keyToday] = []
   return newEntry
}

function today(time) {
   return time.toLocaleDateString()
}