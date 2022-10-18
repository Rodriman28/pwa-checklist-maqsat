import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Layout from "./layout/Layout";
import Conductores from "./components/Conductores";
import Tareas from "./components/Tareas";
import Listas from "./components/Listas";
import Grupos from "./components/Grupos";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/conductores" element={<Conductores />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/listas" element={<Listas />} />
          <Route path="/grupos" element={<Grupos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
