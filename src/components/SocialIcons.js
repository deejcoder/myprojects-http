import React from 'react';
import styled from 'styled-components';

import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { SECONDARY_HIGHLIGHTED_TEXT } from '../const/colours';


const IconContainer = styled.div`
    color: ${SECONDARY_HIGHLIGHTED_TEXT};
    text-align: center;
    cursor: pointer;

    & > * {
        margin: 15px;
    }

    & > a {
        color: ${SECONDARY_HIGHLIGHTED_TEXT};
    }
`

/**
 * SocialIcons which contain links to social sites
 */
export default class SocialIcons extends React.Component {
    render() {
        return (

            <IconContainer>
                <a href="https://www.linkedin.com/in/dylan-tonks-605544126/">
                    <FaLinkedinIn title="LinkedIn" size={28} />
                </a>
                <a href="https://www.github.com/deejcoder">
                    <FaGithub title="GitHub" size={28} />
                </a>
                <a href="mailto:deejtonks@gmail.com">
                    <FaEnvelope title="Email" size={28} />
                </a>
                <a href="https://www.twitter.com/dy1zan">
                    <FaTwitter title="Twitter" size={28} />
                </a>
            </IconContainer>
        )
    }
}