

var ramadanDate = new Date('Feb 28 , 2025')

var todaydate = new Date()


var differenceDate = ramadanDate.getTime() - todaydate.getTime()
var days = Math.floor(differenceDate / (1000  * 60 * 60 * 24 ))
var Month = Math.floor(differenceDate / (1000  * 60 * 60 * 24 * 30))
var Hours = Math.floor(differenceDate / (1000  * 60 * 60 ))


document.getElementById('monthcounter').innerHTML = `<span> ${Month} </span>`
document.getElementById('dayscounter').innerHTML = `<span> ${days} </span>`
document.getElementById('hourscounter').innerHTML = `<span> ${Hours} </span>`