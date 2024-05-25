const mongoose = require('mongoose')


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

module.exports = usermodal;