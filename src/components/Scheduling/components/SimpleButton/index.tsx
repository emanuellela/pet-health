import React from 'react';

function SimpleButton({ label, onClick }: any) {
  const buttonStyle = {
    backgroundColor: '#CFDED6',
    color: '#2A2A2A',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}

export default SimpleButton;