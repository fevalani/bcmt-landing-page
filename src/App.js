import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/styles/App.css";
import "./assets/styles/reset.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import TextPage from "./components/TextPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/text" exact>
            <Header />
            <TextPage />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
