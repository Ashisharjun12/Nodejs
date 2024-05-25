const express = require('express')
const app =  express()
const userRouter = require('./routes/user.js')
const {connection } = require('./config/connection.js')
const {reqRes} = require('./middlewares/index.js')

const port = 5000

connection('mongodb://localhost:27017/abc')


app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    return res.send("hello server")
})

app.use(reqRes('log.txt'))

//routes
app.use('/user' , userRouter)



app.listen(port , ()=>{
    console.log(`server is running at port : ${port}`)
})