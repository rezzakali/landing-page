import { Route, Routes } from "react-router-dom";
import Header from "./Components/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
