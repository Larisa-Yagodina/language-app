import React from 'react';
import MainMenu from "./main-menu/MainMenu";
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