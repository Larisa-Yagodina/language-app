import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TheoryShowingMarkdown from "./TheoryShowingMarkdown";
import DrillWrapper from "../drill/DrillWrapper";
import TabPanel from "../../utils/TabPanel";
import {initialGrammar} from "../../../serverData/InitialGrammar";
import {initialThemes} from "../../../serverData/InitialThemes";
import {useState} from "react";


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TheoryWrapper(props) {

    const userId = 'dlkfjl3487f9s';

    const [value, setValue] = React.useState(props.option === 'lesson' ? 0 : 1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState(props.option === 'grammar' ?
        initialGrammar : props.option === 'themes' ?
            initialThemes : initialGrammar)

    console.log(props.option)

    return (
        <div>

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                            {props.option !== 'lesson' &&
                                <MenuItem>

                                <Link to={props.option === 'grammar' ? '/grammar_route' : '/themes_route'}>
                                    <ListItemIcon>
                                        <ArrowBackIosIcon fontSize="small"/>
                                    </ListItemIcon>
                                </Link>
                                </MenuItem>
                            }

                    <Tab label="Theory" {...a11yProps(props.option === 'lesson' ? 0 : 1)} />
                    <Tab label="Drill" {...a11yProps(props.option === 'lesson' ? 1 : 2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={props.option === 'lesson' ? 0 : 1}>
                <TheoryShowingMarkdown option={props.option === 'lesson' ? 'grammar' : props.option} theory={data.filter(el => el.id === props.partOfGrammarId)}/>
            </TabPanel>
            <TabPanel value={value} index={props.option === 'lesson' ? 1 : 2}>
                <DrillWrapper option={props.option === 'lesson' ? 'grammar' : props.option} partOfGrammarId={props.partOfGrammarId}/>
            </TabPanel>
        </Box>
        </div>
    );
}