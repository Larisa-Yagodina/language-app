import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GrammarTheory from "./GrammarTheory";
import GrammarRouteDrillWrapper from "../grammar-route-drill/GrammarRouteDrillWrapper";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

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

export default function GrammarTheoryWrapper(props) {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <MenuItem>
                        <Link to={'/grammar_route'}>
                            <ListItemIcon>
                                <ArrowBackIosIcon fontSize="small"/>
                            </ListItemIcon>
                        </Link>
                    </MenuItem>
                    <Tab label="Theory" {...a11yProps(1)} />
                    <Tab label="Drill" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={1}>
                <GrammarTheory partOfGrammarId={props.partOfGrammarId}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <GrammarRouteDrillWrapper partOfGrammarId={props.partOfGrammarId}/>
            </TabPanel>
        </Box>
        </div>
    );
}