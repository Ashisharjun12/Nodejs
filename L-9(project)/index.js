const express = require('express')
const app = express()
const {connectdb} = require('./config/connection.js')
const urlRoutes = require('./routes/url.js')
const { shorturl } = require('./controllers/url.js')

const port = 5000

//database connection
connectdb('mongodb://localhost:27017/urlshorter')

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//routes
app.get('/',(req,res)=>{
    return res.send("hello server")
})


app.use('/url' , urlRoutes)


app.get('/:shortId' , shorturl)

app.listen(port , ()=>{
    console.log(`server is running at ${port}`)
})