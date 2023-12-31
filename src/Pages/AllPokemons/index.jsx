import { useEffect, useState } from "react";
import api from "../../services/pokemonApi";
import { ButtonClose, CardPokemon, ContainerPokemons } from "./style";
import { Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#1a1a1a",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "30px",
  color: "whitesmoke",
  textAlign: "center",
};

function AllPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [namePokemon, setNamePokemon] = useState("");
  const [typePokemon, setTypePokemon] = useState("");
  const [descriptionPokemon, setDescriptionPokemon] = useState("");

  const handleOpen = (pokemon, e) => {
    setId(pokemon.id);
    setNamePokemon(pokemon.name);
    setTypePokemon(pokemon.typePokemon);
    setDescriptionPokemon(pokemon.description);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleName = (e) => setNamePokemon(e.target.value);
  const handleType = (e) => setTypePokemon(e.target.value);
  const handleDescription = (e) => setDescriptionPokemon(e.target.value);

  const getPokemons = async () => {
    await api
      .get("/api/pokemon")
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => console.log(err));
  };

  const changePokemon = async () => {
    await api
      .put(`/api/pokemon?id=${id}`, {
        name: namePokemon,
        description: descriptionPokemon,
        typePokemon: typePokemon,
      })
      .then(() => {
        handleClose();
        getPokemons();
        toast("Pokemon atualizado", {
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
  };

  const deletePokemon = async (pokemon, e) => {
    await api
      .delete(`/api/pokemon/${pokemon.id}`)
      .then(() => {
        getPokemons();
        toast("Pokemon excluído", {
          type: "error",
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
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <ContainerPokemons>
      {pokemons.map((pokemon, index) => {
        return (
          <CardPokemon key={index}>
            <div>
              <h3>Nome</h3>
              <p>{pokemon.name}</p>
            </div>
            <hr />
            <div>
              <h3>Tipo</h3>
              <p>{pokemon.typePokemon}</p>
            </div>
            <hr />

            <div>
              <h3>Descrição</h3>
              <p>{pokemon.description}</p>
            </div>
            <hr />
            <button onClick={handleOpen.bind(this, pokemon)}>ALTERAR</button>
            <button onClick={deletePokemon.bind(this, pokemon)}>DELETAR</button>
          </CardPokemon>
        );
      })}
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <ButtonClose onClick={handleClose}>X</ButtonClose>
          <div>
            <p>Nome</p>
            <input type="text" value={namePokemon} onChange={handleName} />
          </div>
          <div>
            <p>Tipo do Pokemon</p>
            <input type="text" value={typePokemon} onChange={handleType} />
          </div>
          <div>
            <p>Descrição</p>
            <textarea
              cols="30"
              rows="2"
              onChange={handleDescription}
              value={descriptionPokemon}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={changePokemon}>ALTERAR</button>
          </div>
        </div>
      </Modal>
    </ContainerPokemons>
  );
}

export default AllPokemons;
