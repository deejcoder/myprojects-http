import React from 'react';

import { ProjectCardGrid, HeaderSection, AboutSection, NavBar } from '../components';
import { Intent, H1 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Auth } from '../api';
import styled from 'styled-components';


const AppWrapper = styled.div`
    position: absolute;
    color: #b3b3b3;
    font-family: "Open Sans";
    width: 100%;
    height: 100%;
`

const NarrowContainer = styled.div`
    position: relative;
    top: 0%;
    margin-right: auto;
    margin-left: auto;
    max-width: 600px;
    height: 100%;
`

const Footer = styled.div`
    margin-top: 150px;
    margin-bottom: 0;
    height: 75px;
    background-color: #151515;
`

const FooterText = styled.div`
    color: #464646;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    
    position: relative;
    top: 50%;
    transform: translateY(-50%);
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

                <NavBar />

                <NarrowContainer>
                    <HeaderSection />
                    <AboutSection />
                </NarrowContainer>

                <ProjectCardGrid />

                <Footer>
                    <FooterText>
                        Designed & developed by Dylan Tonks<br />2019
                    </FooterText>
                </Footer>


            
            </AppWrapper>
        )
    }
}