import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import {useState} from "react";
import {initialTrainingRoute} from "../serverData/InitialTrainingRoute";
import {Link} from "react-router-dom";

export default function CheckboxListSecondary() {
    const [checked, setChecked] = React.useState([1]);
    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.filter(el => el.userId === userId));

    const handleToggle = (value) => () => {

        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div>
            <h2>Route of learning English</h2>
            <List dense sx={{width: '100%', maxWidth: 'auto', bgcolor: 'background.paper'}}>
<ol>
                {userLearningRoute[0].userRoute.map((value) => {
                    const labelId = value.id;
                    return (
                        <div>
                            <li>
                            <ListItem
                                key={value.id}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(value.isStudied)}
                                        checked={value.isStudied}
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <Link to={value.link} style={{textDecoration: 'none', color: 'black'}}>
                                        <ListItemText id={labelId} primary={value.name}/>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            </li>
                            <ul>
                                {value.subThemes.map((subTheme) => {
                                    const labelId = subTheme.id;
                                    return (
                                        <li>
                                            <ListItem
                                                key={subTheme.id}
                                                secondaryAction={
                                                    <Checkbox
                                                        edge="end"
                                                        onChange={handleToggle(subTheme.isStudied)}
                                                        checked={subTheme.isStudied}
                                                        inputProps={{'aria-labelledby': labelId}}
                                                    />
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <Link to={subTheme.link}
                                                          style={{textDecoration: 'none', color: 'black'}}>
                                                        <ListItemText id={labelId} primary={subTheme.name}/>
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
</ol>
            </List>
        </div>
    );
}
