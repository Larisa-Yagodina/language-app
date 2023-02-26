import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import TheoryWrapper from "../../study-routes/theory-and-drill-showing/theory/TheoryWrapper";
import ChooseLesson from "../../personal-block/ChooseLesson";
import DrillTips from "../../footer-menu-pages/DrillTips";
import Help from "../../footer-menu-pages/Help";
import Logout from "../../footer-menu-pages/Logout";
import ThemesWrapper from "../../study-routes/routes/ThemesWrapper";
import GrammarWrapper from "../../study-routes/routes/GrammarWrapper";
import WordsTabs from "../../no-theory-drills/words-drill/WordsTabs";
import PersonalTabs from "../../personal-block/PersonalTabs";
import MainPage from "../../MainPage";
import AddNewWordOrPhrase from "../../personal-block/AddNewWordOrPhrase";


const AllRoutes = () => {

    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.find(el => el.userId === userId));

    return (
        <Routes>
            <Route path="/my-lessons" element={<ChooseLesson />}/>
            <Route path="/phrases-to-remember" element={<PersonalTabs label={'Phrases'} />}/>
            <Route path="/words-to-remember" element={<PersonalTabs label={'Words'} />}/>

            <Route path="/new_words_drill" element={<WordsTabs />}/>
            <Route path="/grammar_route" element={<GrammarWrapper />}/>
            <Route path="/themes_route" element={<ThemesWrapper />}/>

            <Route path="/drill-tips" element={<DrillTips />}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/add_new_phrase_or_word" element={<AddNewWordOrPhrase/>}/>
            <Route path="*" element={<ChooseLesson />}/>

            {/* Грамматика */}
            {userLearningRoute.userRoute.filter(el => el.isGrammar).map(theme =>
                <>
                    <Route key={theme.id} path={`/grammar_route${theme.link}`}
                           element={<TheoryWrapper
                               option={'grammar'}
                               key={theme.id}
                               partOfGrammarId={theme.partOfGrammarId}
                               urlLink={`/grammar_route${theme.link}`}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={`/grammar_route${subTheme.link}`}
                                   element={<TheoryWrapper
                                       option={'grammar'}
                                       key={subTheme.id}
                                       partOfGrammarId={subTheme.partOfGrammarId}
                                       urlLink={`/grammar_route${subTheme.link}`}
                                   />}/>)
                        : null
                    }
                </>
            )}

            {/* Темы */}
            {userLearningRoute.userRoute.filter(el => !el.isGrammar).map(theme =>
                <>
                    <Route key={theme.id} path={`/themes_route${theme.link}`}
                           element={<TheoryWrapper
                               option={'themes'}
                               key={theme.id}
                               partOfGrammarId={theme.partOfGrammarId}
                               urlLink={`/themes_route${theme.link}`}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={`/themes_route${subTheme.link}`}
                                   element={<TheoryWrapper
                                       option={'themes'}
                                       key={subTheme.id}
                                       partOfGrammarId={subTheme.partOfGrammarId}
                                       urlLink={`/themes_route${subTheme.link}`}
                                   />}/>)
                        : null
                    }
                </>
            )}

            {/* Уроки */}
            {userLearningRoute.userRoute.map(theme =>
                <>
                    <Route key={theme.id + 'my-lessons'} path={`/my-lessons${theme.link}`}
                           element={<TheoryWrapper
                               option={'lesson' + '-' + (theme.isGrammar ? 'grammar' : 'themes')}
                               key={theme.id + 'lessons'}
                               partOfGrammarId={theme.partOfGrammarId}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id + 'my-lessons'} path={`/my-lessons${subTheme.link}`}
                                   element={<TheoryWrapper
                                       option={'lesson' + '-' + (theme.isGrammar ? 'grammar' : 'themes')}
                                       key={subTheme.id + 'lessons'}
                                       partOfGrammarId={subTheme.partOfGrammarId}
                                   />}/>)
                        : null
                    }
                </>
            )}

            <Route path="/" element={<MainPage />}/>

            {/*<Route path="*" element={<App />} />*/}
            <Route path="*" element={<ChooseLesson />}/>

        </Routes>
    );
};

export default AllRoutes;