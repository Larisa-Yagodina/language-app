import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GrammarRouteDrillWrapper from "../theory-and-drill-showing/grammar-route-drill/GrammarRouteDrillWrapper";
import GrammarTheory from "../theory-and-drill-showing/grammar-theory/GrammarTheory";
import TabPanel from "../utils/TabPanel";
import Words from "./Words";
import SetExpressions from "./SetExpressions";
import Drill from "./Drill";
import {initialThemes} from "../../serverData/InitialThemes";


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

export default function ThemeMainWrapper(props) {

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(props)

    return (
        <div>
            <Box sx={{ width: '100%' }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <MenuItem>
                            <Link to={'/themes_route'}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon fontSize="small"/>
                                </ListItemIcon>
                            </Link>
                        </MenuItem>
                        <Tab label="Useful phrases" {...a11yProps(1)} />
                        <Tab label="Words" {...a11yProps(2)} />
                        <Tab label="Set expressions" {...a11yProps(3)} />
                        <Tab label="Drill" {...a11yProps(4)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={1}>
                    <GrammarTheory theory={initialThemes.filter(el => el.id === props.partOfGrammarId)}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Words />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <SetExpressions />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Drill />
                </TabPanel>

            </Box>
        </div>
    );
}