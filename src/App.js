import "./assets/styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;
