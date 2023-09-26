
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
            return true
        } else {
            for (var j = 2; j < a; j += 1) {
                if (chiaLayDu(a, j) == 0) {
                    return false
                }
            }
        }
    } else {
    }
    return true
}
function inSoNT(y) {
    for (var k = 1; k <= y; k += 1) {
        if (kiemTraSoNT(k)) {
            console.log(k)
        }
    }
}

// inSoNT(100)
// console.log(kiemTraSoNT(11))
function timBoi(x, y) {
    var cout = 0
    for (var i = 1; cout < y; i += 1) {
        if (chiaLayDu(i, x) == 0) {
            console.log(i)
            cout += 1
        }
    }
}
// timBoi(95, 3)
function timBoiPhamVi(x, y, z) {
    for (var i = y; i <= z; i += 1) {
        if (chiaLayDu(i, x) == 0) {
            console.log(i)
        }
    }
}
// timBoiPhamVi(5, 30, 40)
function veTamGiac1(y) {
    var col = ''
    for (var i = 0; i < y; i += 1) {
        col += '*'
        console.log(col)
    }
}
// veTamGiac1(6)
function veTamGiac2(x) {
    for (var i = 1; i <= x; i += 1) {
        var col = ''
        for (var j = 0; j < x - i; j += 1) {
            col += ' '
        }
        for (var k = 0; k < 2 * i - 1; k += 1) {
            col += '*'
        }
        console.log(col)
    }
}

// veTamGiac2(3)

function veTamGiac3(x) {
    var col = ''
    for (var i = 0; i < x; i += 1) {
        var a = ''

        for (var j = 1; j < x - i; j += 1) {
            a += ' '
        }
        col += '*'
        d = a + col

        console.log(d)
    }
}

// veTamGiac3(3)

function veTamgiac(x, y) {
    if (x == 1) {
        veTamGiac1(y)
        return
    } else {
        if (x == 2) {
            veTamGiac2(y)
            return
        } else {
            if (x == 3) {
                veTamGiac3(y)
                return
            }
        }
    }
}


// veTamgiac(2, 3)