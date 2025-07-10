import React from 'react';
import './VoidStamp.css';

const VoidStamp = ({ rotation = 0, size = 'medium', opacity = 1 }) => {
  return (
    <div 
      className={`void-stamp void-stamp-${size}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: opacity
      }}
    >
      <div className="void-border">
        <div className="void-text">VOID</div>
      </div>
    </div>
  );
};

export default VoidStamp;