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
                justifyContent:'space-between',
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
                        fontSize:'30px',
                        lineHeight:'45px',
                        fontWeight:'700',
                        padding:'16px 56px'
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
