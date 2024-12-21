import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./layouts/Header";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <Container>
      <CssBaseline />
      <Header/>
      <HomePage />
    </Container>
  );
}

export default App;
