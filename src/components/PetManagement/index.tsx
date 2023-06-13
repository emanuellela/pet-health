import { Button, Typography } from "@mui/material";
import PetInformation from "./components/PetInformation";
import Header from "../Header";

function PetManagement() {
    return (
        <div style={{
            width:'100%',
            display:'flex', 
            justifyContent:'center'
        }}>
        
        <div style= {{
            width:'300px',
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            justifyItems:'center',
            alignItems:'center'
        }}>
          <Header></Header>
          <PetInformation></PetInformation>

        </div>
    </div>
    );
}
export default PetManagement;
