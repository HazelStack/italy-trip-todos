import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div
      style={{
        height: '400px',
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        color: '#333',
      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;

