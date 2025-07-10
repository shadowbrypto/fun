import React from 'react';
import './App.css';
import trojanImage from '../trojan.jpg';

function App() {
  return (
    <div className="container">
      <main className="main-content">
        <div className="content-wrapper">
          <div className="trojan-horse">
            <img 
              src={trojanImage} 
              alt="Trojan Horse" 
              className="trojan-image"
            />
          </div>
          
          <div className="main-text">
            <h1 className="domain-text">DOMAIN NOT FOR SALE</h1>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 - Protected Domain</p>
      </footer>
    </div>
  );
}

export default App;