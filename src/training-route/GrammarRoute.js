import React, {useState} from 'react';
import {initialTrainingRoute} from "../serverData/InitialTrainingRoute";
import {light} from "@mui/material/styles/createPalette";

function GrammarRoute() {
    // Этот компонент должен формировать меню со ссылками на страницу с теорией и ссылкой на упражнение
    const userId = 'dlkfjl3487f9s';

    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.filter(el => el.userId === userId));

    console.log(userId)
    console.log(userLearningRoute[0].userRoute)

    return (
        <div>
            <h2>Route of learning English</h2>
            <ol>
                {userLearningRoute[0].userRoute.map(theme =>
                    <>
                        <li key={theme.id}>{theme.name}</li>

                        {theme.subThemes.length > 0 ?
                            <ul>
                                {theme.subThemes.map(subTheme =>
                          <li key={subTheme.id}>{subTheme.name}</li>
                        )} </ul> : null}
                    </>
                )}
            </ol>
        </div>
    );
};

export default GrammarRoute;