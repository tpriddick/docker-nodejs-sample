const http = require('http');

function serverFunc(req, res) {
    console.log(req)
	const hdr = {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'} ;
	const str = {data: wordleHelper(req['url'])} ;
	const jsn = JSON.stringify(str) ;
	res.writeHead(200, hdr);
	res.end(jsn) ;
}

serverObj = http.createServer(serverFunc) ;

serverObj.listen(8080) ;