import React from 'react';
import {
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import Layout from "../Layout";


const appRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={
        <Layout/>
    }>

    </Route>
));

export default appRoutes;