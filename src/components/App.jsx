import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import People from "../pages/People";
import Planets from "../pages/Planets";
import Starships from "../pages/Starships";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planets} />
          <Route path="/starships" component={Starships} />
          <Route path="/" exact>
            <Redirect to="/people" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
