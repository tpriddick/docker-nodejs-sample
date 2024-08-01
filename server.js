const http = require('http');

function serverFunc(req, res) {
    console.log(req) ;
    res.write('Target Acquired') ; 
    res.end() ; 
}

serverObj = http.createServer(serverFunc) ;

serverObj.listen(8080) ;