var b = 0
function chuyenSo(x) {

    if (x < 10) {
        return "0" + x
    } else {
        return x
    }
}


function clickmouse() {
    var data = new Date();
    document.getElementById('dongho').innerHTML = chuyenSo(data.getHours()) + ":" + chuyenSo(data.getMinutes()) + ":" + chuyenSo(data.getSeconds())

}
setInterval(clickmouse, 1000)

