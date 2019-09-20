import React from 'react';
import styled from 'styled-components';
import { H1, Button, Intent } from '@blueprintjs/core';
import { PAGE_BACKGROUND, TEXT_COLOR } from '../const/colours';
import { FaExclamationCircle } from 'react-icons/fa';


const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: ${TEXT_COLOR};
    text-align: center;

    h1 {
        text-align: center;
        padding-left: 15px;
        display: inline;
        font-weight: 300;
        color: ${TEXT_COLOR} !important;
    }

    p {
        font-size: 16px;
        line-height: 3.2;
    }

    a {
        text-decoration: none;
    }
`

export default class NotFound extends React.Component {

    componentDidMount() {
        // set body background color
        document.body.style.backgroundColor = PAGE_BACKGROUND;
    }

    render() {
        return (
            <Content>
                <FaExclamationCircle />
                <H1>We couldn't find your page!</H1>
                <p>Sorry about that, but the resource you are looking for could not be found.</p>
                <a href="/">
                    <Button intent={Intent.SUCCESS}>Go Home</Button>
                </a>
            </Content>
        )
    }
}