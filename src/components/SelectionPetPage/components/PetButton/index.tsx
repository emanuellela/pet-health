import { Button, Typography } from "@mui/material";

interface ButtonProps {
    imageUrl: string;
    buttonText: string;
    onClick: () => void;
  }
  
  const PetButton: React.FC<ButtonProps> = ({ imageUrl, buttonText, onClick }) => {
    return (
      <div style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems:'center'
      }}>
        
      <button style={{
        padding:'15px',
        backgroundColor: '#4ACCF2',
        borderRadius:'12px',
        border:'none',
        cursor:'pointer'
        
      }} onClick={onClick}>
        <img style={{
            width:'88px',
            height:'80px'
        }}
        src={imageUrl} alt="Button Icon" />

      </button>
    
        <Typography>{buttonText}</Typography>
        </div>
    );
  };

export default PetButton;