var b = 0
function clickmouse() {
    if (b == 0) {
        document.getElementById('btn1').innerHTML = "click lan dau thay doi"
    } else {
        document.getElementById('btn1').innerHTML = "Click Me"
    }

    document.getElementById('demo').innerHTML = ++b
    console.log(b)

}