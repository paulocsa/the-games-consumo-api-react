// Importa o módulo 'express' para criar o aplicativo web
import express from "express";
const app = express(); // Cria uma instância do aplicativo Express

import cors from "cors";
// Importa o módulo 'mongoose' configurado para conectar ao MongoDB
import mongoose from "./config/db-connection.js";
// Importa os modelos 'Game' e 'User' para uso nas rotas
import Game from "./models/Games.js";
import User from "./models/Users.js";

// Importa as rotas para jogos e usuários
import gameRoutes from "./routes/gameRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Configurações do Express
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Middleware para processar dados de formulários URL-encoded
app.use(express.json()); // Middleware para processar dados JSON
app.use("/", gameRoutes); // Usa as rotas de jogos na raiz da aplicação
app.use("/", userRoutes); // Usa as rotas de usuários na raiz da aplicação

// Endpoint de exemplo que retorna uma lista de jogos como JSON
app.get("/", (req, res) => {
  const games = [
    {
      title: "CS-GO",
      year: 2012,
      platform: "PC (Windows)",
      price: 20,
      description: {
        genre: "FPS Online",
        platform: "PC (Windows)",
        rating: "18+",
      },
    },
  ];
  res.json(games); // Responde com a lista de jogos
});

// Inicia o servidor na porta 4000 e exibe uma mensagem de sucesso ou erro
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
