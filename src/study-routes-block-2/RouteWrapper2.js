import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import List from "@mui/material/List";
import ListItem2 from "./ListItem2";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const RouteWrapper2 = (props) => {

    const { block } = useParams(); // themes или grammar
    console.log(block)

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {block.slice(0, 1).toUpperCase() + block.slice(1)}
            </Typography>

            <List
                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
            {props.list.map((el, index) =>
                    <ListItem2 section={el} order={index+1} />
            )}
            </List>

        </div>
    );
};

const mapStateToProps = state => ({
   list: state.grammar
})

export default connect(mapStateToProps)(RouteWrapper2);