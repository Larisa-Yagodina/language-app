import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";


export default function ChoseSpeed(props) {

    const handleChange = (event) => {
        setValue(event.target.value)
        props.setChosenSpeed(event.target.value);
    };

    const [value, setValue] = useState('')

    return (
        <FormControl variant="standard" htmlFor="uncontrolled-native" sx={{m: 1, minWidth: 120}} size="small">
            <InputLabel id="demo-select-small">Speed</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label="Speed"
                onChange={handleChange}
            >
                {props.speedRange.map((el, i) =>
                    <MenuItem key={i} value={el.value}>{el.name}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
}



