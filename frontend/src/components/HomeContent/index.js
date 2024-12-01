import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading/Loading";
import axios from "axios";
import { useRouter } from "next/router";

const HomeContent = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/game/${gameId}`
      );
      if (response.status === 204) {
        alert("Jogo deletado com sucesso!");
        setGames(games.filter((game) => game._id !== gameId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (game) => {
    router.push({
      pathname: "/edit",
      query: { id: game._id },
    });
  };

  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>

          {loading ? (
            <Loading loading={loading} />
          ) : (
            <div className={styles.games} id={styles.games}>
              {games.map((game) => (
                <ul className={styles.listGames} key={game._id}>
                  <div className={styles.gameImg}>
                    <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                  </div>
                  <div className={styles.gameInfo}>
                    <h3>Título: {game.title}</h3>
                    <li>
                      Plataforma:{" "}
                      {game.description && game.description[0]?.platform}
                    </li>
                    <li>Ano: {game.year}</li>
                    <li>Preço: {game.price}</li>

                    <button
                      className={styles.deleteButton}
                      onClick={() => {
                        const confirmed = window.confirm(
                          "Deseja mesmo excluir o jogo?"
                        );
                        if (confirmed) {
                          deleteGame(game._id);
                        }
                      }}
                    >
                      Deletar
                    </button>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(game)}
                    >
                      Editar
                    </button>
                  </div>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeContent;
