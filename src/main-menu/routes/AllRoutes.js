import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import GrammarThemesDrillWrapper from "../../no-theory-drills/grammar-themes-drill/GrammarThemesDrillWrapper";
import WordsDrillWrapper from "../../no-theory-drills/words-drill/WordsDrillWrapper";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import GrammarRouteListWrapper from "../../study-routes/routes/GrammarRouteListWrapper";
import GrammarTheoryWrapper from "../../study-routes/grammar/grammar-theory/GrammarTheoryWrapper";
import ThemesRouteListWrapper from "../../study-routes/routes/ThemesRouteListWrapper";
import ThemeMainWrapper from "../../study-routes/themes/ThemeMainWrapper";


const AllRoutes = () => {

    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.find(el => el.userId === userId));

    return (
        <Routes>
            <Route path="/speak_fluent-drill" element={<GrammarThemesDrillWrapper/>}/>
            <Route path="/new_words_drill" element={<WordsDrillWrapper/>}/>
            <Route path="/grammar_route" element={<GrammarRouteListWrapper/>}/>
            <Route path="/themes_route" element={<ThemesRouteListWrapper />}/>

            {/* Грамматика */}
            {userLearningRoute.userRoute.map(theme =>
                <>
                    <Route key={theme.id} path={theme.link}
                           element={<GrammarTheoryWrapper key={theme.id} partOfGrammarId={theme.partOfGrammarId}/>}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={subTheme.link}
                                   element={<GrammarTheoryWrapper key={subTheme.id}
                                                                  partOfGrammarId={subTheme.partOfGrammarId}/>}/>)
                        : null
                    }
                </>
            )}

            {/* Темы */}
            {userLearningRoute.userThemesRoute.map(theme =>
                <>
                    <Route key={theme.id} path={theme.link}
                           element={<ThemeMainWrapper key={theme.id} partOfGrammarId={theme.partOfGrammarId}/>}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={subTheme.link}
                                   element={<ThemeMainWrapper key={subTheme.id}
                                                                  partOfGrammarId={subTheme.partOfGrammarId}/>}/>)
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