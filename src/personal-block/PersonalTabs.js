import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "../utils/TabPanel";
import DrillWrapper from "./drill/DrillWrapper";
import Phrases from "./list/PhrasesGetToListWrapper";

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

export default function PersonalTabs(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{width: '100%', margin: '10px 2px'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>

                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                        <Tab label={props.label} {...a11yProps(0)} />
                        <Tab label='Drill' {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                        <Phrases />
                </TabPanel>
                <TabPanel value={value} index={1}>
                        <DrillWrapper title={"My phrases to learn"} option={"Phrases"}/>
                </TabPanel>
            </Box>
        </div>
    );
}