import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './pages/App';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';
import Curso from './components/Curso.js';

const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        {
            path: 'cursos',
            component: Cursos,
            childRoutes: [
                {
                    path: ':id',
                    component: Curso
                }
            ]
        },
        {
            path: 'sobre',
            component: Sobre
        }
    ]
}

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
