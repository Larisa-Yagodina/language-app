import React from 'react';
import {Outlet} from "react-router-dom";
import MainMenu2 from "../header-menu/HeaderAppBar";

const PersonalWrapper = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PersonalWrapper;