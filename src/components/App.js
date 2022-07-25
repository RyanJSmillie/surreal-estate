import "../styles/app.css";
import { React } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
// eslint-disable-next-line import/no-named-as-default
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
