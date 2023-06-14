import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function FormVaccine() {
    const [vaccine, setVaccine] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setVaccine(event.target.value);
    };
    return (
        <div>
            <FormControl variant="standard" sx={{width:'100%'}}>
            <InputLabel id="demo-simple-select-standard-label">Selecione a vacina</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={vaccine}
                onChange={handleChange}
                label="Selecione a vacina"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'vaccine1'}>Vacina teste 1</MenuItem>
                    <MenuItem value={'vaccine2'}>Vacina teste 2</MenuItem>

                </Select>
            </FormControl>
            <TextField id="standard-basic" label="Data" variant="standard" sx={{width:'100%'}}/>
            <TextField id="standard-basic" label="Hora" variant="standard" sx={{width:'100%'}}/>
            <TextField id="standard-basic" label="Local" variant="standard" sx={{width:'100%'}}/>
        </div>
    );
}
export default FormVaccine;