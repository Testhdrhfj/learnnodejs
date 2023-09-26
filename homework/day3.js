
function inKytu(x, y) {
    d = ''
    for (var a = 0; a < y; a = a + 1) {
        d = d + x
    }
    console.log(d)
}
// inKytu('bc',2)

function chiaLayNguyen(n, m) {
    var result = 0
    for (var i = 0; i <= n; i = i + m) {
        result = n - i
    }
    if (result == 0) {
        result = (n / m)
    }
    else {
        result = (i - m) / m
    }
    return result
}


function inSoTien(x, y) {
    for (var a = x; a <= y; a = a + 1) {
        console.log(a)
    }
}
function inSoLui(x, y) {
    for (var a = x; a >= y; a = a - 1) {
        console.log(a)
    }
}

function inSoChiaHetTien(a, b, c) {
    for (var i = a; i <= b; i += 1) {
        console.log(c * i)
    }
}
function inSoChiaHetLui(a, b, c) {
    for (var i = a; i >= b; i -= 1) {
        console.log(c * i)
    }
}

// console.log(chiaLayNguyen(100, 3))
// inSoChiaHetTien(1, chiaLayNguyen(100, 3), 3)
// console.log(chiaLayNguyen(100, 7))
// inSoChiaHetLui(chiaLayNguyen(100, 7), 1, 7)

function tinhTong(a, b, c) {
    j = 0
    for (var i = a; i <= b; i = i + c) {
        j = j + i
    }
    console.log(j)
}

// tinhTong(0, 5*30, 5)
// inSoChiaHet(1, 33, 3, 1)
// inSoChiaHet(14, 1, 7, -1)
function tinhGiaiThua(b) {
    c = 1
    for (var i = 1; i <= b; i = i + 1) {
        c = c * i
    }
    console.log(c)
}
// tinhGiaiThua(0)
function fibonacci(a) {
    d = 1
    c = 1
    b = 0
    for (var i = 0; i < a; i = i + 1) {
        console.log(d)
        d = b + c
        b = c
        c = d
    }
}
// fibonacci(3)

function chiaLayDu(n, m) {
    var result = 0
    for (var i = 0; i <= n; i = i + m) {
        result = n - i
    }

    return result
}

function kiemTraSoNT(a) {
    if (a > 0) {
        if (a < 3) {
            console.log(a + ' Là số nguyên tố')
            return
            // return true
        } else {
            for (var j = 2; j < a; j += 1) {
                if (chiaLayDu(a, j) == 0) {
                    console.log(a + ' Không phải là số nguyên tố')
                    // return false
                }
            }
        }
    } else {
    }
    console.log(a + ' Là số nguyên tố')
    return
    // return true
}
kiemTraSoNT(5)