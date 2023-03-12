import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import LessonWrapper from "../../study-routes-block/theory-and-drill-showing/LessonWrapper";
import LessonsToChoose from "../../personal-block/lessons/LessonsToChoose";
import DrillTips from "../../footer-menu-pages/DrillTips";
import Help from "../../footer-menu-pages/Help";
import Logout from "../../footer-menu-pages/Logout";
import ThemesWrapper from "../../study-routes-block/routes/ThemesWrapper";
import GrammarWrapper from "../../study-routes-block/routes/GrammarWrapper";
import PersonalTabs from "../../personal-block/PersonalTabs";
import MainPage from "../../MainPage";
import AddNewWordOrPhrase from "../../personal-block/add-new-phrase/AddNewWordOrPhrase";


const AllRoutes = () => {

    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.find(el => el.userId === userId));

    return (
        <Routes>

            <Route path="/my-account" element={<LessonsToChoose />}/>
            <Route path="/settings" element={<LessonsToChoose />}/>

            <Route path="/my-lessons" element={<LessonsToChoose />}/>
            <Route path="/add_new_phrase_or_word" element={<AddNewWordOrPhrase/>}/>
            <Route path="/phrases-to-remember" element={<PersonalTabs label={'Phrases'} />}/>

            <Route path="/grammar_route" element={<GrammarWrapper />}/>
            <Route path="/themes_route" element={<ThemesWrapper />}/>

            <Route path="/drill-tips" element={<DrillTips />}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/logout" element={<Logout/>}/>

            {/* Грамматика */}
            {userLearningRoute.userRoute.filter(el => el.isGrammar).map(theme =>
                <>
                    <Route key={theme.id} path={`/grammar_route${theme.link}`}
                           element={<LessonWrapper
                               option={'grammar'}
                               key={theme.id}
                               partOfGrammarId={theme.partOfGrammarId}
                               urlLink={`/grammar_route${theme.link}`}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={`/grammar_route${subTheme.link}`}
                                   element={<LessonWrapper
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
                           element={<LessonWrapper
                               option={'themes'}
                               key={theme.id}
                               partOfGrammarId={theme.partOfGrammarId}
                               urlLink={`/themes_route${theme.link}`}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id} path={`/themes_route${subTheme.link}`}
                                   element={<LessonWrapper
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
                           element={<LessonWrapper
                               option={'lesson' + '-' + (theme.isGrammar ? 'grammar' : 'themes')}
                               key={theme.id + 'lessons'}
                               partOfGrammarId={theme.partOfGrammarId}
                           />}/>

                    {theme.subThemes.length > 0 ?
                        theme.subThemes.map(subTheme =>
                            <Route key={subTheme.id + 'my-lessons'} path={`/my-lessons${subTheme.link}`}
                                   element={<LessonWrapper
                                       option={'lesson' + '-' + (theme.isGrammar ? 'grammar' : 'themes')}
                                       key={subTheme.id + 'lessons'}
                                       partOfGrammarId={subTheme.partOfGrammarId}
                                   />}/>)
                        : null
                    }
                </>
            )}


            <Route path="/" element={<MainPage />}/>
            <Route path="*" element={<LessonsToChoose />}/>

        </Routes>
    );
};

export default AllRoutes;