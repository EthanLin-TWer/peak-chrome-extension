import { Timer } from './date'

export class Initializer {
   constructor() {
      this.timer = new Timer()
      this.currentUrl = window.location.href
      this.landTime = timer.getLandTime()
      this.entryOfToday = '' // to be initialized in initEntryOfToday()
      this.getEntryFromChromeStorage()
   }

   initialize() {
      return {
         currentUrl: this.currentUrl,
         landTime: this.landTime,
         entryOfToday: this.entryOfToday,
         timer: this.timer
      }
   }
   getEntryFromChromeStorage() {
      chrome.storage.local.get(time.getKey(), this.initEntryOfToday)
   }
   
   initEntryOfToday(entry) {
      "use strict";
      console.log('entry get from chrome.storage.local:')
      console.log(entry)
      this.entryOfToday = this.haveItems(entry) ? entry[this.timer.getKey()] : this.newEntry()
      console.log('entry of today after initialization:')
      console.log(this.entryOfToday)
   }
   
   haveItems(entry) {
      return Object.keys(entry).length > 0
   }
   
   newEntry() {
      return []
   }
}
