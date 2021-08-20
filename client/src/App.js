import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ResPage from "./pages/ResPage";
import MenuPage from "./pages/MenuPage";
import Delivery from "./pages/Delivery";
import Confirm from "./pages/Confirm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
        <Route path="/respage" exact component={ResPage}/>
        <Route path="/menu" exact component={MenuPage}/>
        <Route path="/delivery" exact component={Delivery}/>
        <Route path="/confirm" exact component={Confirm}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
