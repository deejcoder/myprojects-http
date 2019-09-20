import React from 'react';
import styled from 'styled-components';
import me from '../assets/pic.jpg'


export default class Avatar extends React.Component {

    render() {

        const AvatarImage = styled.div`
            position: relative;
            float: left;
            margin-top: 10px;
            background: url(${me});
            background-size: cover;
            border-radius: 50%;
            height: ${this.props.size || 50}px;
            width: ${this.props.size || 50}px;

            @media screen and (max-width: 767px) {
                float: unset;
                margin-right: auto;
                margin-left: auto;
            }
        `

        return (
            <AvatarImage />
        )
    }
}