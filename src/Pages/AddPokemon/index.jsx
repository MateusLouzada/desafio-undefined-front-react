import { useState } from "react";
import api from "../../services/pokemonApi";
import { ContainerAddPokemon } from "./style";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPokemon() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    if (!name || !type || !description) {
      toast("Preencha todos os campos", {
        type: "warning",
        theme: "dark",
      });
      throw new Error();
    }
    api
      .post("/api/pokemon", {
        name: name,
        description: description,
        typePokemon: type,
      })
      .then((res) => {
        console.log(res);
        toast("Pokemon Adicionado", {
          type: "success",
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err);
        toast("Aconteceu um problema", {
          type: "error",
          theme: "dark",
        });
      });
    setTimeout(() => history.push("/"), 2000);
  };

  return (
    <ContainerAddPokemon>
      <ToastContainer />
      <div>
        <p>Nome</p>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <p>Tipo do pokemon</p>
        <input
          onChange={(e) => {
            setType(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <p>Descrição</p>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text-area"
        />
      </div>
      <button onClick={handleSubmit}>Adicionar</button>
    </ContainerAddPokemon>
  );
}

export default AddPokemon;
