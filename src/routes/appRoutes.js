import React from 'react';
import {
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import Layout from "../layout/Layout";
import AuthWrapper from "../auth-login-logout/AuthWrapper";
import RegistrationForm from "../auth-login-logout/RegistrationForm";
import ChangePasswordForm from "../account-menu-pages/ChangePasswordForm";
import ConfirmationEmailWaiting from "../auth-login-logout/ConfirmationEmailWaiting";
import ChangePasswordRequest from "../account-menu-pages/ChangePasswordRequest";
import DrillTips from "../account-menu-pages/DrillTips";
import Help from "../account-menu-pages/Help";
import MyAccount from "../account-menu-pages/MyAccount";
import SettingsPage from "../account-menu-pages/SettingsPage";
import LessonsToChoose from "../personal-block/lessons/LessonsToChoose";
import AddNewWordOrPhrase from "../personal-block/add-new-phrase/AddNewWordOrPhrase";
import PersonalTabs from "../personal-block/PersonalTabs";
import GrammarWrapper from "../study-routes-block/routes/GrammarWrapper";
import ThemesWrapper from "../study-routes-block/routes/ThemesWrapper";
import HomePage from "../intro-page/HomePage";
import RequireAuth from "../auth-login-logout/RequireAuth";
import PersonalWrapper from "../personal-block/PersonalWrapper";
import NotFoundPage from "../error-handling/NotFoundPage";
import ErrorPage from "../error-handling/ErrorPage";
import LessonWrapper from "../study-routes-block/theory-and-drill-showing/LessonWrapper";
import EmailActivationAcknowledgePage from "../auth-login-logout/EmailActivationAcknowledgePage";
import ChangePasswordByLinkForm from "../account-menu-pages/ChangePasswordByLinkForm";
import RouteWrapper2 from "../study-routes-block-2/RouteWrapper2";
import LessonWrapper2 from "../study-routes-block-2/LessonWrapper2";


const appRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={
        <Layout/>
    }>
        <Route index element={<HomePage/>}/>

        <Route path="login" element={<AuthWrapper/>}/>

        <Route path="registration" element={<RegistrationForm/>}/>
        <Route path="user/activation-waiting" element={<ConfirmationEmailWaiting/>}/>
        <Route path="user/activation" element={<EmailActivationAcknowledgePage />}/>

        <Route path="/user/password-reset" element={<ChangePasswordRequest/>}/>
        <Route path="/user/password-reset/:id" element={<ChangePasswordByLinkForm />}/>

        <Route path="private/" element={
            <RequireAuth>
                {<PersonalWrapper />}
            </RequireAuth>
        } errorElement={<ErrorPage />}>
            <Route index element={<MyAccount/>}/>
            <Route path="my-lessons" element={<LessonsToChoose/>}/>
            <Route path="my-account" element={<MyAccount/>}/>
            <Route path="settings" element={<SettingsPage/>}/>
            <Route path="drill-tips" element={<DrillTips/>}/>
            <Route path="help" element={<Help/>}/>

            <Route path="change-password" element={<ChangePasswordForm/>}/>

            <Route path="add_new_phrase_or_word" element={<AddNewWordOrPhrase/>}/>
            <Route path="phrases-to-remember" element={<PersonalTabs label={'Phrases'}/>}/>

            <Route path="grammar_route" element={<GrammarWrapper/>}/>
            <Route path="grammar_route/:id" element={<LessonWrapper />}/>

            <Route path="themes_route" element={<ThemesWrapper/>}/>

            <Route path=":block/route_2" element={<RouteWrapper2/>}/>
            <Route path=":block/route_2/:id" element={<LessonWrapper2 />}/>


        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
    </Route>
));


export default appRoutes;