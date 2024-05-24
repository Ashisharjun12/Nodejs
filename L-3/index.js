const http = require("http")
const fs = require('fs')

const myserver = http.createServer((req,res)=>{

   const log = `${Date.now()}  ${req.url}: new req recieved\n`
    console.log('new req receive');
    fs.appendFile('log.txt' , log ,(err ,data)=>{

        if(err ) console.log(err)
            else {

                switch (req.url) {
                    case '/':
                        res.end('hello homepage')
                        break;
                
                    case '/about':
                        res.end('helloo from about')
                        break;
        
                        default :
                        res.end('404 not found')
        }
       
        }
        res.end('hello from server')
    })
   
})

myserver.listen(9000,()=>{
    console.log('server is running at : 9000')
})