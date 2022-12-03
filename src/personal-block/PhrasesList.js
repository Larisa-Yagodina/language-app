import React from 'react';
import {FormControlLabel, FormGroup, Stack, Switch} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";


const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
}

const styleRight = {
    marginLeft: 'auto',
    marginRight: 0,
}

export default function PhrasesList ({openSubThemes, openAll, handleChange, phrases, handleToggle, title, mainUrl}) {

    return (
        <div>
            <div style={wrapperStyle}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div style={styleRight}>
                    <br/>
                        <Stack direction="row" spacing={-0.5} alignItems="center">
                            <Typography>To learn</Typography>
                            <Switch
                                color="success"
                                checked={openAll}
                                onChange={handleChange}
                                aria-label="route switch"
                            />
                            <Typography>All</Typography>
                        </Stack>
                    <div style={{textAlign: 'right'}}>
                        Already knew :
                    </div>
                </div>
            </div>

            <List dense sx={{width: '100%', maxWidth: 'auto', bgcolor: 'background.paper'}}>
                <ul>

                    {phrases.map((value) => {
                        const labelId = value.id;
                        return (
                            <div>
                                <li>
                                    <ListItem

                                        key={value.id}
                                        secondaryAction={
                                            <Checkbox
                                                color="success"
                                                edge="end"
                                                onChange={handleToggle(value.id)}
                                                checked={value.isStudied}
                                                inputProps={{'aria-labelledby': labelId}}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                                <ListItemText
                                                    id={labelId}
                                                    primary={value.english}
                                                />
                                        </ListItemButton>
                                    </ListItem>
                                </li>


                            </div>
                        );
                    })}
                </ul>
            </List>
        </div>
    );
};

