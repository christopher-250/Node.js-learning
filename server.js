import http from 'http';

const PORT = process.env.PORT;
const server = http.createServer((req,res) =>{
    console.log(req.url);
    console.log(req.method);
    /*res.setHeader('Content-Type', 'text/html' );
    res.statusCode = 404;
     res.end('<h1>Christophe</h1>');*/
     res.writeHead(200,{'Content-Type':'text/html'})
     res.end('<h1>Chris</h1>')

});
server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});