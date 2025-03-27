import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ImagePage } from './pages/ImagePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload-image" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;