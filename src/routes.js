import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Apresentacao from "./pages/Apresentacao/index";
import Projetos from "./pages/Projetos/index";
import Contato from "./pages/Contato/index";
import ArquivoOnline from "./pages/Gallery/arquivoonline";
import Performar from "./pages/Gallery/performar";
import MedCash from "./pages/Gallery/medcash";

export default function Roteamento() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Apresentacao />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/gallery/arquivoonline" element={<ArquivoOnline />} />
        <Route path="/gallery/performar" element={<Performar />} />
        <Route path="/gallery/medcash" element={<MedCash />} />
      </Routes>
    </Router>
  );
}
