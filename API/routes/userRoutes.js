// Importa o módulo 'express' para criar a rota
import express from "express";

// Cria um roteador para gerenciar as rotas relacionadas a usuários
const userRoutes = express.Router();

// Importa o controlador 'userController' para lidar com a lógica das rotas de usuários
import userController from "../controllers/userController.js";

// Define o endpoint POST para criar um novo usuário
// Quando uma requisição POST é feita para '/user', o método 'createUser' do 'userController' é chamado
userRoutes.post("/user", userController.createUser);

// Define o endpoint POST para autenticação do usuário
// Quando uma requisição POST é feita para '/auth', o método 'LoginUser' do 'userController' é chamado
userRoutes.post("/auth", userController.LoginUser);

// Exporta o roteador para ser usado em outros módulos
export default userRoutes;
