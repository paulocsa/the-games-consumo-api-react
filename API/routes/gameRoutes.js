// Importa o módulo 'express' para criar a rota
import express from 'express';

const gameRoutes = express.Router(); // Cria um roteador para gerenciar as rotas de jogos
import gameController from '../controllers/gameController.js';

// Rotas - Endpoints

// Endpoint para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint para cadastrar um novo jogo
gameRoutes.post("/game", gameController.createGame);

// Endpoint para deletar um jogo específico
gameRoutes.delete("/game/:id", gameController.deleteGame);

// Endpoint para atualizar as informações de um jogo específico
gameRoutes.put("/game/:id", gameController.UpdateGame);

// Endpoint para listar um único jogo pelo ID
gameRoutes.get("/game/:id", gameController.getOneGame);

export default gameRoutes; // Exporta as rotas para uso em outras partes da aplicação
