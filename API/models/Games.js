import mongoose from "mongoose";

// Define o esquema de descrição
const descriptionSchema = new mongoose.Schema({
  genre: String,  // Gênero do jogo
  platform: String, // Plataforma do jogo
  rating: String, // Avaliação do jogo
});

// Define o esquema do jogo
const gameSchema = new mongoose.Schema({
  title: String, // Título do jogo
  year: Number, // Ano de lançamento do jogo
  price: Number, // Preço do jogo
  description: [descriptionSchema], // Documento aninhado com descrição do jogo
});

// Cria o modelo de jogo baseado no esquema
const Game = mongoose.model("Game", gameSchema);

export default Game; // Exporta o modelo de jogo para uso em outras partes da aplicação
