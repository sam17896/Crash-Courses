const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err,html) =>{
	if(err){
		throw err
	} else{
		const proxy = http.createServer( function(req, res) {
			 res.writeHead(200, {'Content-Type': 'text/html'});
			 res.end(html);
			});

		proxy.listen(port,hostname,() =>{
			console.log("Server started on port " + port );
		});
	}
});

