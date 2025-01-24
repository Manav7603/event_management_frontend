import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router";
import { ThemeProvider, CssBaseline } from '@mui/material';
import themeConfig from './theme/themeConfig';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {
  const [mode, setMode] = useState("light");

  return (
    <>
    <ThemeProvider theme={themeConfig(mode)} >
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App;
