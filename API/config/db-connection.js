// Importando o módulo mongoose para lidar com o banco de dados MongoDB
import mongoose from "mongoose";

// Função para estabelecer a conexão com o banco de dados MongoDB
const connect = () => {
  // Conectando ao MongoDB usando uma string de conexão, que inclui credenciais e detalhes do cluster
  mongoose.connect(
    `mongodb+srv://paulocsa:admin@cluster0.juxr5.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
};

// Obtendo a instância da conexão atual do mongoose
const connection = mongoose.connection;

// Evento que é acionado em caso de erro ao conectar ao banco de dados
connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB."); // Loga uma mensagem de erro no console
});

// Evento que é acionado quando a conexão com o banco de dados é bem-sucedida
connection.on("open", () => {
  console.log("Conectado ao mongoDB com sucesso!"); // Loga uma mensagem de sucesso no console
});

// Chamando a função para iniciar a conexão com o banco de dados
connect();

// Exportando o módulo mongoose para ser utilizado em outras partes da aplicação
export default mongoose;
