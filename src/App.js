import React from 'react';
import MainMenu from "./main-menu/MainMenu";
import axios from 'axios';
import Alerts from "./redux/Alerts";

const App = () => {



    return (
        <div style={{ margin: 12 }}>
            <MainMenu />
            <Alerts />
        </div>
    );
};

export default App;