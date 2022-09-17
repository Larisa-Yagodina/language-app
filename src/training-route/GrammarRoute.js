import React, {useState} from 'react';
import {initialTrainingRoute} from "../serverData/InitialTrainingRoute";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";

function GrammarRoute() {
    // Этот компонент должен формировать меню со ссылками на страницу с теорией и ссылкой на упражнение
    const userId = 'dlkfjl3487f9s';

    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.filter(el => el.userId === userId));


    return (
        <div>
                <h2>Route of learning English</h2>
            <nav>
                <ol>

                    {userLearningRoute[0].userRoute.map(theme =>
                        <div key={theme.id}>
                            <li>
                                <MenuItem>
                                    <Link to={theme.link} style={{ textDecoration: 'none', color: 'black'}}>
                                        {theme.name}
                                    </Link>
                                </MenuItem>
                            </li>
                            {theme.subThemes.length > 0 ?
                                <ul>
                                    {theme.subThemes.map(subTheme =>
                                        <li>
                                            <MenuItem key={subTheme.id}>
                                                <Link to={subTheme.link} style={{ textDecoration: 'none', color: 'black'}}>

                                                    {subTheme.name}
                                                </Link>
                                            </MenuItem>
                                        </li>
                                    )} </ul> : null}
                        </div>
                    )}
                </ol>
            </nav>
        </div>
    );
};

export default GrammarRoute;