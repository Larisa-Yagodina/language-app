import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import {Link, useParams} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DrillWrapper from "../study-routes-block/theory-and-drill-showing/drill/DrillWrapper";
import TabPanel from "../utils/UI/TabPanel";
import Test from "../study-routes-block/theory-and-drill-showing/drill/Test";
import {newGrammar} from '../data/serverData/NewGrammar';
import ShowMarkdown2 from "./ShowMarkdown2";

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

export default function LessonWrapper2(props) {

    const { block, id } = useParams(); // themes или grammar
    console.log(block)
    console.log(id)

    const [value, setValue] = React.useState( 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const data = newGrammar;

    const isLesson = true;
    const isGrammar = false;
    const isDrill = data.find(el => el.id === id).test.length === 0;

    return (
        <div>

        <Box sx={{ width: '100%', margin: '10px 2px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>

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
                <ShowMarkdown2 handleChange={handleChange} goNextTo={isLesson ? 1 : 2} option={block} theory={data.filter(el => el.id === id)}/>
            </TabPanel>

            <TabPanel value={value} index={isLesson ? 1 : 2}>
                { isDrill ?
                    <DrillWrapper theory={data.find(el => el.id === id)}/> :

                    <Test handleChange={handleChange} goBackTo={isLesson ? 0 : 1} theory={data.filter(el => el.id === id)} />
                }
                </TabPanel>
        </Box>
        </div>
    );
}