import image from "../../assets/react-pokedex.jpg";
import { ContainerLogo, ImageContainer } from "./style";

function Logo() {
  return (
    <ContainerLogo>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
    </ContainerLogo>
  );
}

export default Logo;
