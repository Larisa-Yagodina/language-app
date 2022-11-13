import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import WordsDrillWrapper from "../../no-theory-drills/words-drill/WordsDrillWrapper";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import GrammarRouteListWrapper from "../../study-routes/routes/GrammarRouteListWrapper";
import TheoryWrapper from "../../study-routes/theory-and-drill-showing/theory/TheoryWrapper";
import ThemesRouteListWrapper from "../../study-routes/routes/ThemesRouteListWrapper";
import ChooseLesson from "../../personal-block/ChooseLesson";
import AddNewPhraseToRemember from "../../personal-block/AddNewPraseToRemember";
import DrillTips from "../../footer-menu-pages/DrillTips";
import Help from "../../footer-menu-pages/Help";
import Logout from "../../footer-menu-pages/Logout";


const AllRoutes = () => {

    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.find(el => el.userId === userId));

    return (
        <Routes>
            <Route path="/my-lessons" element={<ChooseLesson />}/>
            <Route path="/phrases-to-remember" element={<AddNewPhraseToRemember />}/>

            <Route path="/new_words_drill" element={<WordsDrillWrapper/>}/>
            <Route path="/grammar_route" element={<GrammarRouteListWrapper/>}/>
            <Route path="/themes_route" element={<ThemesRouteListWrapper/>}/>

            <Route path="/drill-tips" element={<DrillTips />}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<ChooseLesson />}/>

            {/* Грамматика */}
            {userLearningRoute.userRoute.map(theme =>
                <>
                    <Route key={theme.id} path={`/grammar_route${theme.link}`}
                           element={<TheoryWrapper
                               option={'grammar'}
                               key={theme.id}
                               partOfGrammarId={theme.partOfGrammarId}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={`/grammar_route${subTheme.link}`}
                                   element={<TheoryWrapper
                                       option={'grammar'}
                                       key={subTheme.id}
                                       partOfGrammarId={subTheme.partOfGrammarId}
                                   />}/>)
                        : null
                    }
                </>
            )}

            {/* Темы */}
            {userLearningRoute.userThemesRoute.map(theme =>
                <>
                    <Route key={theme.id} path={`/themes_route${theme.link}`}
                           element={<TheoryWrapper
                               option={'themes'}
                               key={theme.id}
                               partOfGrammarId={theme.partOfGrammarId}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={`/themes_route${subTheme.link}`}
                                   element={<TheoryWrapper
                                       option={'themes'}
                                       key={subTheme.id}
                                       partOfGrammarId={subTheme.partOfGrammarId}
                                   />}/>)
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