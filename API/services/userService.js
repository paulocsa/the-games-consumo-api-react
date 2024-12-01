// Importa o modelo 'User' do arquivo 'Users.js' na pasta 'models'
import User from "../models/Users.js";

// Define a classe 'userService' para gerenciar operações com usuários
class userService {
  // Método assíncrono para criar um novo usuário com 'name', 'email' e 'password'
  async Create(name, email, password) {
    try {
      // Cria uma nova instância do modelo 'User' com os dados fornecidos
      const newUser = new User({ name, email, password });

      // Salva o novo usuário no banco de dados
      await newUser.save();
    } catch (error) {
      // Exibe qualquer erro ocorrido durante a criação e salvamento do usuário
      console.log(error);
    }
  }

  // Método assíncrono para buscar um usuário pelo 'email'
  async getOne(email) {
    try {
      // Encontra um usuário no banco de dados com o email fornecido
      const user = await User.findOne({ email: email });
      return user;
    } catch (error) {
      // Exibe qualquer erro ocorrido durante a busca do usuário
      console.log(error);
    }
  }
}

// Exporta uma instância da classe 'userService' para uso em outros módulos
export default new userService();
