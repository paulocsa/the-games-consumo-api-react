// Importa o módulo mongoose para interagir com o banco de dados MongoDB
import mongoose from "mongoose";

// Define um esquema (schema) para o modelo de usuário, especificando os campos 'name', 'email' e 'password'
// Cada campo é definido como um tipo String
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Cria um modelo chamado 'User' baseado no esquema 'userSchema'
// O modelo permite a criação e manipulação de documentos na coleção 'users' do MongoDB
const User = mongoose.model("User", userSchema);

// Exporta o modelo 'User' para que ele possa ser utilizado em outras partes do projeto
export default User;
