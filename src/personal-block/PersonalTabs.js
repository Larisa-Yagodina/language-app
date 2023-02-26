import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "../utils/TabPanel";
import DrillWrapper from "./DrillWrapper";
import Phrases from "./Phrases";
import Words from "./Words";
import AddNewWordOrPhrase from "./AddNewWordOrPhrase";

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

            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>

                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                        <Tab label={props.label} {...a11yProps(0)} />
                        <Tab label='Drill' {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    { props.label === 'Phrases' ?
                        <Phrases />
                        :
                        <Words />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    { props.label === 'Phrases' ?
                        <DrillWrapper title={"My phrases to learn"} option={"Phrases"}/>
                        :
                        <DrillWrapper title={"My words to learn"} option={"Words"} />}
                </TabPanel>
            </Box>
        </div>
    );
}