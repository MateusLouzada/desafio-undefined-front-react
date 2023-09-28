import { useState } from "react";
import api from "../../services/pokemonApi";
import { ContainerAddPokemon } from "./style";
import { useHistory } from "react-router-dom";

function AddPokemon() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    api
      .post("/api/pokemon", {
        name: name,
        description: description,
        typePokemon: type,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
     history.push("/")
  };

  return (
    <ContainerAddPokemon>
      <div>
        <p>Nome</p>
        <input onChange={(e) => {setName(e.target.value)}} type="text" />
      </div>
      <div>
        <p>Tipo do pokemon</p>
        <input onChange={(e) => {setType(e.target.value)}} type="text" />
      </div>
      <div>
        <p>Descrição</p>
        <textarea onChange={(e) => {setDescription(e.target.value)}} type="text-area" />
      </div>
      <button onClick={handleSubmit}>Adicionar</button>
    </ContainerAddPokemon>
  );
}

export default AddPokemon;
