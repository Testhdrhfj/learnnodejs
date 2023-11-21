function btnGiai() {
    var A = parseInt(document.getElementById("inpA").value);
    var B = parseInt(document.getElementById("inpB").value);
    var C = parseInt(document.getElementById("inpC").value);
    var kq = document.getElementById("kq");
    var delta = B * B - 4 * A * C;
    var kqall = "";

    if (delta < 0) {
        kqall = 'vo nghiem'
    }
    if (delta == 0) {
        kqall = "x1 = x2 = " + (-B / 2 * A)
    }

    if (delta > 0) {
        var x1 = (-(B + Math.sqrt(delta)) / 2 * A);
        var x2 = (-(B - Math.sqrt(delta)) / 2 * A);
        kqall = "x1 = " + x1 + " ; x2 = " + x2
    }

    kq.innerHTML = kqall;
    return;
}

