function add(x, y, cb) {
    
    d = cb(x) + " + " + cb(y) + " = "

    return d + (x + y)
}

function phepcong() {
    // return a
    console.log("ADD")
}

// c = add(9, 8, phepcong)
// console.log(c)



// console.log('st')

setInterval(phepcong,50)

