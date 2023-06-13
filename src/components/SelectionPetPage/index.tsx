import { Button, Typography } from "@mui/material";
import Header from "../Header";
import PetButton from "./components/PetButton";

function SelectionPetPage() {
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

            <Header></Header>

            <Typography sx={{
                padding:'50px 0px',
                
            }}>Selecione um dos animais</Typography>

            <div style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                width:'100%',
                justifyContent:'space-around'
            }}>
                <PetButton buttonText="Cachorro" imageUrl="https://thumbs.dreamstime.com/b/cute-robot-dog-simple-vector-illustration-modern-flat-cartoon-style-133938898.jpg" onClick={()=>{}}></PetButton>
                <PetButton buttonText="Gato" imageUrl="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202111/02/KorMedi/20211102150108347omvg.jpg" onClick={()=>{}}></PetButton>
            </div>
        </div>
    </div>
    );
}
export default SelectionPetPage;