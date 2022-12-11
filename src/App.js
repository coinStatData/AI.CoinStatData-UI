import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DonatePage from './pages/donation';
import AIPage from './pages/AI';
import NavBarV2 from './components/navBar/navBarV2'
import Footer from './components/footer';
import useScreenSize from './hooks/useScreenSize';
import './App.css';

function App() {

  const { screenWidth } = useScreenSize();

  return (
    <BrowserRouter>
      <div className="coin-body">
        <div>
          <NavBarV2 />
          <Routes>
            {/* pages with navbar */}
            <Route path="/"  element={<AIPage screenWidth={screenWidth} />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
