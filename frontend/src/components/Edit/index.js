import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./Edit.module.css";

const EditGame = ({ id }) => {
  const router = useRouter();
  const [game, setGame] = useState(null);
  const [formValues, setFormValues] = useState({
    id: "",
    title: "",
    platform: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    const fetchGame = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:4000/game/${id}`);
          console.log(response.data); 
          const selectedGame = response.data.game;
          setGame(selectedGame);

          setFormValues({
            id: selectedGame._id,
            title: selectedGame.title,
            platform: selectedGame.description && selectedGame.description.length > 0 ? selectedGame.description[0].platform : "",
            year: selectedGame.year,
            price: selectedGame.price,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchGame();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, title, platform, year, price } = formValues;

    const updatedGame = {
      title,
      description: [
        {
          platform, 
        },
      ],
      year,
      price,
    };

    try {
      const response = await axios.put(
        `http://localhost:4000/game/${id}`,
        updatedGame
      );
      if (response.status === 200) {
        alert("Jogo atualizado!");
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!game) {
    return <div>Carregando dados do jogo...</div>;
  }

  return (
    <div className={styles.editContent}>
      <h2>Editar jogo</h2>
      <form id="editForm" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={formValues.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Insira o novo título"
          className={styles.inputPrimary}
          value={formValues.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="platform"
          placeholder="Insira a nova plataforma do jogo"
          className={styles.inputPrimary}
          value={formValues.platform}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Insira o novo ano"
          className={styles.inputPrimary}
          value={formValues.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Insira o novo preço"
          className={styles.inputPrimary}
          value={formValues.price}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Alterar" className={styles.btnPrimary} />
      </form>
    </div>
  );
};

export default EditGame;
