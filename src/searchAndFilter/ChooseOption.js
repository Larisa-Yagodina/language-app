import React, {useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const ChooseOption = (props) => {

    const handleChange = (event) => {
        setValue(event.target.value)
        props.setOption(event.target.value);
    };

    const [value, setValue] = useState('')

    return (
        <FormControl variant="standard" htmlFor="uncontrolled-native" sx={{m: 0.8, minWidth: 100}} size="small">
            <InputLabel id="demo-select-small">Options</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label="Option"
                onChange={handleChange}
            >
                {props.options.map(el => <MenuItem key={el.id} value={el.id}>{el.title}</MenuItem>)}

            </Select>
        </FormControl>
    );
};

export default ChooseOption;