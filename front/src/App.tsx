import { useState } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import MainPage from "./pages/main";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <MemoryRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
