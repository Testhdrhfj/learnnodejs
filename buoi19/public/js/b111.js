function Tinhtoan(y){
    var inp1 = parseInt(document.getElementById('inpA').value);
    var inp2 = parseInt(document.getElementById('inpB').value);
    var kq = document.getElementById('kq');
    var ret;

    if (y == 1) {
        ret = inp1 + inp2;
    }
    if (y == 2) {
        ret = inp1 - inp2;

    }
    if (y == 3) {
        ret = inp1 * inp2;

    }
    if (y == 4) {
        ret = inp1 / inp2;

    }

    kq.innerHTML = ret;

}