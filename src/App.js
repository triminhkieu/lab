import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Headers";
import FilmBody from "./components/Bodies";
import Footer from "./components/Footers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import New from "./components/News";
import Abouts from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FilmBody/>}></Route>
          <Route path="/about" element={<Abouts/>}></Route>
          <Route path="/news" element={<New/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
