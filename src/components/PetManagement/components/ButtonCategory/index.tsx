import { Button, Typography } from "@mui/material";

interface ButtonCategoryProps {
    color: string;
    imageUrl: string;
    buttonText: string;
    onClick: () => void;
  }
  
  const ButtonCategory: React.FC<ButtonCategoryProps> = ({ color, imageUrl, buttonText, onClick }) => {
    return (
      <div style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems:'center'
      }}>
        
        <button 
          style={{
            padding:'15px',
            backgroundColor: color,
            borderRadius:'20px',
            border:'none',
            cursor:'pointer',
            width:'120px',
            height:'120px'
          }} 
          onClick={onClick}
        >
          <img style={{
              width:'60px',
              height:'60px'
          }}
          src={imageUrl} alt="Button Icon"
          />
          <Typography sx={{width:'100%'}} fontWeight={900} fontSize={'14px'} textAlign={'center'}>{buttonText}</Typography>
        </button>
      </div>
    );
  };

export default ButtonCategory;