import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import GrammarThemesDrillWrapper from "../../grammar-themes-drill/GrammarThemesDrillWrapper";
import WordsDrillWrapper from "../../words-drill/WordsDrillWrapper";
import GrammarTheory from "../../grammar-theory/GrammarTheory";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import GrammarRouteList from "../../training-route/GrammarRouteList";
import GrammarTheoryWrapper from "../../grammar-theory/GrammarTheoryWrapper";


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
                <Route Key={theme.id}  path={theme.link} element={<GrammarTheoryWrapper partOfGrammarId={theme.partOfGrammarId} />}/>
            {theme.subThemes.length > 0 ?
                theme.subThemes.map(subTheme =>
                <Route Key={subTheme.id} path={subTheme.link} element={<GrammarTheoryWrapper partOfGrammarId={subTheme.partOfGrammarId} />}/>)
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