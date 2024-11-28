import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsList from "./pages/PokemonsList";
import PokemonPage from "./pages/PokemonPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
