import React from 'react';

import { ProjectCardGrid, Header, About, NavBar, Footer } from '../components';
import { Element } from 'react-scroll';
import { Intent, H1 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Auth } from '../api';
import styled from 'styled-components';
import { PAGE_BACKGROUND, TEXT_COLOR } from '../const/colours';


const AppWrapper = styled.div`
    position: absolute;
    color: ${TEXT_COLOR};
    font-family: "Open Sans";
    width: 100%;
    height: 100%;
    min-height: 100vh;
`

const Container = styled.div`
    min-height: 100vh;
    margin-bottom: 150px;
`

const NarrowContainer = styled.div`
    position: relative;
    top: 0%;
    margin-right: auto;
    margin-left: auto;
    max-width: 600px;
    height: 683px;
    min-height: 683px;

    @media screen and (max-width: 767px) {
        min-height: 950px;
    }
`



const LogoutWrapper = styled.p`
    position: absolute;
    top: 65px;
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
        document.body.style.backgroundColor = PAGE_BACKGROUND;

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
            <React.Fragment>
                <AppWrapper>

                    <Container>
                        <NavBar />
                        {this.state.hasAuth && !this.state.loggedOut && 
                            <LogoutWrapper>You are logged in... <Link intent={Intent.WARNING} onClick={this._handleClick}>Logout</Link></LogoutWrapper>
                        }

                        <NarrowContainer>
                            <Element name="about">
                                <Header />
                                <About />
                            </Element>
                        </NarrowContainer>

                        <Element name="projects">
                            <ProjectCardGrid id='projects' />
                        </Element>         
                    </Container>  

                    <Footer />
                </AppWrapper>


            </React.Fragment>
        )
    }
}