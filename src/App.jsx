import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Logo from "./Components/Logo";
import AllPokemons from "./Pages/AllPokemons";
import AddPokemon from "./Pages/AddPokemon";

function App() {
  return (
    <main>
      <Logo />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/getpokemon" component={AllPokemons} />
        <Route path="/addpokemon" component={AddPokemon} />
      </Switch>
    </main>
  );
}

export default App;
