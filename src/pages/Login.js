import React from 'react';
import { Redirect } from 'react-router-dom';
import { Intent, Button, Tooltip, Label, InputGroup, H3 } from '@blueprintjs/core';

import styled from 'styled-components';
import APIClient from '../api/APIClient';
import BackButton from '../components/BackButton';


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
        // check if user is already logged in
        let client = new APIClient();
        if(await client.checkValidation()) {
            this.setState({ success: true });
        }
    }

    async performLogin() {
        // set loading spinner
        this.setState({ loading: true });

        // send login request (sends back a jwt token)
        let client = new APIClient();

        let success = await client.login(this.passwordField.value);
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
            <React.Fragment>
                {/* Redirect if user has logged in */}
                {this.state.success && <Redirect to="/" />}

                <BackButton />

                <CenteredDiv>
                    <H3 style={{ paddingBottom: 10 }}>Administrative Login</H3>
                    <Label>
                        Passphase*
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
                    </Label>

                    <Button intent={Intent.PRIMARY} loading={loading} onClick={this.performLogin}>Login</Button>
                </CenteredDiv>
            </React.Fragment>
        )
    }

    _handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });
}