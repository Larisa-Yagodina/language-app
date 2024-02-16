import React from 'react';
import {Outlet} from "react-router-dom";
import MainMenu2 from "../../header-menu/HeaderAppBar";
import Alerts from "../../utils/Alerts";

const Layout = () => {

    return (
        <div>
            <MainMenu2/>
            {/*<MainMenu appName={appName}/>*/}
            {/*<button onClick={getUsers}>fetch users</button>*/}

            <Alerts/>
            <main style={{margin: '3%'}}>
                <Outlet/>
            </main>

        </div>
    );
};

export default Layout;