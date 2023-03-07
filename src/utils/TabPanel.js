import Box from "@mui/material/Box";
import * as React from "react";

export default function TabPanel(props) {
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
                <Box sx={{ p: 3 }} style={{margin: '0.5%', padding: '0.5%'}}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}
