import http from 'http'

const PORT = 8000;
const server = http.createServer((req,res) =>{
     res.write('ChrisNode');
     res.end()

});
server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});