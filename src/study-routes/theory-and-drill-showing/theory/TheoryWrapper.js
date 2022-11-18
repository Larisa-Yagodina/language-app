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
import Test from "../drill/Test";

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

    const [value, setValue] = React.useState(props.option === 'lesson-grammar' || props.option === 'lesson-themes' ? 0 : 1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState(props.option === 'grammar' || props.option === 'lesson-grammar' ?
        initialGrammar : initialThemes )

    const isLesson = props.option === 'lesson-grammar' || props.option === 'lesson-themes';
    const isGrammar = props.option === 'lesson-grammar' || props.option === 'grammar';
    const isDrill = data.find(el => el.id === props.partOfGrammarId).test.length === 0;
    console.log(isDrill)

    return (
        <div>

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                            {(!isLesson) &&
                                <MenuItem>

                                <Link to={props.option === 'grammar' ? '/grammar_route' : '/themes_route'}>
                                    <ListItemIcon>
                                        <ArrowBackIosIcon fontSize="small"/>
                                    </ListItemIcon>
                                </Link>
                                </MenuItem>
                            }

                    <Tab label="Theory" {...a11yProps( isLesson ? 0 : 1)} />
                    <Tab label={isDrill ? "Drill" : "Test"} {...a11yProps(isLesson ? 1 : 2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={isLesson ? 0 : 1}>
                <TheoryShowingMarkdown handleChange={handleChange} goNextTo={isLesson ? 1 : 2} option={isGrammar ? 'grammar' : 'themes'} theory={data.filter(el => el.id === props.partOfGrammarId)}/>
            </TabPanel>
            <TabPanel value={value} index={isLesson ? 1 : 2}>
                { isDrill ?
                    <DrillWrapper option={isGrammar ? 'grammar' : 'themes'} partOfGrammarId={props.partOfGrammarId}/> :
                    <Test handleChange={handleChange} goBackTo={isLesson ? 0 : 1} theory={data.filter(el => el.id === props.partOfGrammarId)} />
                }
                </TabPanel>
        </Box>
        </div>
    );
}