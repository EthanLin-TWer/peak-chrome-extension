import { Timer } from './content/date'
"use strict";

var entryOfToday // initialized after getting data from local storage
let currentUrl = window.location.href
let time = new Timer();
let landTime = time.getLandTime()

chrome.storage.local.get(time.getKey(), initEntryOfToday)

function initEntryOfToday(entry) {
   "use strict";
   console.log('entry get from chrome.storage.local:')
   console.log(entry)
   entryOfToday = haveItems(entry) ? entry[time.getKey()] : newEntry()
   console.log('entry of today after initialization:')
   console.log(entryOfToday)
}

function haveItems(entry) {
   return Object.keys(entry).length > 0
}

if (currentUrl.includes('https://mail.google.com/mail/u/') ||
   currentUrl.includes('https://github.com/linesh-simplicity') ||
   currentUrl.includes('https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues')) {
   console.log('Welcome to ' + currentUrl)
}

window.onbeforeunload = () => {
   "use strict";
   let leaveTime = new Date()
   let visit = {
      landTime: landTime.toISOString(),
      leaveTime: leaveTime.toISOString(),
      duration: leaveTime - landTime
   }

   console.log('key: ' + time.getKey())
   console.log('getting cached entry of today: ')
   console.log(entryOfToday)
   
   let found = entryOfToday.find(entry => entry.currentUrl === currentUrl)
   if (found) {
      found.visits.push(visit)
      found.totalVisitCounts = found.visits.length

      console.log('entry of today exists already, printing...')
      console.log(found)
   } else {
      entryOfToday.push({
         currentUrl,
         visits: [ visit ],
         totalVisitCounts: 1
      })

      console.log('entry of today not exists, printing...')
      console.log(entryOfToday)
   }

   let obj = {}
   obj[time.getKey()] = entryOfToday
   chrome.storage.local.set(obj, () => {
      console.log('local storage set:')
      console.log(entryOfToday)
   })
}

function newEntry() {
   return []
}
