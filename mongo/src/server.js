const express = require("express");
const route = require("./routes/route");
const connectToMongoDB = require('./database/db');

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

// Iniciar o servidor
app.listen(3333, () => console.log("Servidor rodando na porta 3333"));


