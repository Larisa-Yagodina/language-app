import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <p>Это приложение для тех, кто хочет бегло говорить по-английски</p>
            <p>Здесь вы сможете...</p>
            <div>
                <Link to='/registration'> Register </Link>
            </div>
        </div>
    );
};

export default HomePage;