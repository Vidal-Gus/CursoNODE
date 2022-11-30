const http = require("http")

const fs = require('fs')
const port = 3000

const server = http.createServer((req,res) => {
    fs.readFile('mensagem.html', function(err, data){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write(data)
        res.end()
    }) 
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})


