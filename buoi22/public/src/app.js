function checkkey(event) {
    var key_e = event.key;
    var luutru = document.getElementById('luutru');
    var ghichu = document.getElementById('ghichu');

    if (key_e == 'Enter') {
        // console.log(luutru.value);
        ghichu.innerHTML += '<li>' + luutru.value;
    }

}