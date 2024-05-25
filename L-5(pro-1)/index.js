const express = require('express')
const app = express()
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const port = 4001


app.use(express.urlencoded({extended:true}))


//Routes
app.get('/',(req,res)=>{
    return res.send('hello')
})

//rest api
app.get('/api/users' ,(req,res)=>{
    return res.json(users)

})


app.get('/users' , (req,res)=>{
    const html = `
    <ul>
   ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>`

    res.send(html)
})


app.get('/api/users/:id' ,(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id == id);
    return res.json(user)
})



app.post('/api/users' ,(req,res)=>{
    //todo :create users

    const {first_name ,last_name ,gender ,email ,job_title} = req.body
    console.log(req.body)
    users.push({...req.body , id:users.length +1})

    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err ,data)=>{
        return res.json({status : "success" , id: users.length})
    })
   


})


app.patch('/api/users/:id' , (req,res)=>{
    //edit by id users
    return res.json({status : "pending"})
})


app.delete('/api/users/:id' , (req,res)=>{
    //delete by id users
    return res.json({status : "pending"})
})











app.listen(port , ()=>{
    console.log(`server is running at : ${port}`)
})