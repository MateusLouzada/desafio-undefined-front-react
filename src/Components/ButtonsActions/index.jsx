import { ContainerButtons } from "./style";
import imagePokeball from "../../assets/pokebola.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function ButtonsActions() {
  const [buttonHover, setButtonHover] = useState("0");

  const handleButtonHover = (e) => {
    setButtonHover(e.target.value);
  };

  const handleLeaveButtonHover = () => {
    setButtonHover("0");
  };

  return (
    <ContainerButtons>
      <Link style={{ textDecoration: "none" }} to="/getpokemon">
        <button
          value="1"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleLeaveButtonHover}
        >
          {buttonHover == "1" ? <img src={imagePokeball} /> : <></>}
          Consultar Pokemons
        </button>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/addpokemon">
        <button
          value="2"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleLeaveButtonHover}
        >
          {buttonHover == 2 ? <img src={imagePokeball} /> : <></>}
          Adicionar Pokemon
        </button>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/changepokemon">
        <button
          value="3"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleLeaveButtonHover}
        >
          {buttonHover == "3" ? <img src={imagePokeball} /> : <></>}
          Alterar Pokemon
        </button>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/deletepokemon">
        <button
          value="4"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleLeaveButtonHover}
        >
          {buttonHover == "4" ? <img src={imagePokeball} /> : <></>}
          Excluir Pokemon
        </button>
      </Link>
    </ContainerButtons>
  );
}

export default ButtonsActions;
