function add(a, b) {
    return a + b
}
function max2so(x, y) {
    //tìm số lớn giữa x va y

    if (x > y) {
        return x;
    }
    else {
        return y;
    }

}
function max(x, y, z) {
    return max2so(x, max2so(y, z))
}

function min2so(x, y) {
    if (x < y) {
        return x;
    }
    else {
        return y;
    }

}

function min(x, y, z) {

    return min2so(x, min2so(y, z))
}
function kiemTraSo(x) {
    if (x > 100) {
        return `Số ${x} lớn hơn 100`
    }
    else if (x < 100) {
        return `Số ${x} bé hơn 100`
    }
    else {
        return `Số ${x} = 100`
    }
}

function avg2Num(x, y) {
    return (x + y) / 2
}

function avg3So(x, y, z) {
    return (x + y + z) / 3
}

function trungBinhMon(x, y, z) {
    var avg = avg3So(x, y, z)
    console.log(avg)

    if (avg > 9.0) {
        return "A"
    } else {
        if (avg > 7.0) {
            return "B"
        } else {
            if (avg >= 5.0) {
                return 'C'
            }
            else {
                return "F"
            }
        }
    }
}

function inSoChan(a) {

    for (var i = 1; i <= a; i++) {

        console.log(2 * i)
    }
}

function inmang() {
    for (var j = 1; j <= 100; j += 5) {
        var c = ''
        for (var i = 1; i <= 5; i += 1) {
            c += j + i + ' '
        }
        console.log(c)
    }

}


function inKytu(x, y) {
    d = ''
    for (var a = 0; a < y; a = a + 1) {
        d = d + x
        // console.log(x)
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

// kiemTraSoNT(997)
function inSoNT(y) {
    for (var k = 1; k <= y; k += 1) {
        if (kiemTraSoNT(k)) {
            console.log(k)
        }
    }
}

// inSoNT(1000)

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
    for (var i = 1; i < x; i += 1) {
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

// veTamgiac(2, 6)