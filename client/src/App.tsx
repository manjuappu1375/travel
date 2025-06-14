import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
        <main>
          <h1>Routes Loading...</h1>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/login" element={<Login />} />
              </Routes>
        </main>
      <Footer />
    </div>
  );
};

export default App;
