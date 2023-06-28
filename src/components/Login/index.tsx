import { Button, TextField, Typography } from "@mui/material";
import Header from "../Header";

function Login() {
    return (
        <div style={{
            width:'100%',
            display:'flex', 
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Header/>
            <Typography fontSize={'40px'} fontWeight={'700'} margin={14}>
                Login
            </Typography>

            <div style={{
                display:'flex',
                flexDirection:'column',
            }}>
                <TextField id="standard-basic" label="E-mail/usuário" variant="standard" />
                <TextField id="standard-basic" label="Senha" variant="standard" />
                <a href="#" style={{alignSelf:'end', padding:'6px 0px 40px 0px'}}>
                    <Typography>
                        Esqueci a senha
                    </Typography>
                </a>

                <div style={{
                    alignSelf:'center',
                    textAlign:'center'
                }}>
                    <Button variant="contained" sx={{
                        width:'115px',
                        backgroundColor:'#48D0FE',
                        borderRadius:'12px'
                    }}
                    href="/pets/create"
                    >
                        Login
                    </Button>
                
                    <Typography padding={4}>
                        ou
                    </Typography>

                    <a href="#">
                        <Typography>
                            Cadastre-se
                        </Typography>
                    </a>
                </div>
                

            </div>



        
        </div>
    );
}
export default Login;
