const express = require("express");
const route = require("./routes/route");
const connectToMongoDB = require('./database/db');
const authService =require('./services/AuthService')
const app = express();
app.use(express.json());

// Conectar ao MongoDB
connectToMongoDB();

// Usar rotas
app.use(route);

// Rota principal
app.get("/", (req, res) => {
    return res.json({ message: "API com Mongo" });
});

app.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await authService.loginService(email)
        if(!user) return res.status(401).json({message:"Usuário ou senha inválidos"})
        if(password!=user.password) return res.status(401)
            .json({message:"Credenciais invaliddas"})
        return res.json(user)

    }catch(err){
        console.error(err)
        return res.status(500).json({message:"Erro interno"})
    }
    



})

// Iniciar o servidor
app.listen(3333, () => console.log("Servidor rodando na porta 3333"));


