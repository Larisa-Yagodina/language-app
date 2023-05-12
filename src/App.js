import React from 'react';
import appRoutes from './routes/appRoutes'
import {RouterProvider} from "react-router-dom";

const App = () => {


    return (
        <RouterProvider router={appRoutes}/>
    );
};


export default App;

