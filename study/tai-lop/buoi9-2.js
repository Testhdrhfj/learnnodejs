
// var events = require('events'); // Thu vien

// var eventEmit = new events.EventEmitter();

var i = 0
function insoTime() {
    if (i <= 99) {
        if (i % 2 == 0) {
            console.log("Số đã được nhân đôi    : " + 2 * i)
        }
        else {
            console.log("Số không được nhân đôi : " + i)
        }
        i += 1
        setTimeout(insoTime, 5)
    }
    else {
        // clearInterval(iX)
    }
}
insoTime()
// setTimeout(insoTime, 5)

// eventEmit.on('inso', insoTime)

// var iX = setInterval(function () {
//     eventEmit.emit('inso')
// }, 5);



