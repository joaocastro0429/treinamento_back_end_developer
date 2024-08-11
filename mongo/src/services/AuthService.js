const usuario=require('../model/login')


const loginService=(email)=>usuario.findOne({email})



module.exports={loginService}