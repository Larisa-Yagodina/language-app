import React, {useState} from 'react';
import {FormControlLabel, FormGroup, Stack, Switch} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
}

const styleRight = {
    marginLeft: 'auto',
    marginRight: 0,
}

export default function ItemsList({
                                        openAll,
                                        handleChange,
                                        phrases,
                                        handleToggle,
                                        title,
                                        openNotes
                                    }) {

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

            <List
                sx={{
                    width: 'auto',
                    // height: 230,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                <ul>

                    {/*    ТЕМЫ     */}

                    {phrases.map((value) => {
                        const labelId = value._id;
                        return (
                            <div key={value._id}>

                                    <ListItem
                                        key={value._id}
                                        onClick={() => openNotes(value._id)}
                                        secondaryAction={
                                            <Checkbox
                                                color="success"
                                                edge="end"
                                                onChange={handleToggle(value._id)}
                                                checked={value.isStudied}
                                                inputProps={{'aria-labelledby': labelId}}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemText id={labelId} primary={(title === "My phrases") ? value.english : value.word}/>
                                        </ListItemButton>
                                    </ListItem>


                                {/*    ВЛОЖЕННЫЕ ЗАМЕТКИ    */}

                                {value.isOpen &&
                                    <ul>

                                            <ListItem
                                                key={value.id}
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <ListItemText id={labelId + "russian"} primary={ (title === "My phrases") ? value.russian : value.definition}/>
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem
                                                key={value.id}
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <ListItemText id={labelId + "note"} primary={(title === "My phrases") ? value.note : "Equivalent: " + value.russianEquivalent}/>
                                                </ListItemButton>
                                            </ListItem>
                                    </ul>
                                }
                            </div>
                        );
                    })}
                </ul>
            </List>
        </div>
    );
};

