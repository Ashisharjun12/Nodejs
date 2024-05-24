

const fs = require('fs')

//sync
// fs.writeFileSync('./test',"hey there")

//async
fs.writeFile("./test" , 'hello world ' , (error)=>{

})


//readfile

const result = fs.readFileSync('./cont.txt','utf-8');//sync return somethsing
console.log(result)


//async read  return nothing and expect callback
fs.readFile('./cont.txt' ,'utf-8' ,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})


//data append
fs.appendFileSync('./app.txt' ,' hey appedn')


//delete file
fs.unlinkSync('./test')


//view stats
console.log(fs.statSync('./app.txt'))

//create folder
fs.mkdirSync('./docs/a/b',{recursive:true})

