import React from 'react';
import {Stack, Switch} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuForDeleteUpdateItem from "../menu-list-item/MenuForDeleteUpdateItem";

const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
}

const styleRight = {
    marginLeft: 'auto',
    marginRight: '22%',
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
                    <Stack direction="row" spacing={-0.6} alignItems="center">
                        <Typography>New</Typography>
                        <Switch
                            color="success"
                            checked={openAll}
                            onChange={handleChange}
                            aria-label="route switch"
                        />
                        <Typography>All</Typography>
                    </Stack>
                    <div style={{textAlign: 'center', fontSize: "80%"}}>
                        Already knew:
                    </div>
                </div>
            </div>

            <List
                sx={{
                    width: '100%',
                    // height: 230,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                <ul style={{margin: '0.01%', padding: '0.01%'}}>

                    {/*    ТЕМЫ     */}

                    {phrases.map((value) => {
                        const labelId = value._id;
                        return (
                            <div key={value._id}>


                                <Box sx={{flexGrow: 1}}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={10.5}>


                                            <ListItem
                                                key={value._id}
                                                onClick={() => openNotes(value._id)}
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <ListItemText id={labelId}
                                                                  primary={(title === "My phrases") ? value.english : value.word}/>
                                                </ListItemButton>
                                            </ListItem>


                                        </Grid>
                                        <Grid item xs={1.5}>

                                            <Grid container spacing={2.5}>
                                                <Grid item xs={4}>
                                            <Checkbox
                                                color="success"
                                                edge="end"
                                                onChange={handleToggle(value._id, !value.isStudied)}
                                                checked={value.isStudied}
                                                inputProps={{'aria-labelledby': labelId}}
                                            />
                                            {' '}
                                                </Grid>
                                                <Grid item xs={8}>
                                            <MenuForDeleteUpdateItem phrase={value}/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>


                                {/*    ВЛОЖЕННЫЕ ЗАМЕТКИ    */}


                                {value.isOpen &&
                                    <ul>

                                        <ListItem
                                            key={value.id}
                                            disablePadding
                                        >
                                            {/*<ListItemButton>*/}
                                            <ListItemText id={labelId + "russian"}
                                                          primary={(title === "My phrases") ? value.russian : value.definition}/>
                                            {/*</ListItemButton>*/}
                                        </ListItem>
                                        <ListItem
                                            key={value.id}
                                            disablePadding
                                        >
                                            {/*<ListItemButton>*/}
                                            <ListItemText id={labelId + "note"} style={{fontStyle: 'italic'}}
                                                          primary={(title === "My phrases") ? value.note : "Equivalent: " + value.russianEquivalent}/>
                                            {/*</ListItemButton>*/}
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

