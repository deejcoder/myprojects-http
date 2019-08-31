import React from 'react';
import { Intent, Button, Tooltip, FormGroup, InputGroup, H3, Colors } from '@blueprintjs/core';

import styled from 'styled-components';
import APIClient from '../api/APIClient';


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            loading: false,
            failed: false,
        }

        this.performLogin = this.performLogin.bind(this);
    }

    async performLogin() {

        // set loading spinner
        this.setState({ loading: true });

        // send login request (sends back a jwt token)
        let client = new APIClient();
        let result = await client.login(this.passwordField.value);

        // login failed?
        if(!result) {
            this.setState({ failed: true, loading: false });
            return;
        }

        this.setState({ loading: false, failed: false });
        // todo... login complete, redirect user

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

        const CenteredDiv = styled('div')`
            margin: 0;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 40%;
            left: 50%
            width: 350px;
            max-width: 90%;
            background-color: rgba(138, 155, 168, 0.2);
            padding: 20px;
            border-radius: 5px;
        `

        return (
            <CenteredDiv>
                <H3 style={{ paddingBottom: 10 }}>Administrative Login</H3>
                <FormGroup
                    label="Passphase"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup
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
        )
    }

    _handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });
}