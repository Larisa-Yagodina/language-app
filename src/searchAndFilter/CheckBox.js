import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";


export default function CheckBox(props) {
    //const label = { inputProps: { 'aria-label': props.label } };


    return (
            //<Checkbox {...label} defaultChecked color="success" />
        <FormControlLabel
            value={props.label}
            control={<Checkbox value={props.label} />}
            label={props.label}
            labelPlacement="bottom"
        />
    );
}