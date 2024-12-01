import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title && platform && year && price !== "") {
      const game = {
        title,
        year: parseInt(year, 10),
        price: parseFloat(price),
        description: [
          {
            platform, 
          },
        ],
      };

      try {
        const response = await axios.post("http://localhost:4000/game", game);
        if (response.status === 201) {
          router.push("/home");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Por favor, preencha todos campos.");
    }
  };
  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" id="createBtn" className="btnPrimary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CreateContent;
