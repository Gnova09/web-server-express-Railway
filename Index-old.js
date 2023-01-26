const http = require('http');

http.createServer((req,res)=>{
    res.write('Is working!!!')
    res.end()

})
.listen(8080)
console.log('Listening Port: ',8080);