import React from 'react';
import {Outlet} from "react-router-dom";
import MainMenu2 from "../main-menu/MainMenu2";

const PersonalWrapper = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PersonalWrapper;