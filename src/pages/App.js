import React from 'react';

import { ProjectCardGrid } from '../components';
import { Intent, H2 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Auth } from '../api';
import styled from 'styled-components';


const AppWrapper = styled.div`
    color: #b3b3b3;
`

const TitleWrapper = styled(H2)`
    text-align: center;
    margin-bottom: 50px;
    margin-top: 100px;
    color: #DBDBDB;
    font-weight: normal;
`

const FooterWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 0;
    height: 100px;
`

const LogoutWrapper = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 1;
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
        document.body.style.backgroundColor = "#181818";

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
                    <LogoutWrapper>You are logged in... <Link intent={Intent.WARNING} onClick={this._handleClick}>Logout</Link></LogoutWrapper>
                }

                <TitleWrapper>My Projects</TitleWrapper>
                <ProjectCardGrid />

                <FooterWrapper />
            
            </AppWrapper>
        )
    }
}