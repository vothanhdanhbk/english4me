import React from 'react';
import Resume from './pages/Resume/Resume';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CommentManager from './pages/CommentManager/CommentManager';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import English4me from './english/english4me'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Resume />
    },
    {
        path: '/comment-manager',
        exact: false,
        main: () => <CommentManager />
    },
    {
        path: '/sign-in',
        exact: false,
        main: () => <SignIn />
    },
    {
        path: '/sign-up',
        exact: false,
        main: () => <SignUp />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/english4me',
        exact: false,
        main: () => <English4me />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;