import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

// pages
import App from './pages/App';
import Project from './pages/Project';
import EditProject from './pages/EditProject';
import Login from './pages/Login';

// errors
import NotFound from './pages/NotFound';

import * as serviceWorker from './serviceWorker';


const endpoints = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/project/:id/" component={Project} />
                <Route path="/project/:id/edit" component={EditProject} />
                <Route path="/auth/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(endpoints, document.getElementById('root'));
serviceWorker.unregister();
