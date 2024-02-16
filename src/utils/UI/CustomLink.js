import React from 'react';
import {Link} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {

    return (
        <Link
            to={to}
            style={{textDecoration: 'none', color: 'black'}}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;