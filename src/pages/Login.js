import React from 'react';
import { Redirect } from 'react-router-dom';
import { Intent, Button, Tooltip, InputGroup, H3, FormGroup, Classes } from '@blueprintjs/core';

import styled from 'styled-components';
import { Auth } from '../api';
import { BackButton } from '../components';


const CenteredDiv = styled('div')`
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    left: 50%;
    width: 350px;
    max-width: 90%;
    background-color: rgba(138, 155, 168, 0.2);
    padding: 20px;
    border-radius: 5px;
`

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            loading: false,
            failed: false,
            success: false,
        }

        this.performLogin = this.performLogin.bind(this);
    }

    async componentDidMount() {
        document.body.style.backgroundColor = "#1E1E1E";
        
        // check if user is already logged in
        if(await Auth.isValidated()) {
            this.setState({ success: true });
        }
    }

    async performLogin() {
        // set loading spinner
        this.setState({ loading: true });

        // send login request (sends back a jwt token)
        let success = await Auth.login(this.passwordField.value);
        if(!success) {
            this.setState({ failed: true, loading: false });
            return;
        }

        this.setState({ success: true });

    }

    render() {

        const { showPassword, loading, failed } = this.state;

        const lockButton = (
            <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`}>
                <Button
                    icon={showPassword ? "unlock" : "lock"}
                    intent={Intent.WARNING}
                    minimal
                    onClick={this._handleLockClick}
                />
            </Tooltip>
            
        )

        return (
            <div className={Classes.DARK}>
                {/* Redirect if user has logged in */}
                {this.state.success && <Redirect to="/" />}

                <BackButton />

                <CenteredDiv>
                    <H3 style={{ paddingBottom: 10 }}>Administrative Login</H3>
                    <FormGroup
                        label="Passphase"
                        labelInfo="(required)"
                        labelFor="password-field"
                    >
                        <InputGroup
                            id="password-field"
                            inputRef={(input) => this.passwordField = input}
                            placeholder="Enter passphase"
                            rightElement={lockButton}
                            type={showPassword ? "text" : "password"}
                            intent={failed ? Intent.DANGER : Intent.NONE }
                        />

                        {failed && 
                            <p style={{ color: "#9E2B0E" }}>Login attempt failed</p>
                        }
                    </FormGroup>

                    <Button intent={Intent.PRIMARY} loading={loading} onClick={this.performLogin}>Login</Button>
                </CenteredDiv>
            </div>
        )
    }

    _handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });
}