import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ChooseNextOption = (props) => {

    const handleChange = (event) => {
        setValue(event.target.value)
        props.onSelect(event.target.value);
    };
    const [value, setValue] = useState('')

    return (
        <FormControl variant="standard" htmlFor="uncontrolled-native" sx={{m: 0.8, minWidth: 100}} size="small">
            <InputLabel id="demo-select-small">{props.lable}</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label={props.lable}
                onChange={handleChange}
            >
                {props.list.map((el, i) =>
                    <MenuItem key={i} value={el.id}> {el.title.length > 30 ? el.title.slice(0, 30) + "..." : el.title}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
};

export default ChooseNextOption;