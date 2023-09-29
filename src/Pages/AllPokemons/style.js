import styled from "styled-components";

export const ContainerPokemons = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CardPokemon = styled.div`
  background-color: whitesmoke;
  width: 300px;
  padding: 20px;
  color: #c52018;
  border-radius: 18px;
  margin: 20px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p,
  h3 {
    padding: 0;
    margin: -20px 0 0 0;
    text-align: center;
  }

  p {
    color: #292929;
  }
`;

export const ButtonClose = styled.div`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  height: 20px
`