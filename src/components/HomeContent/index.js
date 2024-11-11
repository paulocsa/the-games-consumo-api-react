import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "@/components/Loading/Loading";

const HomeContent = () => {
  return (
    <div className={styles.homeContent}>
      <div className={styles.listGamesCard}>
        <div className={styles.title}>
          <h2>Lista de jogos</h2>
        </div>

        {/* inserir o component loading */}
        <Loading />
        <div className={styles.games} id="games">
          {/* Aqui você pode inserir a lógica para exibir os jogos */}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
