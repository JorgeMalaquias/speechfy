import { useState } from "react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import MainPage from "./pages/main";
import store from "./redux/store";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}

export default App;
