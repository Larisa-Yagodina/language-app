import React from 'react';
import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error.data.message || 'Something goes wrong!'}</h2>
                <h3>{error.data.reason}</h3>
            </div>
        )
    }

    return <div>Something goes wrong here!
<br/>
        <Link to='/login' >Login</Link>

    </div>
    //throw error
};

export default ErrorPage;