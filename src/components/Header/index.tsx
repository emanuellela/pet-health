import { Avatar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Header() {
    return (
        <div style={{
            width:'100%',
            display:'flex', 
            justifyContent:'center'
        }}>
            <div id="header" style={{ 
                padding:'0px 20px',
                width:'100%',
                display:'flex',
                flexDirection:'row',
                justifyItems:'center',
                justifyContent:'space-around',
                alignItems:'center'
                }}>
                <IconButton>
                    <ArrowBackIcon />
                </IconButton>

                <div style={{
                    backgroundColor:'#D6E5FE',
                    borderRadius:'8px',
                }}>
                    <Typography style={{
                        color:'#2F80EC',
                        fontSize:'22px',
                        lineHeight:'28px',
                        fontWeight:'700',
                        padding:'8px 32px'
                    }}>
                        SaúdePET
                    </Typography>
                </div>

                <Avatar sx={{ bgcolor: 'green' }}>3</Avatar>

            </div>
        
        </div>
    );
}
export default Header;
