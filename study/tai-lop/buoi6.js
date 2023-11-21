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

// var arr = [0, 656, 7, 8, 1, 123, 6]
// console.log(maxArr(arr))


var arr1 = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
function inArr(arr) {
    var a = ""
    for (var i = 0; i < arr.length; i += 1) {
        a += arr[i]
    }
    return a
}
console.log(inArr(arr1))



