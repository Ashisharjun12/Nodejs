const express = require('express')
const app = express()
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const mongoose = require('mongoose')



const port = 4001

//connect mongodb
mongoose.connect('mongodb://localhost:27017/nodejs').then(()=>{
    console.log("mongodb connected successfully!!")
}).catch((err)=> console.log('Mongodb error : ' ,err))

//middlewares
app.use(express.urlencoded({extended:true}))

app.use((req,res ,next)=>{
    console.log('hello middleware 1')
   req.name= "ashish"
    next()
})

app.use((req,res,next)=>{
    console.log('hello middleware 2' ,  req.name)
   
    // res.json({msg:"middleware 2 "})
    next()
})



//schema
const userSchema = mongoose.Schema({
    first_name : {
        type:String,
        required:true
    },
    last_name :{
        type: String
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    job_title:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const usermodal = mongoose.model('user',userSchema)


//Routes
app.get('/',(req,res)=>{
    
    return res.send('hello')
})

//rest api
app.get('/api/users' ,async(req,res)=>{
    const allusers= await usermodal.find({})
    return res.json(allusers)

})


app.get('/users' , async(req,res)=>{
    const allusers= await usermodal.find({})
    const html = `
    <ul>
   ${allusers.map((user)=> `<li>${user.first_name} + ${user.email}</li>`).join("")}
    </ul>`

    res.send(html)
})


app.get('/api/users/:id' ,async(req,res)=>{
    const id = req.params.id;
    const user = await usermodal.findById(id)
    return res.json(user)
})



app.post('/api/users' ,async (req,res)=>{
    //todo :create users

    const {first_name ,last_name ,gender ,email ,job_title} = req.body
    if( !first_name || !last_name || !gender || !email || !job_title ){

        return res.status(400).json({msg : "please fill the details"})

    }
   
   const result = await usermodal.create({
        first_name ,
        last_name,
        gender,
        email,
        job_title
    })

     return res.status(201).json({msg: " user created succesfully!!" , id :result._id})

})


app.patch('/api/users/:id' , async(req,res)=>{
    //edit by id users
    const id = req.params.id
    await users.findByIdAndUpdate(id , {first_name:"hello"})
    return res.json({status : "success"})
})


app.delete('/api/users/:id' , async(req,res)=>{
    //delete by id users
const id = req.params.id
   await users.findByIdAndDelete(id)
    return res.json({status : "pending"})
})











app.listen(port , ()=>{
    console.log(`server is running at : ${port}`)
})