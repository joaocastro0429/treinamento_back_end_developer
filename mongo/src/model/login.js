const mongoose = require('mongoose')

const userShema=new mongoose.Schema({
    name:{
        type:String, required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }
})

const usuario= mongoose.model('login',userShema)

module.exports=usuario;

