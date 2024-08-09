const express= require("express")
const {getUsers,createUsers,listUsers,updateUsers,deleteUser} = require('../controllers/UserControllers')

const route=express.Router()


route.get("/users",getUsers)
route.get("/user/:id",listUsers)
route.post("/users",createUsers)
route.put("/users/:id",updateUsers)
route.delete("/users/:id",deleteUser)







module.exports=route




