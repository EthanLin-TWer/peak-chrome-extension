export class Timer {
   constructor() {
      this.landTime = new Date()
   }
   
   getLandTime() {
      return this.landTime
   }
   
   getKey() {
      return this.landTime.toLocaleDateString()
   }
}