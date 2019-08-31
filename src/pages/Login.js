import React from 'react';
import { Intent, Button, Tooltip, FormGroup, InputGroup, H3 } from '@blueprintjs/core';

import styled from 'styled-components';
import APIClient from '../api/APIClient';


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            loggingIn: false,
        }

        this.performLogin = this.performLogin.bind(this);
    }

    async performLogin() {
        this.setState({ loggingIn: true });
        let client = new APIClient();
        await client.login(this.passwordField.value);

        this.setState({ loggingIn: false });
        
    }

    render() {

        const lockButton = (
            <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`}>
                <Button
                    icon={this.state.showPassword ? "unlock" : "lock"}
                    intent={Intent.WARNING}
                    minimal
                    onClick={this._handleLockClick}
                    loading={this.state.loggingIn}
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
                        type={this.state.showPassword ? "text" : "password"}
                    />
                </FormGroup>

                <Button intent={Intent.PRIMARY} onClick={this.performLogin}>Login</Button>
            </CenteredDiv>
        )
    }

    _handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });
}