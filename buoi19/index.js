var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    //__dirname
    var fileName;
    if (q.pathname.split(".")[q.pathname.split(".").length - 1] == 'html') {
        fileName = '/views' + q.pathname
    }
    else {
        fileName = q.pathname
    }


    fs.readFile(__dirname + fileName, function (err, data) {
        if (err) {
            res.end('404');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

            res.end(data);
        }
    })
});

server.listen(3000);