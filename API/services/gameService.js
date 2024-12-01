import Game from "../models/Games.js";

class gameService {
  // Método para buscar todos os jogos usando padrão Async/await
  async getAll() {
    try {
      const games = await Game.find(); // Busca todos os jogos no banco de dados
      return games; // Retorna a lista de jogos encontrados
    } catch (error) {
      console.log(error); // Loga o erro no console, se houver
    }
  }

  // Método para criar um novo jogo no banco de dados
  async Create(title, year, price, description) {
    try {
      const newGame = new Game({
        title, // Título do jogo
        year, // Ano de lançamento do jogo
        price, // Preço do jogo
        description, // Descrição do jogo
      });
      await newGame.save(); // Salva o novo jogo no banco de dados
    } catch (error) {
      console.log(error); // Loga o erro no console, se houver
    }
  }

  // Método para deletar um jogo do banco de dados por ID
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id); // Deleta o jogo com o ID especificado
      console.log(`Game com id: ${id} foi deletado com sucesso!`); // Loga a confirmação de deleção
    } catch (error) {
      console.log(error); // Loga o erro no console, se houver
    }
  }

  // Método para atualizar as informações de um jogo existente
  async Update(id, title, year, price, description) {
    try {
      await Game.findByIdAndUpdate(id, {
        title, // Título do jogo
        year, // Ano de lançamento do jogo
        price, // Preço do jogo
        description,
      });
      console.log(`Dados do game com id: ${id} alterado com sucesso.`); // Loga a confirmação da atualização
    } catch (error) {
      console.log(error); // Loga o erro no console, se houver
    }
  }

  // Método para buscar um único jogo pelo ID
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id }); // Busca um jogo com o ID especificado
      return game; // Retorna o jogo encontrado
    } catch (error) {
      console.log(error); // Loga o erro no console, se houver
    }
  }
}

export default new gameService();
