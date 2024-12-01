import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Busca todos os jogos no banco de dados
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll(); // Obtém todos os jogos do serviço
    res.status(200).json({ games: games }); // Retorna os jogos com status 200 (OK)
  } catch (error) {
    console.log(error); // Loga o erro no console
    res.status(500).json({ error: "Erro interno do servidor." }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Cadastra um novo jogo no banco de dados
const createGame = async (req, res) => {
  try {
    const { title, year, price, description } = req.body; // Desestrutura os dados recebidos na requisição
    await gameService.Create(title, year, price, description); // Cria o novo jogo no serviço
    res.sendStatus(201); // Retorna status 201 (Created) após a criação do jogo
  } catch (error) {
    console.log(error); // Loga o erro no console
    res.status(500).json({ error: "Erro interno do servidor." }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Deleta um jogo específico no banco de dados
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id; // Obtém o ID da requisição
      await gameService.Delete(id); // Deleta o jogo com o ID especificado
      res.sendStatus(204); // Retorna status 204 (No Content) após a exclusão bem-sucedida
    } else {
      res.sendStatus(400); // Retorna status 400 (Bad Request) se o ID for inválido
    }
  } catch (error) {
    console.log(error); // Loga o erro no console
    res.status(500).json({ error: "Erro interno do servidor!" }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Atualiza as informações de um jogo específico
const UpdateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id; // Obtém o ID da requisição
      const { title, year, price, description } = req.body; // Desestrutura os dados recebidos na requisição
      await gameService.Update(id, title, year, price, description); // Atualiza o jogo com o ID especificado
      res.sendStatus(200); // Retorna status 200 (OK) após a atualização bem-sucedida
    } else {
      res.sendStatus(400); // Retorna status 400 (Bad Request) se o ID for inválido
    }
  } catch (error) {
    console.log(error); // Loga o erro no console
    res.status(500).json({ error: "Erro interno do servidor!" }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Busca um único jogo pelo ID
const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id; // Obtém o ID da requisição
      const game = await gameService.getOne(id); // Obtém o jogo com o ID especificado

      if (!game) {
        res.sendStatus(404); // Retorna status 404 (Not Found) se o jogo não for encontrado
      } else {
        res.status(200).json({ game }); // Retorna o jogo com status 200 (OK)
      }
    } else {
      res.sendStatus(400); // Retorna status 400 (Bad Request) se o ID for inválido
    }
  } catch (error) {
    console.log(error); // Loga o erro no console
    res.status(500).json({ error: "Erro interno do servidor!" }); // Retorna erro com status 500 (Internal Server Error)
  }
};

export default { getAllGames, createGame, deleteGame, UpdateGame, getOneGame };
