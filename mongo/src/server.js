const express = require("express")

const app=express()

app.use(express.json())

app.get("/",(request,response)=>{
    return response.json({messege:"api com mongo"})
})

app.listen(3333,()=>console.log("servidor rodando"))