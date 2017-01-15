console.log('content script is working')

let activeTabUrl = window.location.href
let landTime = new Date().toString().match(/(\d{2}:\d{2}:\d{2})/)[1]

if (activeTabUrl.includes('https://mail.google.com/mail/u/') ||
   activeTabUrl.includes('https://github.com/linesh-simplicity')) {
   alert('Welcome to ' + activeTabUrl)
}

console.log(activeTabUrl)
console.log('land time: ' + landTime)