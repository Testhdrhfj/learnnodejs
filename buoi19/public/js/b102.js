var b = 0
function chuyenSo(x) {

    if (x < 10) {
        return "0" + x
    } else {
        return x
    }
}


function clickmouse() {
    var data = new Date()
    document.getElementById('dongho').innerHTML = chuyenSo(data.getHours()) + ":" + chuyenSo(data.getMinutes()) + ":" + chuyenSo(data.getSeconds())

}

function run(x, y, z) {
    document.getElementById('bamgio').innerHTML = x + ":" + y + ":" + z
}

function chuyenTime(t) {

    var x = Math.floor(t / 3600)
    var y = Math.floor((t % 3600) / 60)
    var z = Math.floor(t % 60)
    return { h: x, m: y, s: z }
}
function runTimeclock() {
    var o = chuyenTime(b)
    b += 1
    run(chuyenSo(o.h), chuyenSo(o.m), chuyenSo(o.s))
}
var clickBtn = true
var timerX;
function startTime() {
    if (clickBtn) {
        timerX = setInterval(runTimeclock, 100)
        clickBtn = false
        document.getElementById('BtnStart').innerHTML = "Dừng"
        document.getElementById('BtnStart').className = "btnstop"
        document.getElementById('BtnDelete').hidden = true
    } else {
        clearInterval(timerX)
        clickBtn = true
        document.getElementById('BtnStart').innerHTML = "Tiếp tục"
        document.getElementById('BtnStart').className = "btncontinue"
        document.getElementById('BtnDelete').hidden = false

    }
}
function BtnClear() {
    document.getElementById('BtnStart').innerHTML = "Bắt đầu"
    document.getElementById('BtnStart').className = "btnst"
    document.getElementById('BtnDelete').hidden = true

    b = 0
    runTimeclock()
}
setInterval(clickmouse, 1000)


