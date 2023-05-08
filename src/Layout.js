import React from 'react';
import {Outlet} from "react-router-dom";
import MainMenu2 from "./main-menu/MainMenu2";
import Alerts from "./redux/Alerts";

const Layout = () => {

    return (
        <div>
            <MainMenu2/>
            {/*<MainMenu appName={appName}/>*/}
            {/*<button onClick={getUsers}>fetch users</button>*/}

            <Alerts/>
            <main>
                <Outlet/>
            </main>

        </div>
    );
};

export default Layout;