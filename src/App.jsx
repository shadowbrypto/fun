import React from 'react';
import './App.css';
import trojanImage from '../trojan.jpg';

function App() {
  return (
    <div className="container">
      <main className="main-content">
        <div className="content-wrapper">
          {/* Grid pattern of stamped text - infinite coverage */}
          <div className="stamp-grid">
            {Array.from({ length: 900 }, (_, index) => (
              <div key={index} className="stamp-text-grid">NOT FOR SALE</div>
            ))}
          </div>
          
          <div className="trojan-horse">
            <img 
              src={trojanImage} 
              alt="Trojan Horse" 
              className="trojan-image"
            />
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