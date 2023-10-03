function maxArr(arr) {
    var max = 0
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i]
        } else {

        }
    }
    return max
}

function minArr(arr) {
    var min = maxArr(arr)
    for (var i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i]
        } else {

        }
    }
    return min
}

function chiaLayDu(n, m) {
    var result = 0
    for (var i = 0; i <= n; i = i + m) {
        result = n - i
    }

    return result
}

function bai_tap_19(a) {
    for (var i = 0; i < a.length; i += 1) {
        for (var j = i + 1; j < a.length; j += 1) {
            if (a[i] < a[j]) {
                temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}


function bai_tap_20(a) {
    for (var i = 0; i < a.length; i += 1) {
        for (var j = i + 1; j < a.length; j += 1) {
            if (a[i] > a[j]) {
                temp = a[i]
                a[i] = a[j]
                a[j] = temp
            } else {

            }
        }
    }
    return a
}

function bai_tap_21(a) {
    var arr = []
    for (var i = 0; i < a.length; i += 1) {
        if (chiaLayDu(a[i], 2) == 0) {
            arr.push(a[i])
        } else {

        }
    }
    return arr
}

function bai_tap_22(a) {
    var arr = []
    for (var i = 0; i < a.length; i += 1) {
        if (chiaLayDu(a[i], 2) != 0) {
            arr.push(a[i])
        } else {

        }
    }
    return arr
}

function bai_tap_23(a) {
    var char = []
    var pint = []
    var unde = []
    var obj = {
        'chuoi': char, "so": pint, "khongxacdinh": unde
    }
    for (var i = 0; i < a.length; i += 1) {
        if (typeof (a[i]) == "string") {
            char.push(a[i])
        } else {
            if (typeof (a[i]) == "number") {
                pint.push(a[i])
            } else {
                unde.push(a[i])
            }
        }
    }
    return obj
}
function bai_tap_24(x, y) {
    var m = 0
    var arr = []
    for (var i = 0; i < y; i += 1) {
        for (var j = 0; j < x; j += 1) {
            m += 1
            arr.push(m)
        }
        console.log(arr)
        arr = []
    }
    return
}
function bai_tap_25(n) {
    for (var i = 1; i <= 20; i += 1) {
        console.log(n + " x " + i + " = " + n * i)
    }
}
function bai_tap_27(str) {
    var a = 1
    for (var i = 0; i < str.length; i += 1) {
        if (str[i] == " ") {
            a += 1
        } else {

        }

    }
    if (str[str.length] != " ") {
        a -= 1
    }
    // console.log(a[str.length])

    console.log('so ky tu:' + str.length)
    console.log('so tu:' + a)
}
// bai_tap_27("1 minh ngoi buon ")
function bai_tap_28(str) {

    var temp = ''
    for (var i = str.length - 1; i >= 0; i -= 1) {
        temp += str[i]
    }
    return temp
}
function bai_tap_29(a, b) {
    var sum = 0
    for (var i = a; i <= b; i += 1) {
        sum += i * i
    }
    console.log(sum)
}

function bai_tap_30(n) {
    var sum = 0
    for (var i = 1; i < n; i += 1) {
        if (chiaLayDu(n, i) == 0) {
            sum += i
        }
    }
    if (sum == n) {
        return true
    } else {
        return false
    }
}
function bai_tap_31(n) {
    for (var i = 1; i <= n; i += 1) {
        if (bai_tap_30(i)) {
            console.log(i)
        }
    }
}
function bai_tap_32(a) {
    var sum = 0
    for (var i = 1; i <= a; i += 1) {
        sum += i * (i + 1)
    }
    console.log(sum)
}
// bai_tap_32(3)

function bai_tap_33(arr) {
    var tong = 0
    var tich = 0
    var avg = 0
    var obj = { "tong": tong, "tich": tich, "Trungbinh": avg }
    for (var i = 0; i < arr.length; i += 1) {
        tong += arr[i]
        tich = tich * arr[i]
    }
    avg = tong / (arr.length)
    return obj
}

console.log(bai_tap_33([1, 4, 5, 6, 7]))
// a = bai_tap_30(28)
// console.log(a)


// bai_tap_29(3, 7)

// var arr1 = [8, "6", 6, 5, 7, 9, "12", 100, 101]
// console.log(bai_tap_28('168364736482'))
// console.log(bai_tap_24(6,5))
// bai_tap_25(5)
// console.log(typeof ('5'))