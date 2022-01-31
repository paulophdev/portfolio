import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Apresentacao from "./pages/Apresentacao/index";
import Projetos from "./pages/Projetos/index";
import Contato from "./pages/Contato/index";

export default function Roteamento() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Apresentacao />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
