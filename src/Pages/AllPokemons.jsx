import { useEffect, useState } from "react";
import api from "../services/pokemonApi";

function AllPokemons() {
  //const [pokemons, setPokemons] = useState();
  const getPokemons = async () => {
    api
      .get("/api/pokemon")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return <div>Testing</div>;
}

export default AllPokemons;
