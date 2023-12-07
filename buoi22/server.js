const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require("ejs");
const path = require('path')
var posts = [];
const port = 3000

// File

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get('/', function (req, res) {

    fs.readFile(__dirname + '/public/save-file/save-ghichu.txt', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var str = data.toString();
            var arr = str.split("\n");
            // console.log(arr);

            res.render('new', {
                data: arr
            });
            // var Post = {
            //     ghichu: data + '',
            // };
            // res.render('new', { data: Post });
        }
    });
});

app.post('/save-file', function (req, res) {
    var input_text = req.body['input-text'];
    fs.appendFile(__dirname + '/public/save-file/save-ghichu.txt', input_text + '\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})
app.get('/xoa-vitri', function (req, res) {
    // var pt = req.query.giatri;
    // var arr=[];
    var str = ''
    fs.readFile(__dirname + '/public/save-file/save-ghichu.txt', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            arr = data.toString().split('\n');
            arr.splice(req.query.giatri, 1);
            var str2 = arr.join("\n");

            fs.writeFile(__dirname + "/public/save-file/save-ghichu.txt", str2, function (e) {
                if (e) {
                    res.send("ERR: " + e);
                } else {
                    res.redirect("/");
                }
            })
        }
    });
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})