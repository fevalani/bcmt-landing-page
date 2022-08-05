import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/styles/App.css";
import "./assets/styles/reset.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Content from "./components/Content";
import SelectedTitleContext from "./context/SelectedTitleContext";

import content from "./assets/content/content";

function App() {
  const [selectedTitle, setSelectedTitle] = useState("");
  return (
    <div className="App">
      <SelectedTitleContext.Provider value={{ selectedTitle, setSelectedTitle }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/content" element={<Content content={content} />} />
          </Routes>
          <Footer />
        </Router>
      </SelectedTitleContext.Provider>
    </div>
  );
}

export default App;
