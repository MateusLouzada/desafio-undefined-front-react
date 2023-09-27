import { Link } from "react-router-dom";
import image from "../../assets/react-pokedex.jpg";
import { ContainerLogo, ImageContainer } from "./style";

function Logo() {
  return (
    <Link to="/">
      <ContainerLogo>
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
      </ContainerLogo>
    </Link>
  );
}

export default Logo;
