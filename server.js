import http from 'http';

const PORT = process.env.PORT;
const server = http.createServer((req,res) =>{
    try{
        if (req.method === 'GET'){
        if (req.url === '/'){
     res.writeHead(200,{'Content-Type':'text/html'})
     res.end('<h1>Chris</h1>')

   } else if (req.url === '/About'){
    res.writeHead(200,{'Content-Type':'text/html'})
     res.end('<h1>About</h1>')

   }else {
    res.writeHead(401,{'Content-Type':'text/html'})
     res.end('<h1>Not found</h1>')

   }

    } else {
        throw new Error('Method not allowed')
    }
    
     }catch(error){
        res.writeHead(500,{'Content-Type':'text/plain'})
     res.end('Server error')


    }
   
     

});
server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});