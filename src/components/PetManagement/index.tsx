import { Button, Typography } from "@mui/material";
import PetInformation from "./components/PetInformation";
import Header from "../Header";
import ButtonCategory from "./components/ButtonCategory";

function PetManagement() {
    const categories = [
        {
            color: '#a268ff',
            imageUrl: 'https://www.austintexas.gov/sites/default/files/files/vaccine_icon.png',
            text: 'Vacina'
        },
        {
            color: '#F9774F',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/55/55281.png',
            text: 'Agenda'
        },
        {
            color: '#a268ff',
            imageUrl: 'https://cdn.petmaniaveterinario.com.br/wp-content/uploads/2021/02/008-pet-shampoo.png',
            text: 'Banho e Tosa'
        },
        {
            color: '#a268ff',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/883/883407.png',
            text: 'Medicamentos'
        },
        {
            color: '#a268ff',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3737/3737711.png',
            text: 'Alimentação'
        },
        {
            color: '#a268ff',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3027/3027691.png',
            text: 'Doenças'
        },
        {
            color: '#72cbff',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3029/3029319.png',
            text: 'Relatórios'
        },
        {
            color: '#72cbff',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/179/179669.png',
            text: 'Configurações'
        }
    ]
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
            <div 
                style={{
                    padding:'6px',
                    width:'100%',
                    height:'500px',
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    gap:'12px',
                    justifyContent:'center'
                }}
            >
                { categories.map((category) => {
                    return <ButtonCategory color={category.color} imageUrl={category.imageUrl} buttonText={category.text} onClick={() => {}}></ButtonCategory>
                }) 
                }

            </div>
           


        </div>
    </div>
    );
}
export default PetManagement;
