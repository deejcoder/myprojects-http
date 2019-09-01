import React from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import styled from 'styled-components';


export default class LoadingSpinner extends React.Component {
    render() {
        const LoadingSpinnerEx = styled(Spinner)`
            position: absolute;
            transform: translate(-50%, -50%);
            top: 40%;
            left: 50%;
            margin: 0;
        `
        return (
            <LoadingSpinnerEx intent={Intent.PRIMARY} size="50" />
        )
    }
}
