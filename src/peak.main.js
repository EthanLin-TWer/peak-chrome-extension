import what from './what'
"use strict";

console.log(what())
var entryOfToday // initialized after getting data from local storage
let activeTabUrl = window.location.href
let landTime = new Date()

chrome.storage.local.get(today(landTime), (entry) => {
   "use strict";
   console.log('entry get from chrome.storage.local:')
   console.log(entry)
   entryOfToday = haveItems(entry) ? entry[today(landTime)] : newEntry()
   console.log('entry of today after initialization:')
   console.log(entryOfToday)
})

function haveItems(entry) {
   return Object.keys(entry).length > 0
}

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
   console.log('getting cached entry of today: ')
   console.log(entryOfToday)
   
   let found = entryOfToday.find(entry => entry.activeTabUrl === activeTabUrl)
   if (found) {
      found.visits.push(visit)
      found.totalVisitCounts = found.visits.length

      console.log('entry of today exists already, printing...')
      console.log(found)
   } else {
      entryOfToday.push({
         activeTabUrl,
         visits: [ visit ],
         totalVisitCounts: 1
      })

      console.log('entry of today not exists, printing...')
      console.log(entryOfToday)
   }

   let obj = {}
   obj[today(landTime)] = entryOfToday
   chrome.storage.local.set(obj, () => {
      console.log('local storage set:')
      console.log(entryOfToday)
   })
}

function newEntry() {
   return []
}

function today(time) {
   return time.toLocaleDateString()
}
