import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import Header from "../Header";
import React, { useState } from "react";
import FormVaccine from "./components/FormVaccine";
import SimpleButton from "./components/SimpleButton";

function Scheduling() {
    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCategory(event.target.value);
    };
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
            <Typography>Agendamento</Typography>
            <Typography>Crie um lembrete para uma categoria de informações do seu pet</Typography>

            <FormControl variant="standard" sx={{width:'100%'}}>
            <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="Categoria"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'vaccine'}>Vacina</MenuItem>
                    <MenuItem value={'bathAndGroom'}>Banho e Tosa</MenuItem>
                    <MenuItem value={'appointment'}>Consulta</MenuItem>
                    <MenuItem value={'medicine'}>Medicamento</MenuItem>
                    <MenuItem value={'alimentation'}>Alimentação</MenuItem>
                </Select>
            </FormControl>

            {category === 'vaccine' && <FormVaccine/>}
            <div style={{
                marginTop:'30px'
            }}>
            <SimpleButton label='Salvar'></SimpleButton>
            </div>
        </div>
    </div>
    );
}
export default Scheduling;
