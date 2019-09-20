import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';
import { TEXT_COLOR } from '../const/colours';


const FooterContainer = styled.div`
    margin-bottom: 0;
    height: 175px;
    background-color: #151515;
`

const FooterContent = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

const FooterText = styled.div`
    margin-top: 15px;
    color: ${TEXT_COLOR};
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
`


export default class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <FooterContent>
                    <SocialIcons />
                    <FooterText>
                        Built using Go and React
                        by Dylan Tonks, Aug 2019
                    </FooterText>
                </FooterContent>
            </FooterContainer>
        )
    }
}