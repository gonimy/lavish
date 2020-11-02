import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import { Home } from "./components//pages/home/home";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import { Join } from "./components/pages/Join";
import { Services } from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/join" component={Join} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
