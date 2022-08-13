import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import NavBar from "./NavBar";

const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AcercaDe" element={<About />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default Rutas;