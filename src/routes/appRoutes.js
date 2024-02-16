import React from 'react';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import Layout from "./layout/Layout";
import RegistrationForm from "../auth-login/pages/RegistrationForm";
import ChangePasswordForm from "../account/components/changing-password/ChangePasswordForm";
import ConfirmationEmailWaiting from "../auth-login/pages/ConfirmationEmailWaiting";
import ChangePasswordRequest from "../auth-login/pages/ChangePasswordRequest";
import DrillTips from "../account/pages/DrillTips";
import Help from "../account/pages/Help";
import MyAccount from "../account/pages/MyAccount";
import SettingsPage from "../account/pages/SettingsPage";
import LessonsToChoose from "../personal-block/lessons/LessonsToChoose";
import AddNewWordOrPhrase from "../personal-block/add-new-phrase/AddNewWordOrPhrase";
import PersonalTabs from "../personal-block/PersonalTabs";
import HomePage from "../intro-page/HomePage";
import RequireAuth from "../auth-login/components/RequireAuth";
import PersonalWrapper from "../personal-block/PersonalWrapper";
import NotFoundPage from "../error-handling/NotFoundPage";
import ErrorPage from "../error-handling/ErrorPage";
import EmailActivationAcknowledgePage from "../auth-login/pages/EmailActivationAcknowledgePage";
import ChangePasswordByLinkForm from "../account/components/changing-password/ChangePasswordThroughMailForm";
import RouteWrapper2 from "../study-routes-block-2/RouteWrapper2";
import LessonWrapper2 from "../study-routes-block-2/LessonWrapper2";
import LoginForm from "../auth-login/pages/LoginForm";
import {appLinks} from "./appLinks";

const appRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={
        <Layout/>
    }>
        <Route index element={<HomePage/>}/>

        <Route path="login" element={<LoginForm />}/>
        <Route path="registration" element={<RegistrationForm/>}/>
        <Route path={appLinks.resetPassword} element={<ChangePasswordRequest/>}/>

        <Route path={appLinks.activationWaiting} element={<ConfirmationEmailWaiting/>}/>
        <Route path="activation" element={<EmailActivationAcknowledgePage />}/>
        <Route path="password-reset/:id" element={<ChangePasswordByLinkForm />}/>

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

            <Route path=":block/route" element={<RouteWrapper2/>}/>
            <Route path=":block/route/:id" element={<LessonWrapper2 />}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
    </Route>
));


export default appRoutes;