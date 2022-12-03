import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "../utils/TabPanel";
import PhrasesWrapper from "./PhrasesWrapper";
import PhasesDrillWrapper from "./PhrasesDrillWrapper";

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

export default function PersonalPhrasesTabs(props) {

    const [value, setValue] = React.useState( 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>

                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                        <Tab label="Add new phrase" {...a11yProps(0)} />
                        <Tab label="Drill"  {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <PhrasesWrapper />
                </TabPanel>
                <TabPanel value={value} index={1}>
<PhasesDrillWrapper />
                </TabPanel>
            </Box>
        </div>
    );
}