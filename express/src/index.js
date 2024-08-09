const express = require("express")
const route =require("./routes/route")

const app=express()
app.use(express.json())
app.use(route)

app.get("/",(request,response)=>{
    return response.json({message:"primeira api "})
})

app.listen(3333,()=>console.log("servidor rodandando"))