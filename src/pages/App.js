import React from 'react';

import { Redirect } from 'react-router-dom';
import ProjectCardGrid from '../components/ProjectCardGrid';
import { Intent, Button } from '@blueprintjs/core';
import APIClient from '../api/APIClient';


export default class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            hasAuth: false,
            loggedOut: false,
        }

        this._handleClick = this._handleClick.bind(this);
    }

    async componentDidMount() {
        let client = new APIClient();
        if(await client.isValidated()) {
            this.setState({ hasAuth: true });
        }
    }

    _handleClick() {
        new APIClient().logout();
        this.setState({ loggedOut: true });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                {this.state.hasAuth && !this.state.loggedOut && 
                    <Button intent={Intent.WARNING} onClick={this._handleClick}>Logout</Button>
                }
                
                <ProjectCardGrid />
            
            </React.Fragment>
        )
    }
}