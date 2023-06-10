import { Button, Typography } from "@mui/material";

function StartPage() {
    return (
        <div style={{
            width:'100%',
            display:'flex', 
            justifyContent:'center'
        }}>
        
        <div  style= {{
            width:'300px',
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            justifyItems:'center',
            alignItems:'center'
        }}>
            <img style = {{width:'300px'}} src="https://st4.depositphotos.com/5045705/23346/v/600/depositphotos_233467822-stock-illustration-cat-dog-robot-cute-cartoon.jpg">
            </img>
            <Typography padding="10px" fontSize={'24px'} fontWeight={'700'}>Para você gerenciar a saúde do seu pet com facilidade!</Typography>
            <Typography padding="10px">Você terá tudo o que precisa para gerenciar a saúde de seus pets.</Typography>
            <Button style={{
                width:'188px',
                height:'46px',
                backgroundColor:'#F38040',
                color:'black',
                borderRadius: '12px',
                margin:'30px 0px'
            }}>Comece agora</Button>
        </div>
    </div>
    );
}
export default StartPage;
