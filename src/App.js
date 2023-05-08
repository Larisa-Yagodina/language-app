import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {checkAuth} from "./redux/actionsAuthorisation";
import appRoutes from './routes/appRoutes'
import {RouterProvider} from "react-router-dom";

const App = (props) => {


    return (
        <RouterProvider router={appRoutes}/>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => dispatch(checkAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default observer(App);