import React from 'react';

import { ProjectCardGrid } from '../components';
import { Intent, Button, H2 } from '@blueprintjs/core';
import { Auth } from '../api';
import styled from 'styled-components';


const AppWrapper = styled.div`
    color: #909090;
`

const TitleWrapper = styled(H2)`
    text-align: center;
    margin-bottom: 50px;
    margin-top: 100px;
    color: #909090;
`

const FooterWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 0;
    height: 100px;
`

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
        // set body background color
        document.body.style.backgroundColor = "#1E1E1E";

        // test if user is authenticated
        if(await Auth.isValidated()) {
            this.setState({ hasAuth: true });
        }
    }

    _handleClick() {
        Auth.logout();
        this.setState({ loggedOut: true });
    }

    render() {
        return (
            <AppWrapper>
                {this.state.hasAuth && !this.state.loggedOut && 
                    <Button intent={Intent.WARNING} onClick={this._handleClick}>Logout</Button>
                }

                <TitleWrapper>My Projects</TitleWrapper>
                <ProjectCardGrid />

                <FooterWrapper />
            
            </AppWrapper>
        )
    }
}