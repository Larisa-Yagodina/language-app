import React from 'react';
import {
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import Layout from "../Layout";
import AuthWrapper from "../auth-login-logout/AuthWrapper";
import RegistrationForm from "../auth-login-logout/RegistrationForm";
import ChangePasswordForm from "../account-menu-pages/ChangePasswordForm";
import ConfirmationEmailWaiting from "../auth-login-logout/ConfirmationEmailWaiting";
import ChangePasswordRequest from "../account-menu-pages/ChangePasswordRequest";
import Logout from "../auth-login-logout/Logout";
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
import PersonalWrapper from "../PersonalWrapper";
import NotFoundPage from "../NotFoundPage";
import ErrorPage from "../ErrorPage";
import {connect} from "react-redux";


const appRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={
        <Layout/>
    }>
        <Route index element={<HomePage/>}/>

        <Route path="login" element={<AuthWrapper/>}/>
        <Route path="logout" element={<Logout/>}/>

        <Route path="registration" element={<RegistrationForm/>}/>
        <Route path="user/activation/waiting" element={<ConfirmationEmailWaiting/>}/>
        <Route path="user/activation/:link" element={<ConfirmationEmailWaiting/>}/>

        <Route path="change-password" element={<ChangePasswordRequest/>}/>
        <Route path="change-password/:link" element={<ChangePasswordForm/>}/>


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

            <Route path="add_new_phrase_or_word" element={<AddNewWordOrPhrase/>}/>
            <Route path="phrases-to-remember" element={<PersonalTabs label={'Phrases'}/>}/>

            <Route path="grammar_route" element={<GrammarWrapper/>}/>

            <Route path="themes_route" element={<ThemesWrapper/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
    </Route>
));


export default appRoutes;