import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import GrammarThemesDrillWrapper from "../../no-theory-drills/grammar-themes-drill/GrammarThemesDrillWrapper";
import WordsDrillWrapper from "../../no-theory-drills/words-drill/WordsDrillWrapper";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import GrammarRouteList from "../../study-route/route/GrammarRouteList";
import GrammarTheoryWrapper from "../../study-route/grammar-theory/GrammarTheoryWrapper";


const AllRoutes = () => {

    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.filter(el => el.userId === userId));

    return (
        <Routes>
            <Route path="/speak_fluent-drill" element={<GrammarThemesDrillWrapper/>}/>
            <Route path="/new_words_drill" element={<WordsDrillWrapper/>}/>
            <Route path="/grammar_route" element={<GrammarRouteList />}/>


            {userLearningRoute[0].userRoute.map(theme =>
                <>
                <Route key={theme.id} path={theme.link} element={<GrammarTheoryWrapper key={theme.id} partOfGrammarId={theme.partOfGrammarId} />}/>

                    {theme.subThemes.length > 0 ?
                theme.subThemes.map(subTheme =>
                <Route key={subTheme.id} path={subTheme.link} element={<GrammarTheoryWrapper key={subTheme.id} partOfGrammarId={subTheme.partOfGrammarId} />}/>)
                    : null
            }
                </>
            )}

            <Route path="/"/>
            {/*<Route path="*" element={<App />} />*/}

        </Routes>
    );
};

export default AllRoutes;