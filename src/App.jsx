import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Logo from "./Components/Logo";
import AllPokemons from "./Pages/AllPokemons";
import AddPokemon from "./Pages/AddPokemon";
import ChangePokemon from "./Pages/ChangePokemon";
import DeletePokemon from "./Pages/DeletePokemon";

function App() {
  return (
    <main>
      <Logo />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/getpokemon" component={AllPokemons} />
        <Route path="/addpokemon" component={AddPokemon} />
        <Route path="/changepokemon" component={ChangePokemon} />
        <Route path="/deletepokemon" component={DeletePokemon} />
      </Switch>
    </main>
  );
}

export default App;
