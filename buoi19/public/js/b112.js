function btnGiai() {
    var A = parseInt(document.getElementById("inpA").value);
    var B = parseInt(document.getElementById("inpB").value);
    var C = parseInt(document.getElementById("inpC").value);
    var kq = document.getElementById("kq");
    var kqall = "";
    if (A == 0) {
        if (B == 0) {
            if (C == 0) {
                kqall = 'PT vô số nghiệm';

            } else {
                kqall = 'PT vô nghiệm';
            }
        } else {
            // console.log(A, B, (-C / B));
            kqall = 'PT có 1 nghiệm x = ' + (-C / B);
        }
    } else {
        var delta = B * B - 4 * A * C;
        if (delta < 0) {
            kqall = 'PT vô nghiệm';
        }
        if (delta == 0) {
            kqall = "PT có 1 nghiệm kép :<br>x1 = x2 = " + (-B / 2 * A);
        }

        if (delta > 0) {
            var x1 = (-(B + Math.sqrt(delta)) / 2 * A);
            var x2 = (-(B - Math.sqrt(delta)) / 2 * A);
            kqall = "PT có 2 nghiệm: <br>x1 = " + x1 + "    <br>x2 = " + x2;
        }
    }
    // console.log(kqall);
    kq.innerHTML = kqall;
    return;
}

