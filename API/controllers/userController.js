// Importa o serviço de usuário do arquivo 'userService.js'
import userService from "../services/userService.js";

// Importa o módulo jsonwebtoken para criar tokens JWT
import jwt from "jsonwebtoken";

const JWTSecret = "apithegamessecret";

// Função para criar um novo usuário
const createUser = async (req, res) => {
  try {
    // Extrai 'name', 'email' e 'password' do corpo da requisição
    const { name, email, password } = req.body;

    // Cria o novo usuário usando o serviço de usuário
    await userService.Create(name, email, password);

    // Retorna uma resposta de sucesso com status 201
    res.status(201).send("Usuário criado com sucesso!");
  } catch (error) {
    // Exibe o erro no console
    console.log(error);
    // Retorna um erro de servidor com status 500
    res.sendStatus(500);
  }
};

// Função para realizar o login de um usuário
const LoginUser = async (req, res) => {
  try {
    // Extrai 'email' e 'password' do corpo da requisição
    const { email, password } = req.body;

    // Verifica se o email foi fornecido
    if (email) {
      // Busca o usuário pelo email
      const user = await userService.getOne(email);

      // Verifica se o usuário foi encontrado
      if (user) {
        // Verifica se a senha está correta
        if (user.password == password) {
          // Gera um token JWT
          jwt.sign(
            { id: user._id, email: user.email }, // Dados incluídos no token
            JWTSecret, // Chave secreta usada para assinar o token
            { expiresIn: "48h" }, // Tempo de expiração do token
            (error, token) => {
              if (error) {
                // Se ocorrer um erro ao gerar o token, retorna erro com status 400
                res.status(400);
                res.json({ error: "Falha interna" });
              } else {
                // Se o token for gerado com sucesso, retorna o token com status 200
                res.status(200);
                res.json({ token: token });
              }
            }
          );
        } else {
          // Se a senha estiver incorreta, retorna erro com status 401
          res.status(401); // Não autorizado
          res.json({ error: "Credenciais inválidas" });
        }
      } else {
        // Se o usuário não for encontrado, retorna erro com status 404
        res.status(404); // Não encontrado
        res.json({ error: "Usuário não encontrado" });
      }
    } else {
      // Se o email não for fornecido, retorna erro com status 400
      res.status(400); // Requisição inválida
      res.json({ error: "Email não fornecido" });
    }
  } catch (error) {
    // Exibe o erro no console
    console.log(error);
    // Retorna um erro de servidor com status 500
    res.sendStatus(500);
  }
};

// Exporta as funções para uso em outros módulos
export default { createUser, LoginUser, JWTSecret };
