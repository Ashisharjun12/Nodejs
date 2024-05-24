const express = require('express')

const app = express()


app.get('/' , (req,res)=>{
    return res.send('hello homepage')
})

app.get('/about' ,(req,res)=>{
    return res.send("hello from about page" + " hey" + req.query.myname + "your age is " + req.query.age)
})



app.listen(5000 ,()=>{
    console.log('server is running at : 5000')
})