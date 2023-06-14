import { Button, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function PetInformation() {
  const imgProfile = 'https://conteudo.imguol.com.br/c/parceiros/39/2023/04/30/capivara-filo-e-devolvida-ao-influenciador-digital-agenor-tupinamba-1682880258967_v2_450x450.png'
  const pet = {
    name: 'Filó',
    race: 'Capivara',
    date: '10/04/2023',
    sex: 'Fêmea',
    castrated: true
  }
  
  return (
    <div>
      <div style={{
        display:'flex',
        flexDirection:'row',
        marginTop:'6px',
        padding:'10px',
        width:'100%'
        }}
      >
        <img style={{
          width:'100px',
          height:'100px',
          borderRadius:'100%',
          border:'5px solid #dddddd'
        }} src={imgProfile}/>

        <div style={{
            display:'flex',
            flexDirection:'column',
            padding:'6px'
          }}
        >
          <Typography fontWeight={900}>{pet.name}</Typography>
          <Typography fontSize={11}>Raça:{pet.race}</Typography>
          <Typography fontSize={11}>Data de Nascimento:{pet.date}</Typography>
          <Typography fontSize={11}>Sexo:{pet.sex}</Typography>
          <Typography fontSize={11}>Castrado:{pet.castrated ? 'Sim' : 'Não'}</Typography>

        </div>
      </div>
    </div>
  );
}
export default PetInformation;
