function changeMoney(y) {

    var inp1 = document.getElementById('usd2vnd');
    var inp2 = document.getElementById("vnd2usd");
    var tigia = 24560;
    
    // console.log(inp1.value)
    if (y == 1) {
        inp2.value = parseInt(inp1.value) * tigia
    } else {
        inp1.value = parseInt(inp2.value) / tigia
    }
}