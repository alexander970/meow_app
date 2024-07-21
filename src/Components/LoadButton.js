import React from 'react';
import './LoadButton.css';


const LoadButton = ({ onClick }) => {

    
  return (
    <button 
    className="load-button"
      onClick={onClick}
    >
      Load Another Cat
    </button>
  );
};

export default LoadButton;