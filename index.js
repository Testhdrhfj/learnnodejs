function maxArr(arr) {
    var max = 0
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

var arr = [1, 65, 7, 8, 1, 123,6]
console.log(maxArr(arr))