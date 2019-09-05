import React from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import styled from 'styled-components';


const LoadingSpinnerWrapper = styled(Spinner)`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    left: 50%;
    margin: 0;
`

export default class LoadingSpinner extends React.Component {
    render() {
        return (
            <LoadingSpinnerWrapper intent={Intent.PRIMARY} size="50" />
        )
    }
}
