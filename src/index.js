import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import 'normalize.css/normalize.css';
import { Blueprint } from '@blueprintjs/core/lib/css/blueprint.css';

// pages
import App from './App';
import Project from './Project';

// errors
import NotFound from './notfound';

import * as serviceWorker from './serviceWorker';


const endpoints = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/project/:slug" component={Project} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(endpoints, document.getElementById('root'));
serviceWorker.unregister();
