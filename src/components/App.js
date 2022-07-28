import "../styles/app.css";
import { React } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <NavBar />
      </div>
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Body">
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
